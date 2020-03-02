/**
 * 
 */
package com.fda.ctp.bean;

import java.util.List;

/**
 * @author roprabhu
 *
 */
public class Details {
	private long Id;

	public long getId() {
		return Id;
	}

	public void setId(long id) {
		Id = id;
	}

	private String permitName;

	private String companyName;

	private long year;

	private String month;

	private List<String> includedForms;

	private List<String> missingForms;

	private List<String> tobaccoTypes;

	private String zeroForms;

	public String getPermitName() {
		return permitName;
	}

	public void setPermitName(String permitName) {
		this.permitName = permitName;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public long getYear() {
		return year;
	}

	public void setYear(long year) {
		this.year = year;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public List<String> getIncludedForms() {
		return includedForms;
	}

	public void setIncludedForms(List<String> includedForms) {
		this.includedForms = includedForms;
	}

	public List<String> getMissingForms() {
		return missingForms;
	}

	public void setMissingForms(List<String> missingForms) {
		this.missingForms = missingForms;
	}

	public List<String> getTobaccoTypes() {
		return tobaccoTypes;
	}

	public void setTobaccoTypes(List<String> tobaccoTypes) {
		this.tobaccoTypes = tobaccoTypes;
	}

	public String getZeroForms() {
		return zeroForms;
	}

	public void setZeroForms(String zeroForms) {
		this.zeroForms = zeroForms;
	}
}
