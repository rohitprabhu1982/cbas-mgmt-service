/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fda.ctp.domain.TDLResourceEntity;
import com.fda.ctp.repository.TDLResourceRepository;

@Service
@Transactional
public class TDLResourceMgmtServiceImpl implements TDLResourceMgmtService {

	Logger logger = LoggerFactory.getLogger(TDLResourceMgmtServiceImpl.class);

	@Autowired
	TDLResourceRepository resRepo;

	@Autowired
	SimpleSQLManager simpleSQLManager;

	@Override
	public TDLResourceEntity update(TDLResourceEntity res) {
		TDLResourceEntity foundTDLResource = resRepo.findOneByTdlIDAndResourceID(res.getTdlID(), res.getResourceID());
		Boolean lcatCodeChanged = false;
		// If found just update the hours and save it.
		if (foundTDLResource != null) {
			// admin intentionally changed the LCAT code.
			if (foundTDLResource.getLcatCode() == null ? res.getLcatCode() != null
					: !foundTDLResource.getLcatCode().equals(res.getLcatCode())) {
				foundTDLResource.setLcatCode(res.getLcatCode());
				lcatCodeChanged = true;
			}
			foundTDLResource.setHours(res.getHours());
			foundTDLResource.setHours2(res.getHours2());
			foundTDLResource.setPeriod1(res.getPeriod1());
			foundTDLResource.setPeriod2(res.getPeriod2());
			foundTDLResource.setSkills(res.getSkills());
			TDLResourceEntity savedTDLResource = resRepo.save(foundTDLResource);

		}
		return resRepo.save(res);
	}

	@Override
	public List<TDLResourceEntity> getAll() {
		// get all customers
		Iterable<TDLResourceEntity> allResources = resRepo.findAll();
		// convert to list
		List<TDLResourceEntity> resources = new ArrayList<>();
		allResources.forEach(resources::add);
		return resources;
	}

	@Override
	public TDLResourceEntity getResource(Long id) {
		Optional<TDLResourceEntity> tdlResource = resRepo.findById(id);
		return tdlResource.isPresent() ? tdlResource.get() : null;
	}

}
