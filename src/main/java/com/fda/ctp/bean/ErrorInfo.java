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
public class ErrorInfo {
    public final String url;
    public final String ex;
    public ErrorInfo(String url, String exceptionMessage) {
        this.url = url;
        this.ex = exceptionMessage;
    }
}
