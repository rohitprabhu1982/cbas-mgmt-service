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

import com.fda.ctp.domain.TDLRoleEntity;
import com.fda.ctp.services.TDLRoleMgmtService;

/**
 *
 * @author rabalasubramani3
 */
@CrossOrigin(origins = "maxAge = 3600")
@RestController
@RequestMapping("/api/v1/tdlrole")
public class TDLRoleManagementController {
    Logger logger = LoggerFactory.getLogger(TDLRoleManagementController.class);
    
    @Autowired
    TDLRoleMgmtService tdlroleMgmtBizService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<TDLRoleEntity> create(@Valid @RequestBody TDLRoleEntity tdl) {
            TDLRoleEntity createdTDLRole = tdlroleMgmtBizService.create(tdl);
            logger.info("Created TDLRole with ID: " + createdTDLRole.getTdlRoleID());
            return new ResponseEntity<>(createdTDLRole, HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<TDLRoleEntity>> getAllTDLRoles() {
        // This returns a JSON or XML with the TDLRoles
        List<TDLRoleEntity> allTDLRoles = tdlroleMgmtBizService.getAll();
        return new ResponseEntity<>(allTDLRoles, HttpStatus.OK);
    }
    

    @RequestMapping(
                    method = RequestMethod.GET,
                    value="/{id}")
    public ResponseEntity<TDLRoleEntity> getTDLRole(@PathVariable Long id) {
        TDLRoleEntity tdl = tdlroleMgmtBizService.getTDLRole(id);
        logger.info("Found {} with ID {} ", tdl.getName(), id);
        return new ResponseEntity<>(tdl, HttpStatus.OK);
    }
}
