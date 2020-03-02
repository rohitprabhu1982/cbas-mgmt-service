/**
 * 
 */
package com.fda.ctp.bean;

/**
 * @author roprabhu
 *
 */
public class SaveUserFilter {
	private int userId;
	private String filterCategory;
	private String filterName;
	private String filterJson;
	private Long userFilterId;

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

}
