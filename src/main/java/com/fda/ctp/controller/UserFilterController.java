/**
 * 
 */
package com.fda.ctp.controller;

import java.util.List;

import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fda.ctp.bean.CodeValue;
import com.fda.ctp.bean.SaveUserFilter;
import com.fda.ctp.domain.UserFilters;
import com.fda.ctp.services.UserSaveFilterService;

/**
 * @author roprabhu
 *
 */
@RestController
@RequestMapping("/api/useradmin")
public class UserFilterController {

	@Autowired
	private UserSaveFilterService userSaveFilterService;

	/**
	 * @param saveUserFilter
	 * @return
	 * @throws Exception
	 */
	@PostMapping(path = "/savefilter/")
	public String saveUsersFilterSelection(@RequestBody SaveUserFilter saveUserFilter) throws Exception {
		String response = userSaveFilterService.saveUsersFilter(saveUserFilter);
		return response;
	}

	/**
	 * @param ufq
	 * @return
	 * @throws JSONException
	 */
	@GetMapping(path = "/filter/list/")
	public ResponseEntity<List<UserFilters>> getUserFilterList(@RequestParam("userid") String userid) throws JSONException {
		// This returns a JSON or XML with the TDLs
		List<UserFilters> allTDLs = userSaveFilterService.getsavedUserFilter(userid);
		return new ResponseEntity<>(allTDLs, HttpStatus.OK);
	}

	/**
	 * @param id
	 * @return
	 */
	@DeleteMapping(path = "/filter/{id}")
	public ResponseEntity<?> deleteUserFilter(@PathVariable Integer id) {
		userSaveFilterService.deleteUserFilter(id);
		CodeValue cv = new CodeValue();
		cv.setCode("DELETED");
		cv.setValue("Deleted Filter Successfully");
		return new ResponseEntity<>(cv, HttpStatus.OK);
	}

}
