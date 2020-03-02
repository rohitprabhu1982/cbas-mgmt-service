/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.repository;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.fda.ctp.domain.ResourceEntity;

/**
 *
 * @author rabalasubramani3
 */
public interface ResourceRepository extends CrudRepository<ResourceEntity, Long> {
    // @Query(value="SELECT * FROM tp_resource WHERE employee_id LIKE %?1%", nativeQuery = true)   
    List<ResourceEntity> findByEmployeeIDContaining(String employeeID); 
            
    List<ResourceEntity> findByEmployeeID(String employeeID);
    
    @Query(value="SELECT r.* FROM tp_resource r WHERE r.name = ?1", nativeQuery = true) 
    List<ResourceEntity> findByName(String name);
    
    @Query(value="SELECT r.* FROM tp_resource r INNER JOIN tp_user u ON  r.employee_id = u.employee_id WHERE u.user_id = ?1", nativeQuery = true) 
    List<ResourceEntity> findResourceByUserId(Long userId);
}
