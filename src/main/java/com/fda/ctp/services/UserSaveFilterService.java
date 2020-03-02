/**
 * 
 */
package com.fda.ctp.services;

import java.util.List;

import com.fda.ctp.bean.SaveUserFilter;
import com.fda.ctp.domain.UserFilters;

/**
 * @author roprabhu
 *
 */
public interface UserSaveFilterService {
	String saveUsersFilter(SaveUserFilter suf) throws Exception;

	List<UserFilters> getsavedUserFilter(String userId);

	void deleteUserFilter(Integer id);

}
