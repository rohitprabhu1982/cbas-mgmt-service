/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;

import com.fda.ctp.domain.HSPTextCellValueEntity;

public interface HSPTextToIntRepository extends JpaRepository<HSPTextCellValueEntity, String> {
    public HSPTextCellValueEntity findByValue(String value);
}
