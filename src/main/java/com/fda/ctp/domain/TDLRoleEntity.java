/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.domain;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author rabalasubramani3
 */
@Entity
@Table(name = "tp_tdl_role")
public class TDLRoleEntity implements Serializable {
   
    /**
     * The Constant serialVersionUID.
     */
    protected static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TDL_ROLE_ID", unique = true, nullable = false)
    private Long tdlRoleID;

    @Column(name = "NAME", nullable = false)
    private String name;    
       
    
    /**
     * The created by.
     */
    @Column(name = "CREATED_BY")
    private String createdBy;

    /**
     * The created dt.
     */
    @Column(name = "CREATED_DT")
    private LocalDateTime createdDt;

    /**
     * The modified by.
     */
    @Column(name = "MODIFIED_BY")
    private String modifiedBy;

    /**
     * The modified dt.
     */
    @Column(name = "MODIFIED_DT")
    private LocalDateTime modifiedDt;    

    public Long getTdlRoleID() {
        return tdlRoleID;
    }

    public void setTdlRoleID(Long tdlRoleID) {
        this.tdlRoleID = tdlRoleID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public LocalDateTime getCreatedDt() {
        return createdDt;
    }

    public void setCreatedDt(LocalDateTime createdDt) {
        this.createdDt = createdDt;
    }

    public String getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

    public LocalDateTime getModifiedDt() {
        return modifiedDt;
    }

    public void setModifiedDt(LocalDateTime modifiedDt) {
        this.modifiedDt = modifiedDt;
    }

    
}
