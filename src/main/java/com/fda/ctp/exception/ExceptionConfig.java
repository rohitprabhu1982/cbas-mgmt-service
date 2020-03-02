/*
 * Copyright (C) Deloitte, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
package com.fda.ctp.exception;


import java.util.HashMap;
import java.util.Map;

/**
 * @author 
 *
 */
public class ExceptionConfig {
    Map<String, String> uriClassMap = new HashMap<String, String>();

    public ExceptionConfig(Map<String, String>exceptionMap) {
        uriClassMap = exceptionMap;
    }

    /**
     * Get the exception class name for a given uri.
     * @param uri
     * @return
     */
    public String getClassNameForURI(String uri) {
        String path = (uri != null) ? uri.toUpperCase() : uri;
        String returnVal = uriClassMap.get(path);
        if(returnVal == null) {
            returnVal = "com.deloitte.cmspro.exception.TDLProException";
        }
        return returnVal;
    }
}
