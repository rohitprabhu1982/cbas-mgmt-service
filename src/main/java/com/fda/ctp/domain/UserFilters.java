/**
 * 
 */
package com.fda.ctp.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author roprabhu
 *
 */
@Entity
@Table(name = "tp_user_save_filter")
public class UserFilters {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "USER_FILTER_ID", nullable = false)
	private Long userFilterId;

	@Column(name = "filter_category")
	private String filterCategory;

	@Column(name = "filter_name")
	private String filterName;

	@Column(name = "filter_json")
	private String filterJson;

	@Column(name = "USER_ID")
	private int userId;

	/**
	 * @return the userFilterId
	 */
	public Long getUserFilterId() {
		return userFilterId;
	}

	/**
	 * @param userFilterId the userFilterId to set
	 */
	public void setUserFilterId(Long userFilterId) {
		this.userFilterId = userFilterId;
	}

	public String getFilterCategory() {
		return filterCategory;
	}

	public void setFilterCategory(String filterCategory) {
		this.filterCategory = filterCategory;
	}

	public String getFilterName() {
		return filterName;
	}

	public void setFilterName(String filterName) {
		this.filterName = filterName;
	}

	public String getFilterJson() {
		return filterJson;
	}

	public void setFilterJson(String filterJson) {
		this.filterJson = filterJson;
	}

	/**
	 * @return the userId
	 */
	public int getUserId() {
		return userId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setUserId(int userId) {
		this.userId = userId;
	}

}
