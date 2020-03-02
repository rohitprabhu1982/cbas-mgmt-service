/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.exception;

/**
 *
 * @author rabalasubramani3
 */
public class IngestionParsingException extends TDLProException {

    private static final long serialVersionUID = 1L;

    public IngestionParsingException(String exMssg) {
        super(exMssg);
    }

    public IngestionParsingException(Throwable t) {
        super(t);
    }

    @Override
    public String getDisplayMessage() {
        return "Error parsing file.";
    }

}
