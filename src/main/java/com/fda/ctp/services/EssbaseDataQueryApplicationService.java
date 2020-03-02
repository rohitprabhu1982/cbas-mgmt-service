/*
    File: DataQuery.java 1.1, 2006-7-18
    Copyright (c) 1991, 2007 Oracle and / or its affiliates. All rights reserved.
 */
package com.fda.ctp.services;

import java.sql.SQLException;
import java.sql.Timestamp;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import com.essbase.api.base.EssException;
import com.essbase.api.base.IEssIterator;
//import com.essbase.api.datasource.*;
import com.essbase.api.dataquery.IEssCubeView;
import com.essbase.api.dataquery.IEssGridView;
import com.essbase.api.dataquery.IEssOpPivot;
import com.essbase.api.dataquery.IEssOperation;
import com.essbase.api.datasource.IEssCube;
import com.essbase.api.datasource.IEssOlapServer;
import com.essbase.api.metadata.IEssMember;
import com.essbase.api.metadata.IEssMemberSelection;
import com.essbase.api.session.IEssbase;
import com.fda.ctp.bean.AcquisitionPreCommitmentList;
import com.fda.ctp.bean.AcquisitionsWithCTP;
import com.fda.ctp.bean.HSPActionValue;
import com.fda.ctp.bean.HSPTextCellValue;
import com.fda.ctp.connection.EssbaseConnectionPoolFactory;
import com.fda.ctp.domain.HSPActionEntity;
import com.fda.ctp.domain.HSPTextCellValueEntity;
import com.fda.ctp.repository.HSPActionRepository;
import com.fda.ctp.repository.HSPTextCellRepository;
import com.fda.ctp.repository.HSPTextToIntRepository;
import com.fda.ctp.util.Constants;
import com.fda.ctp.util.TDLProUtil;

/**
 * Data Query Example does the following: Signs on to essbase domain, Opens a
 * cube view, Performs Retrieve, ZoomIn, ZoomOut, KeepOnly, RemoveOnly, Pivot,
 * and Signs Off.
 * 
 * In order for this sample to work in your environment, make sure to change the
 * s_* variables make sure to edit the method performCubeViewOperation()
 * accordingly.
 * 
 * @author Rohit Prabhu
 * @version 1
 */

@Service("essbaseQuerySampleApApplicationService")
@PropertySource({ "classpath:essbase/essbase-db.properties" })
public class EssbaseDataQueryApplicationService {
	// NOTE: Change the following variables to suit your setup.

	@Autowired
	private HSPTextCellRepository hspTextCellDataMap;
	@Autowired
	private HSPTextToIntRepository hspTextToIntMap;
	@Autowired
	private Environment env;
	@Autowired
	private HSPActionRepository hspActionRepo;

	private IEssCubeView connection = null;
	public static final Logger logger = LoggerFactory.getLogger(EssbaseDataQueryApplicationService.class);

	private static final int FAILURE_CODE = 1;
	private String essUserName = "s_userName";
	private String essPassword = "s_password";
	private String essROUserName = "readonly_username";
	private String essROPassword = "readonly_password";
	private String essProvider = "s_provider";
	private String essOlapSvrName = "s_olapSvrName";

	public List<AcquisitionsWithCTP> getAcquisitionWithCTPData(String office, Optional<String> acquisitonType,
			Optional<String> version, String role) throws EssException {
		int statusCode = 0;
		IEssbase ess = null;
		IEssGridView grid = null;

		List<AcquisitionsWithCTP> userList = new ArrayList<AcquisitionsWithCTP>();
		try {

			connection = getConnection(role);
			String acquisitonTypeValue = "Acquisition Line Items";
			if (acquisitonType.isPresent()) {
				acquisitonTypeValue = acquisitonType.get();
			}
			List<String> ctpList = getAcquisitionListOfCTPData(acquisitonTypeValue, connection);
			grid = performAcquisitionCTPCubeViewOperation(ess, connection, "retrieve", ctpList, office, version);

			String[][] finalGridData = grid.getAllStringValues();
			for (int i = 2; i < finalGridData.length; i++) {
				AcquisitionsWithCTP acquisition = new AcquisitionsWithCTP();
				for (int j = 0; j < finalGridData.length; j++) {
					acquisition.setCtpLineItem(finalGridData[i][0]);
					acquisition.setProjectTitle(getTextValue(finalGridData[i][3]));
					acquisition.setDetailedDescription(getTextValue(finalGridData[i][4]));
					acquisition.setFundingAmount(finalGridData[i][5]);
					acquisition.setChangeAmount(finalGridData[i][6]);
					acquisition.setEstimatedRevisedAmount(finalGridData[i][7]);
					acquisition.setEstTotFiscalYearAmount(finalGridData[i][8]);
					acquisition.setEstTotProjectValue(finalGridData[i][9]);
					acquisition.setAnticipatedAwardType(finalGridData[i][10]);
					acquisition.setPlannedPOPStartDate(TDLProUtil.exponentToDateConverter(finalGridData[i][11]));
					acquisition.setPlannedPOPEndDate(TDLProUtil.exponentToDateConverter(finalGridData[i][12]));
					acquisition.setCtpPlannedAwardDate(TDLProUtil.exponentToDateConverter(finalGridData[i][13]));
					acquisition.setCtpPlannedCommitmentDate(TDLProUtil.exponentToDateConverter(finalGridData[i][14]));
					acquisition.setNumOfDaysUntAcqPackDue(finalGridData[i][15]);
					acquisition.setExistingGrantNumber(finalGridData[i][16]);
					acquisition.setGrantStatus(finalGridData[i][17]);
					acquisition.setZeroDollarReq(finalGridData[i][18]);
					acquisition.setCollaborationFlag(finalGridData[i][19]);
					acquisition.setPriorityLevel(finalGridData[i][20]);
					acquisition.setRecurringItem(finalGridData[i][21]);
					acquisition.setCorNameAndTelNum(finalGridData[i][22]);
					acquisition.setCorCertLevel(finalGridData[i][23]);
					acquisition.setAltCorNameAndTelNum(finalGridData[i][24]);
					acquisition.setAltCorCertLevel(finalGridData[i][25]);
					acquisition.setAatLiasNameAndTelNum(finalGridData[i][26]);
					acquisition.setCodeCFDANum(finalGridData[i][27]);
					acquisition.setPubOfScintResearch(finalGridData[i][28]);
					acquisition.setTraining(finalGridData[i][29]);
					acquisition.setConfSupport(finalGridData[i][30]);
					acquisition.setPapworkRedAct(finalGridData[i][31]);
					acquisition.setCoiReviewDate(TDLProUtil.exponentToDateConverter(finalGridData[i][32]));
					acquisition.setSoleSource(finalGridData[i][33]);
					acquisition.setHumanSubjects(finalGridData[i][34]);
					acquisition.setAnimalSubjects(finalGridData[i][35]);
					acquisition.setCurRequisitionNumber(finalGridData[i][36]);
					acquisition.setRequisitionNumber2(getTextValue(finalGridData[i][37]));
					acquisition.setRequisitionNumber3(getTextValue(finalGridData[i][38]));
					acquisition.setRequisitionNumber4(getTextValue(finalGridData[i][39]));
					acquisition.setRequisitionNumber5(getTextValue(finalGridData[i][40]));
					acquisition.setColorcode(finalGridData[i][41]);
					acquisition.setNotes(finalGridData[i][42]);
					acquisition.setAnticipatedActionType(finalGridData[i][43]);
					acquisition.setOagsCutOffDate(TDLProUtil.exponentToDateConverter(finalGridData[i][44]));
					acquisition.setSlaDueDate(TDLProUtil.exponentToDateConverter(finalGridData[i][45]));
					acquisition.setFbrNumber(finalGridData[i][46]);

				}
				userList.add(acquisition);

			}

			List<AcquisitionsWithCTP> emptyCTPList = new ArrayList<AcquisitionsWithCTP>();
			for (AcquisitionsWithCTP acquisitionsWithCTP : userList) {
				if (acquisitionsWithCTP.getProjectTitle() == null || acquisitionsWithCTP.getProjectTitle().isEmpty()) {
					emptyCTPList.add(acquisitionsWithCTP);
				}
			}
			userList.removeAll(emptyCTPList);

		} catch (EssException x) {
			logger.error("Error occured due to: " + x.getMessage());
			statusCode = FAILURE_CODE;
		} catch (ParseException e) {
			logger.error("Error occured due to: " + e.getMessage());
			statusCode = FAILURE_CODE;
		} finally {
			connection.close();
			connection = null;
		}
		if (statusCode == FAILURE_CODE)
			System.exit(FAILURE_CODE);
		return userList;
	}

