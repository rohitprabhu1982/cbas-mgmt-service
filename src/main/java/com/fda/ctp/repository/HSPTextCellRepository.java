/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Query;

import com.fda.ctp.domain.HSPTextCellValueEntity;

public interface HSPTextCellRepository extends JpaRepository<HSPTextCellValueEntity, Long> {
    public HSPTextCellValueEntity findByTextId(Long textId);
    
    @Query(value="SELECT max(text_id) FROM hsp_text_cell_value", nativeQuery = true)	
    public Long findMaxTextId();
}
