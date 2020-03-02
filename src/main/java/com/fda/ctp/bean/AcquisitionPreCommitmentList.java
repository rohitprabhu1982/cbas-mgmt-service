package com.fda.ctp.bean;

import java.util.List;

public class AcquisitionPreCommitmentList {

	private List<String> officeList;
	
	private List<String> acquisitionTypeList;
	
	private List<String> versionList;
	
	private List<String> projectTitleList;

	public AcquisitionPreCommitmentList() {

	}

	/**
	 * @return the officeList
	 */
	public List<String> getOfficeList() {
		return officeList;
	}

	/**
	 * @param officeList the officeList to set
	 */
	public void setOfficeList(List<String> officeList) {
		this.officeList = officeList;
	}

	/**
	 * @return the acquisitionTypeList
	 */
	public List<String> getAcquisitionTypeList() {
		return acquisitionTypeList;
	}

	/**
	 * @param acquisitionTypeList the acquisitionTypeList to set
	 */
	public void setAcquisitionTypeList(List<String> acquisitionTypeList) {
		this.acquisitionTypeList = acquisitionTypeList;
	}

	/**
	 * @return the versionList
	 */
	public List<String> getVersionList() {
		return versionList;
	}

	/**
	 * @param versionList the versionList to set
	 */
	public void setVersionList(List<String> versionList) {
		this.versionList = versionList;
	}

	/**
	 * @return the projectTitleList
	 */
	public List<String> getProjectTitleList() {
		return projectTitleList;
	}

	/**
	 * @param projectTitleList the projectTitleList to set
	 */
	public void setProjectTitleList(List<String> projectTitleList) {
		this.projectTitleList = projectTitleList;
	}

	

}
