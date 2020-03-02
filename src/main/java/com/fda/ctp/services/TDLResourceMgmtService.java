/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.services;

import java.util.List;

import com.fda.ctp.domain.TDLResourceEntity;


/**
 *
 * @author rabalasubramani3
 */
public interface TDLResourceMgmtService {

	/**
	 * Step 0.2 Update TDLResourceEntity
	 *
	 * @param resource
	 * @return created tdl object.
	 */
	TDLResourceEntity update(TDLResourceEntity resource);

	/**
	 * View all Resources
	 *
	 * @return a list of all the Resources
	 */
	List<TDLResourceEntity> getAll();

	/**
	 * View TDLResourceEntity selected by id
	 *
	 * @param id
	 * @return TDL information retrieved by ID
	 */
	TDLResourceEntity getResource(Long id);

	

}
