package com.fda.ctp.bean;

import java.sql.Timestamp;

import lombok.Data;

/**
 * The Class User.
 */
@Data
public class HSPActionValue extends BaseTDLProBean {

	private long id;
	private long fromId;
	private long toId;
	private long actionId;
	private long objectType;
	private String primaryKey;
	private String message;
	private Timestamp actionTime;

	public HSPActionValue() {
		id = 0;
		fromId = 0;
		toId = 0;
		actionId = 0;
		objectType = 0;
		primaryKey = "";
		message = "";
	}

	/**
	 * Instantiates a new value.
	 *
	 * @param value the value
	 */

	public HSPActionValue(long id, long fromId, long toId, long actionId, long objectType, String primaryKey,
			String message, Timestamp actionTime) {
		super();
		this.id = id;
		this.fromId = fromId;
		this.toId = toId;
		this.actionId = actionId;
		this.objectType = objectType;
		this.primaryKey = primaryKey;
		this.message = message;
		this.actionTime = actionTime;
	}
}
