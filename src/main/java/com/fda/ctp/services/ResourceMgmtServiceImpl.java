/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.services;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fda.ctp.domain.ResourceEntity;
import com.fda.ctp.repository.ResourceRepository;

@Service
@Transactional
public class ResourceMgmtServiceImpl implements ResourceMgmtService {

	Logger logger = LoggerFactory.getLogger(ResourceMgmtServiceImpl.class);

	@Autowired
	ResourceRepository resRepo;

	@Autowired
	SimpleSQLManager simpleSQLMgr;

	@Override
	public ResourceEntity create(ResourceEntity res) {
		return resRepo.save(res);
	}

	@Override
	public ResourceEntity getResource(Long id) {
		Optional<ResourceEntity> optionalResource = resRepo.findById(id);
		return optionalResource.isPresent() ? optionalResource.get() : null;
	}

	@Override
	public ResourceEntity getResourceByEmployeeId(String employeeId) {
		List<ResourceEntity> employees = resRepo.findByEmployeeID(employeeId);
		return employees.get(0);
	}

	@Override
	public void deleteResource(Long id) {
		resRepo.deleteById(id);
	}

	/**
	 * 
	 * @param id
	 * @return
	 */
	@Override
	public ResourceEntity disableResourceById(Long id) {
		Optional<ResourceEntity> foundResource = resRepo.findById(id);
		ResourceEntity resourceEntity = null;
		if (foundResource.isPresent()) {
			resourceEntity = foundResource.get();
			resourceEntity.setActive("N");
			resRepo.save(resourceEntity);
		}
		return resourceEntity;
	}

	@Override
	public ResourceEntity getResourceByUserId(Long userId) {
		List<ResourceEntity> resEntities = resRepo.findResourceByUserId(userId);
		if (resEntities.size() > 0) {
			return resEntities.get(0);
		}
		return null;
	}

}
