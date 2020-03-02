/*
 * Copyright (C) Deloitte, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
package com.fda.ctp.bean;

import lombok.Data;

/**
 *
 * @author rabalasubramani3
 */
@Data
public class DateRange {
    private String fromDate;
    private String toDate;
    private String fiscalYear;
}
