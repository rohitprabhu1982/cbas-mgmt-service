/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.fda.ctp.domain.TDLResourceEntity;

/**
 *
 * @author rabalasubramani3
 */
public interface TDLResourceRepository extends CrudRepository<TDLResourceEntity, Long> {  
    TDLResourceEntity findOneByTdlIDAndResourceID(Long tdlID, Long resourceID);
    List<TDLResourceEntity> findByTdlID(Long tdlID);
}
