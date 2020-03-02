/**
 *
 */
package com.fda.ctp.biz;

import java.util.Set;

import com.fda.ctp.bean.UserDTO;
import com.fda.ctp.domain.ResourceEntity;
import com.fda.ctp.domain.RoleEntity;

/**
 * The Interface UserAdminBizComp.
 *
 * @author
 */
public interface UserAdminBizComp {

	/**
	 * Register user.
	 *
	 * @param u the u
	 * @return
	 */
	UserDTO registerUser(UserDTO u);

	/**
	 * Gets the users.
	 *
	 * @return the users
	 */
	Set<UserDTO> getUsers();

	/**
	 * Gets the user.
	 *
	 * @param email the email
	 * @return the user
	 */
	UserDTO getUser(String email);

	/**
	 * Gets the user.
	 *
	 * @param id
	 * @return the user
	 */
	UserDTO getUser(long id);

	/**
	 * Get all the roles.
	 *
	 * @return
	 */
	Set<RoleEntity> getRoles();

	/**
	 * 
	 * @param user
	 * @return
	 */
	UserDTO update(UserDTO user);

	/**
	 * 
	 * @param resource
	 * @return
	 */
	ResourceEntity updateResource(ResourceEntity resource);

	/**
	 * 
	 * @param resource
	 * @return
	 */
	ResourceEntity createResource(ResourceEntity resource);

	/**
	 * 
	 * @param userId
	 */
	void deleteUserById(long userId);

	/**
	 * 
	 * @param userId
	 * @return
	 */
	UserDTO disableUserById(long userId);

}
