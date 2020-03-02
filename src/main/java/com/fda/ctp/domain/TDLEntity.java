/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.domain;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Basic;
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
@Table(name = "tp_tdl")
@Data
public class TDLEntity implements Serializable {
   
    /**
     * The Constant serialVersionUID.
     */
    protected static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TDL_ID", unique = true, nullable = false)
    private Long tdlID;

    @Column(name = "NAME", nullable = false)
    private String name;
    
    @Column(name = "PM_RESOURCE_ID")
    private Long pmResourceID;    
    
    @Column(name = "NOTES")
    private String notes;         
    
    @Column(name = "WBS_CODE")
    private String wbsCode;   
    
    @Basic
    @Column(name = "PLAN_START")
    private LocalDate planStartDt;
    
    @Basic
    @Column(name = "PLAN_END")
    private LocalDate planEndDt;    
    
    @Basic
    @Column(name = "ACT_START")
    private LocalDate actualStartDt;  
    
    @Basic
    @Column(name = "ACT_END")
    private LocalDate actualEndDt;      
    
    @Column(name = "BUDGET_COST")
    private Double budgetCost;    
    
    @Column(name = "PLAN_COST")
    private Double planCost;     
    
    @Column(name = "ACT_COST")
    private Double actualCost;   
    
    @Column(name = "BUDGET_HRS")
    private Double budgetHours;  
    
    @Column(name = "PLAN_HRS")
    private Double planHours;     
    
    @Column(name = "ACT_HRS")
    private Double actualHours;    
    
    @Column(name = "CEILING_AMOUNT")
    private Double ceilingAmount;         
    
    @Column(name = "STATUS")
    private String status;      
    
    @Column(name = "TYPE")
    private String type;      
    
    @Column(name = "CATEGORY")
    private String category;      
    
    @Column(name = "CLIN")
    private String clin;  
    
    @Column(name = "APPROVED")
    private String approved;  
    
    @Column(name = "ALLPM")
    private String allPM;      
    
    @Column(name = "POP_CODE")
    private String popCode;  

    @Column(name = "CREATED_BY")
    private String createdBy;

    @Column(name = "CREATED_DT")
    private LocalDateTime createdDt;

    @Column(name = "MODIFIED_BY")
    private String modifiedBy;

    @Column(name = "MODIFIED_DT")
    private LocalDateTime modifiedDt;
       
    @Column(name = "LCATGROUP_ID")
    private Long lcatGroupId;
    
    @Column(name = "OP_ID")
    private Long opId;
    
    @Column(name = "OFFERING_ID")
    private Long offeringId;
 
    @Column(name = "WIN_PROBABILITY")
    private Double winProbability;   
    
    @Column(name = "CLIENT_ID")
    private Long clientId;   
        
    @Column(name = "CITIZEN")
    private String citizen;  
    
    @Column(name = "HEADCOUNT")
    private Long headCount;   
    
    @Column(name = "PIPELINE_ID")
    private Long pipelineId;     

}
