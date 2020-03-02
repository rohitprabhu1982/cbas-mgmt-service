/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fda.ctp.domain.RoleEntity;

public interface UserRoleRepository extends JpaRepository<RoleEntity, Long>{
    RoleEntity findByName(String name);
}