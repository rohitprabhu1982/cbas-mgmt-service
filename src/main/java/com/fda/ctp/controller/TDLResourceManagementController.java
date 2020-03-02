/* 
 * Copyright (C) Deloitte, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
package com.fda.ctp.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fda.ctp.biz.UserAdminBizComp;
import com.fda.ctp.domain.TDLResourceEntity;
import com.fda.ctp.services.SimpleSQLManager;
import com.fda.ctp.services.TDLResourceMgmtService;

/**
 *
 * @author rabalasubramani3
 */
@CrossOrigin(origins = "maxAge = 3600")
@RestController
@RequestMapping("/api/v1/tdlresource")
public class TDLResourceManagementController {
	Logger logger = LoggerFactory.getLogger(TDLResourceManagementController.class);

	@Autowired
	TDLResourceMgmtService tdlReourceMgmtBizService;

	@Autowired
	private UserAdminBizComp userAdminBizComp;

	@Autowired
	SimpleSQLManager simpleSQLManager;

	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<TDLResourceEntity> update(@Valid @RequestBody TDLResourceEntity tdlres) {
		TDLResourceEntity updatedResource = tdlReourceMgmtBizService.update(tdlres);
		logger.info("Updated Resource with ID: " + updatedResource.getTdlResourceID());
		return new ResponseEntity<>(updatedResource, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<TDLResourceEntity>> getAllResources() {
		// This returns a JSON or XML with the Resources
		List<TDLResourceEntity> allResources = tdlReourceMgmtBizService.getAll();
		return new ResponseEntity<>(allResources, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/{id}")
	public ResponseEntity<TDLResourceEntity> getResource(@PathVariable Long id) {
		TDLResourceEntity tdl = tdlReourceMgmtBizService.getResource(id);
		logger.info("Found {} with ID {} ", tdl.getResourceID(), id);
		return new ResponseEntity<>(tdl, HttpStatus.OK);
	}

	

}