	public boolean setAcquisitionWithCTPData(List<AcquisitionsWithCTP> acquisitions, String office,
			Optional<String> acquisitonType, Optional<String> version)
			throws SQLException, ParseException, EssException {

		boolean status = true;
		Iterator<AcquisitionsWithCTP> itr = acquisitions.iterator();
		AcquisitionsWithCTP acquisition;
		StringBuilder acquisitionDim = new StringBuilder();
		if (office != null || !office.equals("")) {
			acquisitionDim.append(office);
		} else {
			status = false;
		}

		String acquisitionRemainingDimData = " Working '25.2' FY20 'Key Activity/Topic None' 'Acquisitions None' 'Project Data Fields' 'Ending Balance' ";
		acquisitionDim.append(acquisitionRemainingDimData);
		String acquisitionDimensionData = acquisitionDim.toString();
		StringBuilder dimString;
		if (connection == null) {
			connection = EssbaseConnectionPoolFactory.getConnection(env.getProperty(essUserName),
					env.getProperty(essPassword), env.getProperty(essProvider), env.getProperty(essOlapSvrName));
		}
		while (itr.hasNext()) {

			acquisition = itr.next();
			if (acquisition.getProjectTitle() == null || acquisition.getProjectTitle().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("01"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("01"));
				dimString.append(getTextIntValue(acquisition.getProjectTitle()));
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getDetailedDescription() == null || acquisition.getDetailedDescription().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("02"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("02"));
				dimString.append(getTextIntValue(acquisition.getDetailedDescription()));
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getFbrNumber() == null || acquisition.getFbrNumber().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("02"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("44"));
				dimString.append(acquisition.getFbrNumber());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getFundingAmount() == null || acquisition.getFundingAmount().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("03"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("03"));
				dimString.append(acquisition.getFundingAmount());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getChangeAmount() == null || acquisition.getChangeAmount().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("39"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("39"));
				dimString.append(acquisition.getChangeAmount());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getEstimatedRevisedAmount() == null || acquisition.getEstimatedRevisedAmount().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("40"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("40"));
				dimString.append(acquisition.getEstimatedRevisedAmount());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getEstTotFiscalYearAmount() == null || acquisition.getEstTotFiscalYearAmount().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("04"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("04"));
				dimString.append(acquisition.getEstTotFiscalYearAmount());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getEstTotProjectValue() == null || acquisition.getEstTotProjectValue().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("05"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("05"));
				dimString.append(acquisition.getEstTotProjectValue());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getAnticipatedAwardType() == null || acquisition.getAnticipatedAwardType().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("06"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("06"));
				dimString.append(acquisition.getAnticipatedAwardType());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getPlannedPOPStartDate() == null || acquisition.getPlannedPOPStartDate().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("07"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("07"));
				dimString.append(TDLProUtil.dateToExponentConverter(acquisition.getPlannedPOPStartDate()));
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getPlannedPOPEndDate() == null || acquisition.getPlannedPOPEndDate().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("08"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("08"));
				dimString.append(TDLProUtil.dateToExponentConverter(acquisition.getPlannedPOPEndDate()));
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getCtpPlannedAwardDate() == null || acquisition.getCtpPlannedAwardDate().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("09"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("09"));
				dimString.append(TDLProUtil.dateToExponentConverter(acquisition.getCtpPlannedAwardDate()));
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getCtpPlannedCommitmentDate() == null
					|| acquisition.getCtpPlannedCommitmentDate().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("10"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("10"));
				dimString.append(TDLProUtil.dateToExponentConverter(acquisition.getCtpPlannedCommitmentDate()));
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getNumOfDaysUntAcqPackDue() == null || acquisition.getNumOfDaysUntAcqPackDue().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("11"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("11"));
				dimString.append(acquisition.getNumOfDaysUntAcqPackDue());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getExistingGrantNumber() == null || acquisition.getExistingGrantNumber().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("12"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("12"));
				dimString.append(acquisition.getExistingGrantNumber());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getGrantStatus() == null || acquisition.getGrantStatus().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("13"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("13"));
				dimString.append(acquisition.getGrantStatus());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getZeroDollarReq() == null || acquisition.getZeroDollarReq().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("14"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("14"));
				dimString.append(acquisition.getZeroDollarReq());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getCollaborationFlag() == null || acquisition.getCollaborationFlag().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("15"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("15"));
				dimString.append(acquisition.getCollaborationFlag());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getPriorityLevel() == null || acquisition.getPriorityLevel().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("16"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("16"));
				dimString.append(acquisition.getPriorityLevel());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getRecurringItem() == null || acquisition.getRecurringItem().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("17"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("17"));
				dimString.append(acquisition.getRecurringItem());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getCorNameAndTelNum() == null || acquisition.getCorNameAndTelNum().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("18"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("18"));
				dimString.append(acquisition.getCorNameAndTelNum());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getCorCertLevel() == null || acquisition.getCorCertLevel().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("19"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("19"));
				dimString.append(acquisition.getCorCertLevel());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getAltCorNameAndTelNum() == null || acquisition.getAltCorNameAndTelNum().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("20"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("20"));
				dimString.append(acquisition.getAltCorNameAndTelNum());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getAltCorCertLevel() == null || acquisition.getAltCorCertLevel().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("21"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("21"));
				dimString.append(acquisition.getAltCorCertLevel());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getAatLiasNameAndTelNum() == null || acquisition.getAatLiasNameAndTelNum().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("22"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("22"));
				dimString.append(acquisition.getAatLiasNameAndTelNum());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getCodeCFDANum() == null || acquisition.getCodeCFDANum().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("23"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("23"));
				dimString.append(acquisition.getCodeCFDANum());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getPubOfScintResearch() == null || acquisition.getPubOfScintResearch().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("24"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("24"));
				dimString.append(acquisition.getPubOfScintResearch());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getTraining() == null || acquisition.getTraining().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("25"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("25"));
				dimString.append(acquisition.getTraining());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getConfSupport() == null || acquisition.getConfSupport().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("26"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("26"));
				dimString.append(acquisition.getConfSupport());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getPapworkRedAct() == null || acquisition.getPapworkRedAct().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("27"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("27"));
				dimString.append(acquisition.getPapworkRedAct());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getCoiReviewDate() == null || acquisition.getCoiReviewDate().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("28"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("28"));
				dimString.append(TDLProUtil.dateToExponentConverter(acquisition.getCoiReviewDate()));
				loadDimentionData(dimString.toString());
			}

			if (acquisition.getSoleSource() == null || acquisition.getSoleSource().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("29"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("29"));
				dimString.append(acquisition.getSoleSource());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getHumanSubjects() == null || acquisition.getHumanSubjects().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("30"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("30"));
				dimString.append(acquisition.getHumanSubjects());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getAnimalSubjects() == null || acquisition.getAnimalSubjects().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("31"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("31"));
				dimString.append(acquisition.getAnimalSubjects());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getCurRequisitionNumber() == null || acquisition.getCurRequisitionNumber().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("32"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("32"));
				dimString.append(acquisition.getCurRequisitionNumber());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getRequisitionNumber2() == null || acquisition.getRequisitionNumber2().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("33"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("33"));
				dimString.append(acquisition.getRequisitionNumber2());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getRequisitionNumber3() == null || acquisition.getRequisitionNumber3().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("34"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("34"));
				dimString.append(acquisition.getRequisitionNumber3());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getRequisitionNumber4() == null || acquisition.getRequisitionNumber4().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("35"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("35"));
				dimString.append(acquisition.getRequisitionNumber4());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getRequisitionNumber5() == null || acquisition.getRequisitionNumber5().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("36"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("36"));
				dimString.append(acquisition.getRequisitionNumber5());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getColorcode() == null || acquisition.getColorcode().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("37"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("37"));
				dimString.append(acquisition.getColorcode());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getNotes() == null || acquisition.getNotes().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("38"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("38"));
				dimString.append(acquisition.getNotes());
				loadDimentionData(dimString.toString());

			}

			if (acquisition.getAnticipatedActionType() == null || acquisition.getAnticipatedActionType().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("41"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("41"));
				dimString.append(acquisition.getAnticipatedActionType());
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getOagsCutOffDate() == null || acquisition.getOagsCutOffDate().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("42"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("42"));
				dimString.append(TDLProUtil.dateToExponentConverter((acquisition.getOagsCutOffDate())));
				loadDimentionData(dimString.toString());
			}
			if (acquisition.getSlaDueDate() == null || acquisition.getSlaDueDate().equals("")) {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("43"));
				dimString.append(" ");
				loadDimentionData(dimString.toString());
			} else {
				dimString = new StringBuilder();
				dimString.append(acquisitionDimensionData);
				dimString.append("'" + acquisition.getCtpLineItem() + "'");
				dimString.append(Constants.AcquisitionData.get("43"));
				dimString.append(TDLProUtil.dateToExponentConverter(acquisition.getSlaDueDate()));
				loadDimentionData(dimString.toString());
			}
		}
		return status;

	}

	public List<String> getAcquisitionOfficeData() throws EssException, SQLException {
		IEssMemberSelection mbrSel = null;
		List<String> officeList = new ArrayList<String>();
		try {
			connection = EssbaseConnectionPoolFactory.getConnection(env.getProperty(essUserName),
					env.getProperty(essPassword), env.getProperty(essProvider), env.getProperty(essOlapSvrName));
			IEssCube cube = connection.getCube();
			mbrSel = cube.openMemberSelection("Sample member selection");
			mbrSel.executeQuery("Executive Office", IEssMemberSelection.QUERY_TYPE_BOTTOMLEVEL,
					IEssMemberSelection.QUERY_OPTION_MEMBERSONLY, "Years", "", "");
			IEssIterator mbrs = mbrSel.getMembers();
			logger.info(("\nPerforming Member Selection (Select children of Year): \n"
					+ "------------------------------------------------------"));
			for (int i = 0; i < mbrs.getCount(); i++) {
				IEssMember mbr = (IEssMember) mbrs.getAt(i);
				officeList.add(mbr.getName());
			}
		} catch (EssException x) {
			logger.error("Error occured due to: " + x.getMessage());
		} finally {
			try {
				if (mbrSel != null)
					mbrSel.close();
			} catch (EssException x) {
				logger.error("Error occured due to: " + x.getMessage());
			}
			connection.close();
			connection = null;
		}
		return officeList;
	}

	public List<String> getAcquisitionVersionData() throws EssException, SQLException {
		IEssMemberSelection mbrSel = null;
		List<String> versionList = new ArrayList<String>();
		try {
			connection = EssbaseConnectionPoolFactory.getConnection(env.getProperty(essUserName),
					env.getProperty(essPassword), env.getProperty(essProvider), env.getProperty(essOlapSvrName));
			IEssCube cube = connection.getCube();
			mbrSel = cube.openMemberSelection("Sample member selection");
			mbrSel.executeQuery("FY20 Weekly Versions", IEssMemberSelection.QUERY_TYPE_BOTTOMLEVEL,
					IEssMemberSelection.QUERY_OPTION_MEMBERSONLY, "Years", "", "");
			IEssIterator mbrs = mbrSel.getMembers();
			String currentVersion = "Working";
			logger.info(("\nPerforming Member Selection (Select children of Year): \n"
					+ "------------------------------------------------------"));
			versionList.add(currentVersion);
			for (int i = 0; i < mbrs.getCount(); i++) {
				IEssMember mbr = (IEssMember) mbrs.getAt(i);
				versionList.add(mbr.getName());
			}
			
		} catch (EssException x) {
			logger.error("Error occured due to: " + x.getMessage());
		} finally {
			try {
				if (mbrSel != null)
					mbrSel.close();
			} catch (EssException x) {
				logger.error("Error occured due to: " + x.getMessage());
			}
			connection.close();
			connection = null;
		}
		return versionList;
	}

	public List<String> getAcquisitionListOfCTPData(String acquisitionType, IEssCubeView connection)
			throws EssException {
		IEssMemberSelection mbrSel = null;
		List<String> ctpList = new ArrayList<String>();
		try {

			IEssCube cube = connection.getCube();
			mbrSel = cube.openMemberSelection("Sample member selection");
			mbrSel.executeQuery(acquisitionType, IEssMemberSelection.QUERY_TYPE_BOTTOMLEVEL,
					IEssMemberSelection.QUERY_OPTION_MEMBERSONLY, "Line Item", "", "");
			IEssIterator mbrs = mbrSel.getMembers();
			logger.info(("\nPerforming Member Selection (Select children of Line Item): \n"
					+ "------------------------------------------------------"));
			for (int i = 0; i < mbrs.getCount(); i++) {
				IEssMember mbr = (IEssMember) mbrs.getAt(i);
				ctpList.add(mbr.getName());
			}
		} catch (EssException x) {
			logger.error("Error occured due to: " + x.getMessage());
			connection.close();
		} finally {
			try {
				if (mbrSel != null)
					mbrSel.close();
			} catch (EssException x) {
				logger.error("Error occured due to: " + x.getMessage());
			}
		}
		return ctpList;
	}

	public IEssGridView performAcquisitionCTPCubeViewOperation(IEssbase ess, IEssCubeView cv, String opStr,
			List<String> ctpList, String office, Optional<String> version) throws EssException {
		// Create a grid view with the input for the operation.
		IEssGridView grid = cv.getGridView();

		String versionValue = "Working";

		if (version.isPresent()) {
			versionValue = version.get();
		}
		String[][] finalGridData = grid.getAllStringValues();
		logger.info(("Query Results for the Operation: " + finalGridData + "\n"));
		grid.setSize(10000, 100);
		grid.setValue(0, 3, "Ending Balance");
		grid.setValue(0, 4, office);
		grid.setValue(0, 5, "FY20");
		grid.setValue(0, 6, "Project Data Fields");
		grid.setValue(0, 7, "25.2");
		grid.setValue(0, 8, versionValue);
		grid.setValue(0, 9, "Acquisitions None");
		grid.setValue(0, 10, "Key Activity/Topic None");
		for (int i = 0; i < ctpList.size(); i++) {
			grid.setValue(i + 2, 0, ctpList.get(i));
		}
		grid.setValue(1, 3, "Project Title");
		grid.setValue(1, 4, "Detailed Description");
		grid.setValue(1, 5, "Funding Amount");
		grid.setValue(1, 6, "Change Amount");
		grid.setValue(1, 7, "Estimated Revised Amount");
		grid.setValue(1, 8, "Estimated Total Fiscal Year Amount");
		grid.setValue(1, 9, "Estimated Total Project Value");
		grid.setValue(1, 10, "Grants - Anticipated Award Type");
		grid.setValue(1, 11, "Planned PoP Start Date");
		grid.setValue(1, 12, "Planned PoP End Date");
		grid.setValue(1, 13, "CTP Planned Award Date");
		grid.setValue(1, 14, "CTP Planned Commitment Date");
		grid.setValue(1, 15, "Number of Days until Acquisitions Package Due");
		grid.setValue(1, 16, "Existing Grant Number");
		grid.setValue(1, 17, "Grant Status");
		grid.setValue(1, 18, "Zero Dollar Req");
		grid.setValue(1, 19, "Collaboration Flag");
		grid.setValue(1, 20, "Priority Level");
		grid.setValue(1, 21, "Recurring Item");
		grid.setValue(1, 22, "COR Name and Telephone");
		grid.setValue(1, 23, "COR Certification Level");
		grid.setValue(1, 24, "Alternate COR Name and Telephone");
		grid.setValue(1, 25, "Alternate COR Certification Level");
		grid.setValue(1, 26, "AAT Liaison Name and Telephone");
		grid.setValue(1, 27, "NAICS Code/CFDA Number");
		grid.setValue(1, 28, "Publication of Scientific Research");
		grid.setValue(1, 29, "Training");
		grid.setValue(1, 30, "Conference Support");
		grid.setValue(1, 31, "Paperwork Reduction Act");
		grid.setValue(1, 32, "COI Review Date");
		grid.setValue(1, 33, "Sole Source");
		grid.setValue(1, 34, "Human Subjects");
		grid.setValue(1, 35, "Animal Subjects");
		grid.setValue(1, 36, "Current Requisition Number");
		grid.setValue(1, 37, "Requisition Number 2");
		grid.setValue(1, 38, "Requisition Number 3");
		grid.setValue(1, 39, "Requisition Number 4");
		grid.setValue(1, 40, "Requisition Number 5");
		grid.setValue(1, 41, "Color Code");
		grid.setValue(1, 42, "Notes");
		grid.setValue(1, 43, "Anticipated Action Type");
		grid.setValue(1, 44, "OAGS Cut-Off Date");
		grid.setValue(1, 45, "SLA Due Date");
		grid.setValue(1, 46, "FBR Number");

		// Create the operation specification.
		IEssOperation op = null;
		if (opStr.equals("retrieve")) {
			op = cv.createIEssOpRetrieve();
		} else if (opStr.equals("pivot")) {
			op = cv.createIEssOpPivot();
			((IEssOpPivot) op).set(0, 4);
		} else
			throw new EssException("Operation not supported.");

		// Perform the operation.
		cv.performOperation(op);

		// Get the result and print the output.
		int cntRows = grid.getCountRows(), cntCols = grid.getCountColumns();
		logger.info(("Query Results for the Operation: " + opStr + "\n"
				+ "-----------------------------------------------------\n"));
		for (int i = 0; i < cntRows; i++) {
			for (int j = 0; j < cntCols; j++)
				logger.info((grid.getValue(i, j) + "\t"));

		}

		return grid;
	}

	public void performMemberSelection(IEssbase ess, IEssCubeView cv) throws EssException {
		String fldSel = "<OutputType Binary <SelectMbrInfo (MemberName, MemberLevel, MemberGen, Consolidation, MemberFormula, MemberAlias, DimensionName, Expense,  MemberNumber, DimensionNumber, ChildMemberName, ParentMemberName, PreviousMemberName, NextMemberName)",
				mbrSel = "@ichild(Product), @ichild(Market)";
		IEssMember[] mbrs = cv.memberSelection(mbrSel, fldSel);
		for (int i = 0; i < mbrs.length; i++) {
			IEssMember mbr = mbrs[i];
			System.out.println("Name: " + mbr.getName());
			System.out.println("Level: " + mbr.getLevelNumber());
			System.out.println("Generation: " + mbr.getGenerationNumber());
			System.out.println("Consolidation: " + mbr.getConsolidationType());
			System.out.println("Formula: " + mbr.getFormula());
			System.out.println("Dimension name: " + mbr.getDimensionName());
			System.out.println("Parent name: " + mbr.getParentMemberName());
			System.out.println("Member number: " + mbr.getMemberNumber());
			System.out.println("Dimension number: " + mbr.getDimensionNumber());
		}

		mbrs = cv.memberSelection("Year", IEssMemberSelection.QUERY_TYPE_CHILDREN,
				IEssMemberSelection.QUERY_OPTION_MEMBERSONLY, "Year", "", "");
		for (int i = 0; i < mbrs.length; i++) {
			IEssMember mbr = mbrs[i];
			logger.info(("Name: " + mbr.getName() + ", Desc: " + mbr.getDescription() + ", Level Num: "
					+ mbr.getLevelNumber() + ", Gen Num: " + mbr.getGenerationNumber() +
//                ", Child count: " + mbr.getChildCount() +
					", Dim Name: "
					+ mbr.getDimensionName() /*
												 * + ", Dim Category: " + mbr.getDimensionCategory().stringValue()
												 */));
		}
	}

	public void loadDimentionData(String loadDimData) throws SQLException {
		int statusCode = 0;
		IEssbase ess = null;
		IEssOlapServer olapSvr = null;
		try {

			IEssCube cube = connection.getCube();
			logger.info(("Loading data..."));
			cube.beginUpdate(true, false);
			cube.sendString(loadDimData);
			cube.endUpdate();
			logger.info(("Data Loading completed."));

		} catch (EssException x) {
			logger.error("Error occured due to: " + x.getMessage());
			statusCode = FAILURE_CODE;
		} finally {
			// Close olap server connection and sign off from the domain.
			try {
				if (olapSvr != null && olapSvr.isConnected() == true)
					olapSvr.disconnect();
			} catch (EssException x) {
				logger.error("Error occured due to: " + x.getMessage());
			}

			try {
				if (ess != null && ess.isSignedOn() == true)
					ess.signOff();
			} catch (EssException x) {
				logger.error("Error occured due to: " + x.getMessage());
			}
		}

		if (statusCode == FAILURE_CODE)
			System.exit(FAILURE_CODE);
	}

	public AcquisitionPreCommitmentList getAcquisitionPreCommitmentList() {
		List<String> officeList = new ArrayList<String>();
		List<String> acquisitionTypeList = new ArrayList<String>();
		List<String> versionList = new ArrayList<String>();
		List<String> projectTitleList = new ArrayList<String>();
		AcquisitionPreCommitmentList preCommitmentList = new AcquisitionPreCommitmentList();
		officeList.add("OIMT");
		officeList.add("OCD");
		officeList.add("OCE");
		acquisitionTypeList.add("Contracts");
		acquisitionTypeList.add("Grants");
		acquisitionTypeList.add("IAAs");
		versionList.add("Working");
		projectTitleList.add("CTP-20-C-0008");
		projectTitleList.add("CTP-20-C-0009");
		projectTitleList.add("CTP-20-C-0010");
		projectTitleList.add("CTP-20-C-0244");
		projectTitleList.add("CTP-20-C-0293");

		preCommitmentList.setOfficeList(officeList);
		preCommitmentList.setAcquisitionTypeList(acquisitionTypeList);
		preCommitmentList.setVersionList(versionList);
		preCommitmentList.setProjectTitleList(projectTitleList);
		return preCommitmentList;
	}

	public AcquisitionPreCommitmentList getAcquisitionPreCommitmentListData(Optional<String> office,
			Optional<String> acquisitonType, Optional<String> version) throws EssException {

		IEssMemberSelection mbrSel = null;
		IEssbase ess = null;
		IEssGridView grid = null;
		List<String> officeList;
		List<String> acquisitionTypeList = new ArrayList<String>();
		List<String> versionList;
		List<String> projectTitleList;
		List<AcquisitionsWithCTP> userList = new ArrayList<AcquisitionsWithCTP>();
		AcquisitionPreCommitmentList preCommitmentList = new AcquisitionPreCommitmentList();
		try {
		String acquisitonTypeValue = "Acquisition Line Items";
		if (acquisitonType.isPresent()) {
			acquisitonTypeValue = acquisitonType.get();
		}
		String officeValue = "";
		if (office.isPresent()) {
			officeValue = office.get();
		}
		String versionValue = "Working";
		if (version.isPresent()) {
			versionValue = version.get();
		}
		
		officeList = getAcquisitionOfficeData();
		versionList = getAcquisitionVersionData();
		acquisitionTypeList.add("Contracts");
		acquisitionTypeList.add("Grants");
		acquisitionTypeList.add("IAAs");
		connection = EssbaseConnectionPoolFactory.getConnection(env.getProperty(essUserName),
				env.getProperty(essPassword), env.getProperty(essProvider), env.getProperty(essOlapSvrName));
		projectTitleList = getCTPData(acquisitonTypeValue, officeValue, connection);
		
		if (officeValue != null && !officeValue.isEmpty()) {
			grid = performAcquisitionCTPCubeViewOperation(ess, connection, "retrieve", projectTitleList, officeValue,
					version);

			String[][] finalGridData = grid.getAllStringValues();
			for (int i = 2; i < finalGridData.length; i++) {
				AcquisitionsWithCTP acquisition = new AcquisitionsWithCTP();
				for (int j = 0; j < finalGridData.length; j++) {
					acquisition.setCtpLineItem(finalGridData[i][0]);
					acquisition.setProjectTitle(getTextValue(finalGridData[i][3]));
				}
				userList.add(acquisition);

			}

			List<AcquisitionsWithCTP> emptyCTPList = new ArrayList<AcquisitionsWithCTP>();
			for (AcquisitionsWithCTP acquisitionsWithCTP : userList) {
				if (acquisitionsWithCTP.getProjectTitle() == null || acquisitionsWithCTP.getProjectTitle().isEmpty()) {
					emptyCTPList.add(acquisitionsWithCTP);
				}
			}
			userList.removeAll(emptyCTPList);
			projectTitleList = new ArrayList<String>();
			for (AcquisitionsWithCTP acquisitionsWithCTP : userList) {
				projectTitleList.add(acquisitionsWithCTP.getCtpLineItem()+ ": " +acquisitionsWithCTP.getProjectTitle());
			}
		}else {
			grid = performAcquisitionCTPCubeViewOperation(ess, connection, "retrieve", projectTitleList, officeValue,
					version);

			String[][] finalGridData = grid.getAllStringValues();
			for (int i = 2; i < finalGridData.length; i++) {
				AcquisitionsWithCTP acquisition = new AcquisitionsWithCTP();
				for (int j = 0; j < finalGridData.length; j++) {
					acquisition.setCtpLineItem(finalGridData[i][0]);
					acquisition.setProjectTitle(getTextValue(finalGridData[i][3]));
				}
				userList.add(acquisition);

			}
			projectTitleList = new ArrayList<String>();
			for (AcquisitionsWithCTP acquisitionsWithCTP : userList) {
				projectTitleList.add(acquisitionsWithCTP.getCtpLineItem()+ ": " +acquisitionsWithCTP.getProjectTitle());
			}
		}

		preCommitmentList.setOfficeList(officeList);
		preCommitmentList.setAcquisitionTypeList(acquisitionTypeList);
		preCommitmentList.setVersionList(versionList);
		preCommitmentList.setProjectTitleList(projectTitleList);
		} catch (EssException x) {
			logger.error("Error occured due to: " + x.getMessage());
			connection.close();
			connection = null;
		} catch (SQLException x) {
			logger.error("Error occured due to: " + x.getMessage());
			connection.close();
			connection = null;
		}finally {
			try {
				if (mbrSel != null)
					mbrSel.close();
			} catch (EssException x) {
				logger.error("Error occured due to: " + x.getMessage());
			}
			connection.close();
			connection = null;
		}

		return preCommitmentList;
	}

	public List<String> getCTPData(String acquisitionType, String office, IEssCubeView connection) throws EssException {
		IEssMemberSelection mbrSel = null;
		List<String> ctpList = new ArrayList<String>();
		try {

			IEssCube cube = connection.getCube();
			mbrSel = cube.openMemberSelection("Sample member selection");
			mbrSel.executeQuery(acquisitionType, IEssMemberSelection.QUERY_TYPE_BOTTOMLEVEL,
					IEssMemberSelection.QUERY_OPTION_MEMBERSONLY, "Line Item", office, "");
			IEssIterator mbrs = mbrSel.getMembers();
			logger.info(("\nPerforming Member Selection (Select children of Line Item): \n"
					+ "------------------------------------------------------"));
			for (int i = 0; i < mbrs.getCount(); i++) {
				IEssMember mbr = (IEssMember) mbrs.getAt(i);
				ctpList.add(mbr.getName());
			}
		} catch (EssException x) {
			logger.error("Error occured due to: " + x.getMessage());
			connection.close();
		} finally {
			try {
				if (mbrSel != null)
					mbrSel.close();
			} catch (EssException x) {
				logger.error("Error occured due to: " + x.getMessage());
			}
		}
		return ctpList;
	}

	public List<AcquisitionsWithCTP> getAcquisitionPreCommitmentDetails(String office, String acquisitonType,
			String version, String lineItem) throws SQLException, EssException {
		int statusCode = 0;
		IEssbase ess = null;
		IEssGridView grid = null;

		List<AcquisitionsWithCTP> userList = new ArrayList<AcquisitionsWithCTP>();
		try {
			if (connection == null) {
				connection = EssbaseConnectionPoolFactory.getConnection(env.getProperty(essUserName),
						env.getProperty(essPassword), env.getProperty(essProvider), env.getProperty(essOlapSvrName));
			}
			grid = performCubePreCommitmentViewOperation(ess, connection, "retrieve", office, acquisitonType, version,
					lineItem);

			String[][] finalGridData = grid.getAllStringValues();
			for (int i = 2; i < finalGridData.length; i++) {
				AcquisitionsWithCTP acquisition = new AcquisitionsWithCTP();
				for (int j = 0; j < finalGridData.length; j++) {
					acquisition.setCtpLineItem(lineItem);
					acquisition.setProjectTitle(getTextValue(finalGridData[i][3]));
					acquisition.setDetailedDescription(getTextValue(finalGridData[i][4]));
					acquisition.setFundingAmount(finalGridData[i][5]);
					acquisition.setChangeAmount(finalGridData[i][6]);
					acquisition.setEstimatedRevisedAmount(finalGridData[i][7]);
					acquisition.setEstTotFiscalYearAmount(finalGridData[i][8]);
					acquisition.setEstTotProjectValue(finalGridData[i][9]);
					acquisition.setAnticipatedAwardType(finalGridData[i][10]);
					acquisition.setPlannedPOPStartDate(TDLProUtil.exponentToDateConverter(finalGridData[i][11]));
					acquisition.setPlannedPOPEndDate(TDLProUtil.exponentToDateConverter(finalGridData[i][12]));
					acquisition.setCtpPlannedAwardDate(TDLProUtil.exponentToDateConverter(finalGridData[i][13]));
					acquisition.setCtpPlannedCommitmentDate(TDLProUtil.exponentToDateConverter(finalGridData[i][14]));
					acquisition.setNumOfDaysUntAcqPackDue(finalGridData[i][15]);
					acquisition.setExistingGrantNumber(finalGridData[i][16]);
					acquisition.setGrantStatus(finalGridData[i][17]);
					acquisition.setZeroDollarReq(finalGridData[i][18]);
					acquisition.setCollaborationFlag(finalGridData[i][19]);
					acquisition.setPriorityLevel(finalGridData[i][20]);
					acquisition.setRecurringItem(finalGridData[i][21]);
					acquisition.setCorNameAndTelNum(finalGridData[i][22]);
					acquisition.setCorCertLevel(finalGridData[i][23]);
					acquisition.setAltCorNameAndTelNum(finalGridData[i][24]);
					acquisition.setAltCorCertLevel(finalGridData[i][25]);
					acquisition.setAatLiasNameAndTelNum(finalGridData[i][26]);
					acquisition.setCodeCFDANum(finalGridData[i][27]);
					acquisition.setPubOfScintResearch(finalGridData[i][28]);
					acquisition.setTraining(finalGridData[i][29]);
					acquisition.setConfSupport(finalGridData[i][30]);
					acquisition.setPapworkRedAct(finalGridData[i][31]);
					acquisition.setCoiReviewDate(TDLProUtil.exponentToDateConverter(finalGridData[i][32]));
					acquisition.setSoleSource(finalGridData[i][33]);
					acquisition.setHumanSubjects(finalGridData[i][34]);
					acquisition.setAnimalSubjects(finalGridData[i][35]);
					acquisition.setCurRequisitionNumber(finalGridData[i][36]);
					acquisition.setRequisitionNumber2(getTextValue(finalGridData[i][37]));
					acquisition.setRequisitionNumber3(getTextValue(finalGridData[i][38]));
					acquisition.setRequisitionNumber4(getTextValue(finalGridData[i][39]));
					acquisition.setRequisitionNumber5(getTextValue(finalGridData[i][40]));
					acquisition.setColorcode(finalGridData[i][41]);
					acquisition.setNotes(finalGridData[i][42]);
					acquisition.setAnticipatedActionType(finalGridData[i][43]);
					acquisition.setOagsCutOffDate(TDLProUtil.exponentToDateConverter(finalGridData[i][44]));
					acquisition.setSlaDueDate(TDLProUtil.exponentToDateConverter(finalGridData[i][45]));
					acquisition.setFbrNumber(finalGridData[i][46]);
				}
				userList.add(acquisition);

			}

		} catch (EssException x) {
			logger.error("Error occured due to: " + x.getMessage());
			statusCode = FAILURE_CODE;
		} catch (ParseException e) {
			logger.error("Error occured due to: " + e.getMessage());
			statusCode = FAILURE_CODE;
		} finally {
			if (connection != null) {
				connection.close();
				connection = null;
			}
		}
		if (statusCode == FAILURE_CODE)
			System.exit(FAILURE_CODE);
		return userList;
	}

	public IEssGridView performCubePreCommitmentViewOperation(IEssbase ess, IEssCubeView cv, String opStr,
			String office, String acquisitonType, String version, String lineItem) throws EssException {
		// Create a grid view with the input for the operation.
		IEssGridView grid = cv.getGridView();
		String[][] finalGridData = grid.getAllStringValues();
		logger.info("Query Results for the Operation: " + finalGridData + "\n");
		grid.setSize(10000, 100);
		grid.setValue(0, 3, "Ending Balance");
		grid.setValue(0, 4, office);
		grid.setValue(0, 5, "FY20");
		grid.setValue(0, 6, "Project Data Fields");
		grid.setValue(0, 7, "25.2");
		grid.setValue(0, 8, version);
		grid.setValue(0, 9, "Acquisitions None");
		grid.setValue(0, 10, "Key Activity/Topic None");

		grid.setValue(2, 0, lineItem);

		grid.setValue(1, 3, "Project Title");
		grid.setValue(1, 4, "Detailed Description");
		grid.setValue(1, 5, "Funding Amount");
		grid.setValue(1, 6, "Change Amount");
		grid.setValue(1, 7, "Estimated Revised Amount");
		grid.setValue(1, 8, "Estimated Total Fiscal Year Amount");
		grid.setValue(1, 9, "Estimated Total Project Value");
		grid.setValue(1, 10, "Grants - Anticipated Award Type");
		grid.setValue(1, 11, "Planned PoP Start Date");
		grid.setValue(1, 12, "Planned PoP End Date");
		grid.setValue(1, 13, "CTP Planned Award Date");
		grid.setValue(1, 14, "CTP Planned Commitment Date");
		grid.setValue(1, 15, "Number of Days until Acquisitions Package Due");
		grid.setValue(1, 16, "Existing Grant Number");
		grid.setValue(1, 17, "Grant Status");
		grid.setValue(1, 18, "Zero Dollar Req");
		grid.setValue(1, 19, "Collaboration Flag");
		grid.setValue(1, 20, "Priority Level");
		grid.setValue(1, 21, "Recurring Item");
		grid.setValue(1, 22, "COR Name and Telephone");
		grid.setValue(1, 23, "COR Certification Level");
		grid.setValue(1, 24, "Alternate COR Name and Telephone");
		grid.setValue(1, 25, "Alternate COR Certification Level");
		grid.setValue(1, 26, "AAT Liaison Name and Telephone");
		grid.setValue(1, 27, "NAICS Code/CFDA Number");
		grid.setValue(1, 28, "Publication of Scientific Research");
		grid.setValue(1, 29, "Training");
		grid.setValue(1, 30, "Conference Support");
		grid.setValue(1, 31, "Paperwork Reduction Act");
		grid.setValue(1, 32, "COI Review Date");
		grid.setValue(1, 33, "Sole Source");
		grid.setValue(1, 34, "Human Subjects");
		grid.setValue(1, 35, "Animal Subjects");
		grid.setValue(1, 36, "Current Requisition Number");
		grid.setValue(1, 37, "Requisition Number 2");
		grid.setValue(1, 38, "Requisition Number 3");
		grid.setValue(1, 39, "Requisition Number 4");
		grid.setValue(1, 40, "Requisition Number 5");
		grid.setValue(1, 41, "Color Code");
		grid.setValue(1, 42, "Notes");
		grid.setValue(1, 43, "Anticipated Action Type");
		grid.setValue(1, 44, "OAGS Cut-Off Date");
		grid.setValue(1, 45, "SLA Due Date");
		grid.setValue(1, 46, "FBR Number");
		// Create the operation specification.
		IEssOperation op = null;
		if (opStr.equals("retrieve")) {
			op = cv.createIEssOpRetrieve();
		} else if (opStr.equals("pivot")) {
			op = cv.createIEssOpPivot();
			((IEssOpPivot) op).set(0, 4);
		} else {
			throw new EssException("Operation not supported.");
		}
		// Perform the operation.
		cv.performOperation(op);

		// Get the result and print the output.
		int cntRows = grid.getCountRows(), cntCols = grid.getCountColumns();
		logger.info("Query Results for the Operation: " + opStr + "\n"
				+ "-----------------------------------------------------\n");

		return grid;
	}

	public boolean runCalculation(String runCalc) throws SQLException, ParseException {
		boolean runCalcStatus = true;
		try {
			connection = EssbaseConnectionPoolFactory.getConnection(env.getProperty(essUserName),
					env.getProperty(essPassword), env.getProperty(essProvider), env.getProperty(essOlapSvrName));
			IEssCube cube = connection.getCube();
			cube.calcFileWithRunTimeSubVarFile(false, runCalc, null);
		} catch (EssException e) {
			runCalcStatus = false;

			return runCalcStatus;
		}

		return runCalcStatus;
	}

	public String getTextValue(String textValue) {
		String textDataValue = "";

		if (!isNullOrEmpty(textValue)) {
			String stringValue = textValue.substring(0, textValue.length() - 2);
			HSPTextCellValueEntity textDataEntity = hspTextCellDataMap.findByTextId(Long.parseLong(stringValue));
			if (textDataEntity != null) {
				textDataValue = textDataEntity.getValue();
				return textDataValue;
			} else {
				return textDataValue;
			}
		} else {
			return textDataValue;
		}

	}

	public boolean isNullOrEmpty(String str) {
		if (str == null || str.isEmpty())
			return true;
		return false;
	}

	public String getTextIntValue(String textValue) {

		HSPTextCellValueEntity textDataEntity = hspTextToIntMap.findByValue(textValue);
		String textIntValue = "Not Added";
		if (textDataEntity != null) {
			textIntValue = textDataEntity.getTextId().toString();
			return textIntValue;
		} else {
			setNewHSPTextValue(textValue);
			textDataEntity = hspTextToIntMap.findByValue(textValue);
			setNewHSPActionValue(textDataEntity);
			return textDataEntity.getTextId().toString();
		}

	}

	public void setNewHSPTextValue(String textValue) {
		HSPTextCellValue newTextValue = new HSPTextCellValue();
		newTextValue.setTextId(hspTextCellDataMap.findMaxTextId());
		newTextValue.setValue(textValue);
		HSPTextCellValueEntity hspTextValueEntity = transformHSPTextValueToEntity(newTextValue);
		hspTextToIntMap.save(hspTextValueEntity);

	}

	public HSPTextCellValueEntity transformHSPTextValueToEntity(HSPTextCellValue newHSPTextValue) {
		HSPTextCellValueEntity hspTextValueEntity = new HSPTextCellValueEntity();
		hspTextValueEntity.setTextId(newHSPTextValue.getTextId() + 1);
		hspTextValueEntity.setValue(newHSPTextValue.getValue());
		return hspTextValueEntity;
	}

	public void setNewHSPActionValue(HSPTextCellValueEntity textDataEntity) {
		HSPActionValue newActionValue = new HSPActionValue();
		newActionValue.setPrimaryKey(textDataEntity.getTextId().toString());
		HSPActionEntity hspActionEntity = transformHSPActionValueToEntity(newActionValue);
		hspActionRepo.save(hspActionEntity);
	}

	public HSPActionEntity transformHSPActionValueToEntity(HSPActionValue newHSPActionValue) {
		HSPActionEntity hspActionValueEntity = new HSPActionEntity();
		Long id = hspActionRepo.findMaxTextId();
		if (id == null) {
			hspActionValueEntity.setId(1L);
		} else {
			hspActionValueEntity.setId(id + 1);
		}
		hspActionValueEntity.setFromId(0L);
		hspActionValueEntity.setToId(0L);
		hspActionValueEntity.setActionId(1L);
		hspActionValueEntity.setObjectType(-102L);
		hspActionValueEntity.setPrimaryKey(newHSPActionValue.getPrimaryKey());
		hspActionValueEntity.setMessage("");
		hspActionValueEntity.setActionTime(new Timestamp(System.currentTimeMillis()));
		return hspActionValueEntity;
	}

	public IEssCubeView getConnection(String role) throws EssException {

		if (role.equalsIgnoreCase("Final Approver")) {
			connection = EssbaseConnectionPoolFactory.getConnection(env.getProperty(essROUserName),
					env.getProperty(essROPassword), env.getProperty(essProvider), env.getProperty(essOlapSvrName));
		} else {
			connection = EssbaseConnectionPoolFactory.getConnection(env.getProperty(essUserName),
					env.getProperty(essPassword), env.getProperty(essProvider), env.getProperty(essOlapSvrName));
		}
		return connection;
	}
}