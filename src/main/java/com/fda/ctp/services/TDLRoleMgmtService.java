/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.services;

import java.util.List;

import com.fda.ctp.domain.TDLRoleEntity;

/**
 *
 * @author rabalasubramani3
 */
public interface TDLRoleMgmtService {
    
    
    /**
     * Step 0.1 Create Resource
     *
     * @param tldrole
     * @return created tdl object.
     */    
    TDLRoleEntity create(TDLRoleEntity tldrole);
    
    
    /**
     * View all Resources
     *
     * @return a list of all the Resources
     */
    List<TDLRoleEntity> getAll();
    
    /**
     * View Resource selected by id
     *
     * @param id
     * @return TDL information retrieved by ID
     */
    TDLRoleEntity getTDLRole(Long id);    
}
