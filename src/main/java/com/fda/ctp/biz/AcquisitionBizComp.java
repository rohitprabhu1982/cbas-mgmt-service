/**
 *
 */
package com.fda.ctp.biz;

import com.fda.ctp.bean.HSPActionValue;
import com.fda.ctp.bean.HSPTextCellValue;

/**
 * The Interface UserAdminBizComp.
 *
 * @author
 */
public interface AcquisitionBizComp {

	/**
	 * Save HSP Text.
	 *
	 * @param hspTextValue
	 * @return
	 */
	HSPTextCellValue saveHSPTextCellValue(HSPTextCellValue hspTextValue);

	/**
	 * Save HSP Action.
	 *
	 * @param hspActionValue
	 * @return
	 */
	HSPActionValue saveHSPTextCellValue(HSPActionValue hspActionValue);

}
