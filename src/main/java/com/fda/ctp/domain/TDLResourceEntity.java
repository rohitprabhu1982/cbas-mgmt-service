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

import lombok.Data;

/**
 *
 * @author rabalasubramani3
 */
@Entity
@Table(name = "tp_tdl_resource")
@Data
public class TDLResourceEntity implements Serializable {
   
    /**
     * The Constant serialVersionUID.
     */
    protected static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TDL_RESOURCE_ID", unique = true, nullable = false)
    private Long tdlResourceID;

    @Column(name = "TDL_ID", nullable = false)
    private Long tdlID;    
    
    @Column(name = "RESOURCE_ID", nullable = false)
    private Long resourceID;   
    
    @Column(name = "LCAT_CD")
    private String lcatCode;  
    
    @Column(name = "PERIOD1")
    private String period1;     
    
    @Column(name = "HOURS")
    private Double hours;    
    
    @Column(name = "PERIOD2")
    private String period2;    
    
    @Column(name = "HOURS2")
    private Double hours2;  

    // storing comma separate skills id
    @Column(name = "SKILLS")
    private String skills;    
    
    @Column(name = "DMA_STAFFIT_FLAG")
    private String dmaStaffitFlag;     
    
    @Column(name = "CREATED_BY")
    private String createdBy;

    @Column(name = "CREATED_DT")
    private LocalDateTime createdDt;

    @Column(name = "MODIFIED_BY")
    private String modifiedBy;

    @Column(name = "MODIFIED_DT")
    private LocalDateTime modifiedDt;    

    
}
