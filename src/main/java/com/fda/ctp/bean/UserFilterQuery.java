package com.fda.ctp.bean;

import lombok.Data;

@Data
public class UserFilterQuery {
    private String groupBy;
	private String groupName;
	private String filterBy;
	private Long filterID;
}
