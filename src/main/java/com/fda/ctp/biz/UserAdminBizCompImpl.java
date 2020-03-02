/**
 *
 */
package com.fda.ctp.biz;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.TreeSet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.fda.ctp.bean.UserDTO;
import com.fda.ctp.domain.ResourceEntity;
import com.fda.ctp.domain.RoleEntity;
import com.fda.ctp.domain.UserEntity;
import com.fda.ctp.repository.ResourceRepository;
import com.fda.ctp.repository.UserRepository;
import com.fda.ctp.repository.UserRoleRepository;

/**
 * The Class UserAdminBizCompImpl.
 */
@Component
@Transactional
public class UserAdminBizCompImpl implements UserAdminBizComp {

	/**
	 * The logger.
	 */
	Logger logger = LoggerFactory.getLogger(UserAdminBizCompImpl.class);

	/**
	 * The user entity manager.
	 */
	@Autowired
	private UserRepository userRepo;

	@Autowired
	private UserRoleRepository roleRepo;

	@Autowired
	private ResourceRepository resourceRepo;

	@Autowired
	private PasswordEncoder encoder;

	@Override
	public UserDTO registerUser(UserDTO userDTO) {
		UserEntity userEntity = transformUserDtoToEntity(userDTO);
		userRepo.save(userEntity);
		return transformEntityToUserDTO(userEntity);
	}

	private UserDTO transformEntityToUserDTO(UserEntity ue) {
		UserDTO dto = new UserDTO();
		dto.setUserId(ue.getUserId());
		dto.setCreatedBy(ue.getCreatedBy());
		if (ue.getCreatedDt() != null) {
			dto.setCreatedDt(ue.getCreatedDt().toString());
		}
		dto.setEmail(ue.getEmail());
		dto.setEnabled(ue.getEnabled());
		dto.setFirstName(ue.getFirstName());
		dto.setLastLoginDate(ue.getLastLoginDate());
		dto.setLastName(ue.getLastName());
		dto.setModifiedBy(ue.getModifiedBy());
		if (ue.getModifiedDt() != null) {
			dto.setModifiedDt(ue.getModifiedDt().toString());
		}
		dto.setPassword(ue.getPassword());
		dto.setEmployeeId(ue.getEmployeeId());

		// current state : Single user is associated with single role
		for (Iterator<RoleEntity> iterator = ue.getRoles().iterator(); iterator.hasNext();) {
			RoleEntity role = iterator.next();
			dto.setRole(role.getName());
		}
		return dto;
	}

	/**
	 * Assemble user entity.
	 *
	 * @param u the u
	 * @return the user entity
	 */
	private UserEntity transformUserDtoToEntity(UserDTO userDto) {

		UserEntity userEntity = new UserEntity();

		userEntity.setFirstName(userDto.getFirstName());
		userEntity.setLastName(userDto.getLastName());
		userEntity.setEmail(userDto.getEmail());
		if (userDto.getPassword().contains("bcrypt")) {
			userEntity.setPassword(userDto.getPassword());
		} else {
			userEntity.setPassword(encoder.encode(userDto.getPassword()));
		}
		userEntity.setPassword(encoder.encode(userDto.getPassword()));
		userEntity.setEnabled(userDto.getEnabled());
		userEntity.setLastLoginDate(userDto.getLastLoginDate());
		userEntity.setEmployeeId(userDto.getEmployeeId());
		userEntity.setUserId(userDto.getUserId());

		RoleEntity roleEntity = roleRepo.findByName(userDto.getRole());
		List<RoleEntity> listRoles = new ArrayList<>();
		listRoles.add(roleEntity);
		userEntity.setRoles(listRoles);

		return userEntity;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.deloitte.agile.asmat.biz.useradmin.UserAdminBizComp#getUsers()
	 */
	@Override
	public Set<UserDTO> getUsers() {
		List<UserEntity> entityUsers = userRepo.findAll();
		Set<UserDTO> users = new TreeSet<>();

		for (UserEntity user : entityUsers) {
			if (user.getRoles().size() > 0) {
				UserDTO dto = this.transformEntityToUserDTO(user);
				dto.setRole(user.getRoles().get(0).getRoleDescription());
				dto.setEnabled(user.getEnabled());
				users.add(dto);
			}
		}
		return users;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.fda.ctp.asmat.biz.useradmin.UserAdminBizComp#getUser(java.lang.String)
	 */
	@Override
	public UserDTO getUser(String email) {
		UserEntity userEntity = userRepo.findByEmailIgnoreCase(email);

		UserDTO dto = new UserDTO();
		if (userEntity != null) {
			dto.setUserId(userEntity.getUserId());
			dto.setEmail(userEntity.getEmail());
			dto.setFirstName(userEntity.getFirstName());
			dto.setLastName(userEntity.getLastName());
			dto.setRole(userEntity.getRoles().isEmpty() ? "ROLE_ADMIN"
					: ((RoleEntity) (userEntity.getRoles().get(0))).getName());
			dto.setPassword(userEntity.getPassword());
			dto.setEmployeeId(userEntity.getEmployeeId());
		}

		return dto;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see com.fda.ctp.asmat.biz.useradmin.UserAdminBizComp#getRoles
	 */
	@Override
	public Set<RoleEntity> getRoles() {
		return new HashSet<RoleEntity>(roleRepo.findAll());
	}

	@Override
	public UserDTO getUser(long id) {
		UserDTO dto = transformEntityToUserDTO(userRepo.findById(id).get());
		return dto;
	}

	@Override
	public UserDTO update(UserDTO user) {
		UserEntity userEntity = userRepo.save(transformUserDtoToEntity(user));
		return transformEntityToUserDTO(userEntity);
	}

	@Override
	public ResourceEntity updateResource(ResourceEntity resource) {
		ResourceEntity updatedResource = resourceRepo.save(resource);
		return updatedResource;
	}

	@Override
	public ResourceEntity createResource(ResourceEntity resource) {
		ResourceEntity updatedResource = resourceRepo.save(resource);
		return updatedResource;
	}

	@Override
	public void deleteUserById(long userId) {
		userRepo.deleteById(userId);
	}

	@Override
	public UserDTO disableUserById(long userId) {
		UserDTO dto = null;
		Optional<UserEntity> foundUser = userRepo.findById(userId);
		if (foundUser.isPresent()) {
			UserEntity user = foundUser.get();
			user.setEnabled("N");
			userRepo.save(user);
			dto = transformEntityToUserDTO(user);
		}
		return dto;
	}
}
