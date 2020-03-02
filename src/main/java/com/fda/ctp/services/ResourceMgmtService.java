/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.services;

import com.fda.ctp.domain.ResourceEntity;

/**
 *
 * @author rabalasubramani3
 */
public interface ResourceMgmtService {

	/**
	 * Step 0.1 Create ResourceEntity
	 *
	 * @param resource
	 * @return created tdl object.
	 */
	ResourceEntity create(ResourceEntity resource);

	
	/**
	 * View ResourceEntity selected by id
	 *
	 * @param id
	 * @return TDL information retrieved by ID
	 */
	ResourceEntity getResource(Long id);

	ResourceEntity getResourceByEmployeeId(String employeeId);

	/**
	 * 
	 * @param id
	 */
	void deleteResource(Long id);

	/**
	 * 
	 * @param id
	 * @return
	 */
	ResourceEntity disableResourceById(Long id);

	/**
	 * 
	 * @param userId
	 * @return
	 */
	ResourceEntity getResourceByUserId(Long userId);

	

}
