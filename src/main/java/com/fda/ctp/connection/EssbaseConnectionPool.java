/**
 * 
 */
package com.fda.ctp.connection;

import com.essbase.api.datasource.IEssOlapServer;

/**
 * @author Administrator
 *
 */
public interface EssbaseConnectionPool {
	IEssOlapServer getConnection();
    boolean releaseConnection(IEssOlapServer connection);
    String getUser();
    String getPassword();
    String getProvider();
    String getOLAPServerName();
}
