/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fda.ctp.domain.TDLRoleEntity;
import com.fda.ctp.repository.TDLRoleRepository;



@Service
@Transactional
public class TDLRoleMgmtServiceImpl implements TDLRoleMgmtService{
        
    Logger logger = LoggerFactory.getLogger(TDLRoleMgmtServiceImpl.class);
    
    @Autowired
    TDLRoleRepository tdlroleRepo;
        
    @Override
    public TDLRoleEntity create(TDLRoleEntity tdlrole) {
        return tdlroleRepo.save(tdlrole);
    }
        
    @Override
    public List<TDLRoleEntity> getAll() {
        // get all customers 
        Iterable<TDLRoleEntity> allTDLRoles = tdlroleRepo.findAll();
        // convert to list
        List<TDLRoleEntity> tdlroles = new ArrayList<>();
        allTDLRoles.forEach(tdlroles::add);
        return tdlroles;
    }
    
    @Override
    public TDLRoleEntity getTDLRole(Long id) {
        Optional<TDLRoleEntity> tdlRole = tdlroleRepo.findById(id);
        return tdlRole.isPresent() ? tdlRole.get() : null;
    }
}
