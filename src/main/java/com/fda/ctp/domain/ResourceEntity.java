/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.domain;

import java.io.Serializable;
import java.time.LocalDate;
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
@Table(name = "tp_resource")
@Data
public class ResourceEntity implements Serializable {
   
    /**
     * The Constant serialVersionUID.
     */
    protected static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RESOURCE_ID", unique = true, nullable = false)
    private Long resourceID;

    @Column(name = "NAME", nullable = false)
    private String name;   
    
    @Column(name = "LOOKUP_NAME", nullable = false)
    private String lookupName;  

    @Column(name = "DISPLAY_NAME", nullable = false)
    private String displayName;      
    
    @Column(name = "EMPLOYEE_ID")
    private String employeeID;     
    
    @Column(name = "EMAIL", nullable = false)
    private String email;   
    
    @Column(name = "PHONE")
    private String phone;   
    
    @Column(name = "START_DT")
    private LocalDate startDt;       
        
    @Column(name = "LCAT_CD")
    private String lcatCode; 
    
    @Column(name = "TYPE_CD")
    private String typeCode;     
    
    @Column(name = "TEAM_CD")
    private String teamCode;      
    
    @Column(name = "ACTIVE")
    private String active;        
    
    @Column(name = "MAX_HRS")
    private Double maxHours;
    
    @Column(name = "LEAD_ID")
    private Long leadID;  
    
    @Column(name = "PLACEHOLDER")
    private String placeholder;      
    
    @Column(name = "POSITION_CD")
    private String positionCode;  
    
    @Column(name = "CDM")
    private String cdm;     

    @Column(name = "CREATED_BY")
    private String createdBy;

    @Column(name = "CREATED_DT")
    private LocalDateTime createdDt;

    @Column(name = "MODIFIED_BY")
    private String modifiedBy;

    @Column(name = "MODIFIED_DT")
    private LocalDateTime modifiedDt;
}
