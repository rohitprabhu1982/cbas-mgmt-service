/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Query;

import com.fda.ctp.domain.HSPActionEntity;

public interface HSPActionRepository extends JpaRepository<HSPActionEntity, Long> {
	public Optional<HSPActionEntity> findById(Long id);
	
	@Query(value="SELECT max(id) FROM hsp_action", nativeQuery = true)	
    public Long findMaxTextId();
}
