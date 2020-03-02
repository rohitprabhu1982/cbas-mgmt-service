/* 
 * Copyright (C) Deloitte, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
package com.fda.ctp.controller;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fda.ctp.bean.User;
import com.fda.ctp.bean.UserDTO;
import com.fda.ctp.biz.UserAdminBizComp;
import com.fda.ctp.domain.ResourceEntity;
import com.fda.ctp.services.SimpleSQLManager;

@CrossOrigin(origins = "maxAge = 3600")
@RestController
@RequestMapping("/api/useradmin")
public class UserAdminRestController {

	Logger logger = LoggerFactory.getLogger(UserAdminRestController.class);

	@Autowired
	private UserAdminBizComp userAdminBizComp;

	@Autowired
	SimpleSQLManager simpleSQLManager;

	public UserAdminRestController() {
		// Empty Constructor
	}

	/**
	 * 
	 * @param user
	 * @return
	 */
	@PostMapping(value = "/user")
	public ResponseEntity<User> registerUser(@Valid @RequestBody User user) {
		logger.debug("CREATE_USER: Create user with last name = {}, first name = {}", user.getLastName(),
				user.getFirstName());
		UserDTO userDTO = userAdminBizComp.registerUser(transformUserToDto(user));

		return new ResponseEntity<>(transformUserDtoToUser(userDTO), HttpStatus.CREATED);
	}

	private User transformUserDtoToUser(UserDTO dto) {
		User user = new User();
		user.setEmail(dto.getEmail());

		user.setFirstName(dto.getFirstName());

		user.setLastName(dto.getLastName());
		user.setEmployeeId(dto.getEmployeeId());
		user.setRole(dto.getRole());
		user.setEnabled("Y");
		if (dto.getEnabled() != null) {
			user.setEnabled(dto.getEnabled().equals("Inactive") ? "N" : "Y");
		}
		user.setUserId(dto.getUserId());

		return user;
	}

	/**
	 * Gets a list of users
	 * 
	 * @return
	 */
	@GetMapping(value = "/users")
	public ResponseEntity<?> getUsers() {
		logger.debug("Entering getUsers()");
		return ResponseEntity.ok(userAdminBizComp.getUsers());
	}

	@GetMapping(value = "/users/missing")
	public ResponseEntity<?> getMissingUsers() {
		logger.debug("Entering getMissingUsers()");
		return ResponseEntity.ok(simpleSQLManager.getMissingUsers());
	}

	@GetMapping(value = "/restypes")
	public ResponseEntity<?> getResourceTypes() {
		logger.debug("Entering getResourceTypes()");
		return ResponseEntity.ok(simpleSQLManager.getCodeValues("RESOURCE_TYPE"));
	}

	@GetMapping(value = "/resteams")
	public ResponseEntity<?> getResourceTeams() {
		logger.debug("Entering getResourceTeams()");
		return ResponseEntity.ok(simpleSQLManager.getCodeValues("RESOURCE_TEAM"));
	}

	@GetMapping(value = "/posnames")
	public ResponseEntity<?> getPositionNames() {
		logger.debug("Entering getPositionNames()");
		return ResponseEntity.ok(simpleSQLManager.getCodeValues("POSITION_CODE"));
	}

	/**
	 * Returns user info based on email address
	 * 
	 * @param email
	 * @return
	 */
	@PostMapping(value = "/retrieve")
	@ResponseStatus(value = HttpStatus.OK)
	public User getUser(@RequestBody String email) {
		logger.debug("Entering getUser() with email");
		return assembleUser(userAdminBizComp.getUser(email));
	}

	@GetMapping(value = "/roles")
	public ResponseEntity<?> getRoles() {
		logger.debug("Entering getRoles()");
		return ResponseEntity.ok(userAdminBizComp.getRoles());
	}

	/**
	 * Update user.
	 *
	 * @param user
	 * @return the response entity
	 */
	@PutMapping(value = "/user/{id}")
	public ResponseEntity<User> updateUser(@Valid @RequestBody User user) {
		UserDTO retmodel = userAdminBizComp.update(transformUserToDto(user));
		return new ResponseEntity<>(transformUserDtoToUser(retmodel), HttpStatus.OK);
	}

	/**
	 * 
	 * @param resource
	 * @return
	 */
	@PutMapping(value = "/resource/{id}")
	public ResponseEntity<ResourceEntity> updateResource(@Valid @RequestBody ResourceEntity resource) {
		ResourceEntity retmodel = userAdminBizComp.updateResource(resource);
		return new ResponseEntity<>(retmodel, HttpStatus.OK);
	}

	@PostMapping(value = "/resource")
	public ResponseEntity<ResourceEntity> createResource(@Valid @RequestBody ResourceEntity resource) {
		ResourceEntity retmodel = userAdminBizComp.createResource(resource);
		return new ResponseEntity<>(retmodel, HttpStatus.OK);
	}

	/**
	 * Read user.
	 *
	 * @param id the id
	 * @return the response entity
	 */
	@GetMapping(value = "/user/{id}", produces = { "application/json" })
	public ResponseEntity<User> getUser(@PathVariable long id) {
		User user = transformUserDtoToUser(userAdminBizComp.getUser(id));
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	@DeleteMapping(value = "/user/{id}", produces = { "application/json" })
	public ResponseEntity<User> deleteUserById(@PathVariable long id) {
		User user = transformUserDtoToUser(userAdminBizComp.getUser(id));
		userAdminBizComp.disableUserById(id);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	private User assembleUser(UserDTO user) {
		User user2 = new User();
		user2.setEmail(user.getEmail());
		user2.setFirstName(user.getFirstName());
		user2.setLastName(user.getLastName());
		user2.setRole(user.getRole());
		user2.setUserId(user.getUserId());
		return user2;
	}

	private UserDTO transformUserToDto(User user) {

		UserDTO userDTO = new UserDTO();
		userDTO.setFirstName(user.getFirstName());
		userDTO.setLastName(user.getLastName());
		userDTO.setEmail(user.getEmail());
		userDTO.setRole(user.getRole());
		if (user.getEnabled() == null) {
			userDTO.setEnabled("Y");
		} else {
			userDTO.setEnabled(user.getEnabled());
		}
		userDTO.setPassword(user.getPassword());
		userDTO.setEmployeeId(user.getEmployeeId());
		userDTO.setUserId(user.getUserId());

		return userDTO;
	}

}
