package com.fda.ctp.bean;

import java.util.List;

public class AcquisitionList {

	private List<Acquisitions> acquisitionList;

	public AcquisitionList() {

	}

	public AcquisitionList(List<Acquisitions> acquisitionList) {
		super();
		this.acquisitionList = acquisitionList;
	}

	public List<Acquisitions> getSalaryList() {
		return acquisitionList;
	}

	public void setSalaryList(List<Acquisitions> acquisitionList) {
		this.acquisitionList = acquisitionList;
	}

}
