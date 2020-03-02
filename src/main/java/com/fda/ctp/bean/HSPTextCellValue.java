package com.fda.ctp.bean;

import lombok.Data;

/**
 * The Class User.
 */
@Data
public class HSPTextCellValue extends BaseTDLProBean {
	private long textId;
	private String value;

	public HSPTextCellValue() {
		value = "";
	}

	/**
	 * Instantiates a new value.
	 *
	 * @param value the value
	 */
	public HSPTextCellValue(String value) {
		this.value = value;

	}
}
