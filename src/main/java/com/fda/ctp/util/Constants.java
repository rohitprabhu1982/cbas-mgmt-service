/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.util;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author rabalasubramani3
 */
public class Constants {

	/* INGESTION TYPE */
	public static final String TIME_SHEET = "Timesheet";
	public static final String PIPELINE_SHEET = "PipelineReport";

	/* generic constants */
	public static final String EMPTY = "";

	/* MONTHS */
	public static final Map<String, String> MMMToNumber;
	public static final Map<String, String> AcquisitionData;

	/* Convert MMM to sortable string: JUN = 06 */
	static {
		Map<String, String> staticMap = new HashMap<>();
		staticMap.put("JAN", "01");
		staticMap.put("FEB", "02");
		staticMap.put("MAR", "03");
		staticMap.put("APR", "04");
		staticMap.put("MAY", "05");
		staticMap.put("JUN", "06");
		staticMap.put("JUL", "07");
		staticMap.put("AUG", "08");
		staticMap.put("SEP", "09");
		staticMap.put("OCT", "10");
		staticMap.put("NOV", "11");
		staticMap.put("DEC", "12");
		MMMToNumber = Collections.unmodifiableMap(staticMap);
	};

	static {
		Map<String, String> acquisitionsMap = new HashMap<>();
		acquisitionsMap.put("01", "'Project Title' ");
		acquisitionsMap.put("02", "'Detailed Description' ");
		acquisitionsMap.put("03", "'Funding Amount' ");
		acquisitionsMap.put("04", "'Estimated Total Fiscal Year Amount' ");
		acquisitionsMap.put("05", "'Estimated Total Project Value' ");
		acquisitionsMap.put("06", "'Grants - Anticipated Award Type' ");
		acquisitionsMap.put("07", "'Planned PoP Start Date' ");
		acquisitionsMap.put("08", "'Planned PoP End Date' ");
		acquisitionsMap.put("09", "'CTP Planned Award Date' ");
		acquisitionsMap.put("10", "'CTP Planned Commitment Date' ");
		acquisitionsMap.put("11", "'Number of Days until Acquisitions Package Due' ");
		acquisitionsMap.put("12", "'Existing Grant Number' ");
		acquisitionsMap.put("13", "'Grant Status' ");
		acquisitionsMap.put("14", "'Zero Dollar Req' ");
		acquisitionsMap.put("15", "'Collaboration Flag' ");
		acquisitionsMap.put("16", "'Priority Level' ");
		acquisitionsMap.put("17", "'Recurring Item' ");
		acquisitionsMap.put("18", "'COR Name and Telephone' ");
		acquisitionsMap.put("19", "'COR Certification Level' ");
		acquisitionsMap.put("20", "'Alternate COR Name and Telephone' ");
		acquisitionsMap.put("21", "'Alternate COR Certification Level' ");
		acquisitionsMap.put("22", "'AAT Liaison Name and Telephone' ");
		acquisitionsMap.put("23", "'NAICS Code/CFDA Number' ");
		acquisitionsMap.put("24", "'Publication of Scientific Research' ");
		acquisitionsMap.put("25", "'Training' ");
		acquisitionsMap.put("26", "'Conference Support' ");
		acquisitionsMap.put("27", "'Paperwork Reduction Act' ");
		acquisitionsMap.put("28", "'COI Review Date' ");
		acquisitionsMap.put("29", "'Sole Source' ");
		acquisitionsMap.put("30", "'Human Subjects' ");
		acquisitionsMap.put("31", "'Animal Subjects' ");
		acquisitionsMap.put("32", "'Current Requisition Number' ");
		acquisitionsMap.put("33", "'Requisition Number 2' ");
		acquisitionsMap.put("34", "'Requisition Number 3' ");
		acquisitionsMap.put("35", "'Requisition Number 4' ");
		acquisitionsMap.put("36", "'Requisition Number 5' ");
		acquisitionsMap.put("37", "'Color Code' ");
		acquisitionsMap.put("38", "'Notes' ");
		acquisitionsMap.put("39", "'Change Amount' ");
		acquisitionsMap.put("40", "'Estimated Revised Amount' ");
		acquisitionsMap.put("41", "'Anticipated Action Type' ");
		acquisitionsMap.put("42", "'OAGS Cut-Off Date' ");
		acquisitionsMap.put("43", "'SLA Due Date' ");
		acquisitionsMap.put("44", "'FBR Number' ");
		

		AcquisitionData = Collections.unmodifiableMap(acquisitionsMap);
	};

	public static final Map<String, String> MMMToMMMM;

	/* Convert MMM to MMMM: JUN = June */
	static {
		Map<String, String> staticMap = new HashMap<>();
		staticMap.put("JAN", "January");
		staticMap.put("FEB", "February");
		staticMap.put("MAR", "March");
		staticMap.put("APR", "April");
		staticMap.put("MAY", "May");
		staticMap.put("JUN", "June");
		staticMap.put("JUL", "July");
		staticMap.put("AUG", "August");
		staticMap.put("SEP", "September");
		staticMap.put("OCT", "October");
		staticMap.put("NOV", "November");
		staticMap.put("DEC", "December");
		MMMToMMMM = Collections.unmodifiableMap(staticMap);
	}

	;

	/**
	 * Private constructor prevents instantiation.
	 */
	private Constants() {
		/*
		 * Added private constructor to prevent instantiation.
		 * 
		 */
	}
}
