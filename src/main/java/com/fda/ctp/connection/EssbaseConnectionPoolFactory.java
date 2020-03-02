/**
 * 
 */
package com.fda.ctp.connection;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.essbase.api.base.EssException;
import com.essbase.api.dataquery.IEssCubeView;
import com.essbase.api.datasource.IEssCube;
import com.essbase.api.datasource.IEssOlapServer;
import com.essbase.api.domain.IEssDomain;
import com.essbase.api.session.IEssbase;

/**
 * @author Rohit Prabhu
 *
 */
public class EssbaseConnectionPoolFactory implements EssbaseConnectionPool {

	private String user;
	private String password;
	private String olapSvrName;
	private List<IEssOlapServer> connectionPool;
	private static IEssCubeView olapSvrConnection;
	private List<IEssOlapServer> usedConnections = new ArrayList<>();
	private static int INITIAL_POOL_SIZE = 10;
	private static int statusCode = 0;
	private static String s_analyticSvrName = "localhost";
	private static final int FAILURE_CODE = 1;

	public EssbaseConnectionPoolFactory(String user, String password, String olapSvrName,
			List<IEssOlapServer> connectionPool) {
		super();

		this.user = user;
		this.password = password;
		this.olapSvrName = olapSvrName;
		this.connectionPool = connectionPool;
	}

	public EssbaseConnectionPoolFactory() {

	}

	public static IEssCubeView getConnection(String user, String password, String provider, String olapSvrName) throws EssException {

		if (olapSvrConnection == null) {
			olapSvrConnection = createReadConnection(user, password, provider, olapSvrName);
		} else {
			olapSvrConnection.close();
			olapSvrConnection = createReadConnection(user, password, provider, olapSvrName);
			return olapSvrConnection;
		}

		return olapSvrConnection;
	}

	private static IEssCubeView createReadConnection(String s_userName, String s_password, String s_provider,
			String s_olapSvrName) {
		IEssOlapServer olapSvrRead = null;
		IEssDomain dom = null;
		IEssCubeView cv = null;
		try {

			IEssbase ess = null;

			// Create JAPI instance.
			ess = IEssbase.Home.create(IEssbase.JAPI_VERSION);

			// Sign On to the Provider
			dom = ess.signOn(s_userName, s_password, false, null, s_provider);

			// Open connection with olap server and get the cube.
			olapSvrRead = (IEssOlapServer) dom.getOlapServer(s_olapSvrName);
			olapSvrRead.connect();
			IEssCube cube = olapSvrRead.getApplication("CBAS").getCube("CBAS");

			System.out.println("Loading data...");
			cv = cube.openCubeView(s_analyticSvrName);
			cv.setRepeatMemberNames(false);
			cv.setIncludeSelection(true);
			cv.updatePropertyValues();

		} catch (EssException x) {
			System.err.println("ERROR: " + x.getMessage());
			statusCode = FAILURE_CODE;
		}
		// Set status to failure only if exception occurs and do abnormal termination
		// otherwise, it will by default terminate normally
		if (statusCode == FAILURE_CODE)
			System.exit(FAILURE_CODE);

		return cv;
	}

	private static IEssCubeView createWriteConnection(String s_userName, String s_password, String s_provider,
			String s_olapSvrName) {
		IEssOlapServer olapSvrWrite = null;
		IEssDomain dom = null;
		IEssCubeView cv = null;
		try {

			IEssbase ess = null;

			// Create JAPI instance.
			ess = IEssbase.Home.create(IEssbase.JAPI_VERSION);
			// Sign On to the Provider
			dom = ess.signOn(s_userName, s_password, false, null, s_provider);

			// Open connection with olap server and get the cube.
			olapSvrWrite = (IEssOlapServer) dom.getOlapServer(s_olapSvrName);
			olapSvrWrite.connect();
			IEssCube cube = olapSvrWrite.getApplication("CBAS").getCube("CBAS");

			System.out.println("Loading data...");
			cv = cube.openCubeView(s_analyticSvrName);
			cv.setRepeatMemberNames(false);
			cv.setIncludeSelection(true);
			cv.updatePropertyValues();

		} catch (EssException x) {
			System.err.println("ERROR: " + x.getMessage());
			statusCode = FAILURE_CODE;
		}
		// Set status to failure only if exception occurs and do abnormal termination
		// otherwise, it will by default terminate normally
		if (statusCode == FAILURE_CODE)
			System.exit(FAILURE_CODE);

		return cv;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.fda.ctp.connection.EssbaseConnectionPool#getConnection()
	 */
	@Override
	public IEssOlapServer getConnection() {
		IEssOlapServer connection = connectionPool.remove(connectionPool.size() - 1);
		usedConnections.add(connection);
		return connection;

	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.fda.ctp.connection.EssbaseConnectionPool#releaseConnection(com.essbase.
	 * api.datasource.IEssOlapServer)
	 */
	@Override
	public boolean releaseConnection(IEssOlapServer connection) {
		connectionPool.add(connection);
		return usedConnections.remove(connection);
	}

	@Override
	public String getOLAPServerName() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getUser() {
		// TODO Auto-generated method stub
		return null;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.fda.ctp.connection.EssbaseConnectionPool#getPassword()
	 */
	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.fda.ctp.connection.EssbaseConnectionPool#getProvider()
	 */
	@Override
	public String getProvider() {
		// TODO Auto-generated method stub
		return null;
	}

	// standard constructors

	public int getSize() {
		return connectionPool.size() + usedConnections.size();
	}

}
