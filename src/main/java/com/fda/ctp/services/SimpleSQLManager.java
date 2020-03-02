/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.services;

import java.util.List;

import com.fda.ctp.bean.CodeValue;
import com.fda.ctp.bean.ReferenceType;

/**
 *
 * @author rabalasubramani3
 */
public interface SimpleSQLManager {

	/**
	 * 
	 * @param refType
	 * @return
	 */
	List<CodeValue> getCodeValues(String refType);

	/**
	 * Gets a list of missing users - Resources to Users mismatch based on missing
	 * employeeID match
	 * 
	 * @return
	 */
	List<CodeValue> getMissingUsers();

	/**
	 * Refresh all actual rates
	 * 
	 * @return
	 */
	CodeValue refreshActualRates();

	/**
	 * Update the TDL Plan hours with new resource ID
	 * 
	 * @param tdlId
	 * @param oldResourceId
	 * @param newResourceId
	 * @return
	 */
	boolean updatePlanHoursWithResource(Long tdlId, Long oldResourceId, Long newResourceId);

	/**
	 * 
	 * @param newPasswordHash
	 * @param name
	 */
	void passwordMigrationByUsername(String newPasswordHash, String name);

	/**
	 * 
	 * @return
	 */
	List<ReferenceType> getReferencTypes();

}
