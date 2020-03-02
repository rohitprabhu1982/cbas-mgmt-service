/* 
 * Copyright (C) Deloitte, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
package com.fda.ctp.controller;

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

import com.fda.ctp.domain.ResourceEntity;
import com.fda.ctp.services.ResourceMgmtService;
import com.fda.ctp.services.SimpleSQLManager;

/**
 *
 * @author rabalasubramani3
 */
@CrossOrigin(origins = "maxAge = 3600")
@RestController
@RequestMapping("/api/v1/resource")
public class ResourceManagementController {
	Logger logger = LoggerFactory.getLogger(ResourceManagementController.class);

	@Autowired
	ResourceMgmtService resMgmtBizService;

	@Autowired
	SimpleSQLManager simpleSQLManager;

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<ResourceEntity> create(@Valid @RequestBody ResourceEntity tdl) {
		ResourceEntity createdResource = resMgmtBizService.create(tdl);
		logger.info("Created Resource with ID: " + createdResource.getResourceID());
		return new ResponseEntity<>(createdResource, HttpStatus.CREATED);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/{id}")
	public ResponseEntity<ResourceEntity> getResource(@PathVariable Long id) {
		ResourceEntity re = resMgmtBizService.getResource(id);
		return new ResponseEntity<>(re, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/employee/{id}")
	public ResponseEntity<ResourceEntity> getResourceByEmployeeId(@PathVariable String id) {
		ResourceEntity re = resMgmtBizService.getResourceByEmployeeId(id);
		return new ResponseEntity<>(re, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
	public ResponseEntity<ResourceEntity> deleteResource(@PathVariable Long id) {
		ResourceEntity delResource = resMgmtBizService.disableResourceById(id);
		return new ResponseEntity<>(delResource, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/user/{id}")
	public ResponseEntity<ResourceEntity> getResourceByUserId(@PathVariable Long id) {
		ResourceEntity tdl = resMgmtBizService.getResourceByUserId(id);
		return new ResponseEntity<>(tdl, HttpStatus.OK);
	}

}
