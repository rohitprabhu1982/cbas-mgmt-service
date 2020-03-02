/**
 * 
 */
package com.fda.ctp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fda.ctp.bean.SaveUserFilter;
import com.fda.ctp.domain.UserFilters;
import com.fda.ctp.repository.UserSaveFilterRepository;

/**
 * @author roprabhu
 *
 */
@Service("userSaveFilterService")
public class UserSaveFilterServiceImpl implements UserSaveFilterService {

	@Autowired
	private UserSaveFilterRepository repo;

	@Override
	public String saveUsersFilter(SaveUserFilter userFilterData) throws Exception {
		try {
			UserFilters filter = new UserFilters();
			filter.setFilterCategory(userFilterData.getFilterCategory());
			filter.setFilterJson(userFilterData.getFilterJson().toString());
			filter.setFilterName(userFilterData.getFilterName());
			filter.setUserId(userFilterData.getUserId());
			filter.setUserFilterId(userFilterData.getUserFilterId());
			repo.save(filter);

		} catch (Exception e) {
			throw new Exception("Error in saving data");
		}

		return "Success";
	}

	@Override
	public List<UserFilters> getsavedUserFilter(String userId) {
		List<UserFilters> lstFoundFilters = repo.findUserFiltersByCategory(userId);
		return lstFoundFilters;
	}

	@Override
	public void deleteUserFilter(Integer id) {
		repo.deleteById(id);

	}

}
