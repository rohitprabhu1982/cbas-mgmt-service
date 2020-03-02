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
public class TDLProException extends RuntimeException {
    private static final long serialVersionUID = 1L;
    private static final String ERROR_PERFORMING = "Error performing operation";
        /**
         * Default constructor.
         */
        public TDLProException()
        {
            /*
             * Default constructor.
             */
        }
 
        /**
         * Constructor with text message.
         * @param message
         */
        public TDLProException(String message)
        {
            super(message);
        }

        /**
         * Constructor wrapping original exception.
         * @param cause
         */
        public TDLProException(Throwable cause)
        {
            super(cause);
        }
 
        /**
         * Constructor with message and original exception.
         * @param message
         * @param cause
         */
        public TDLProException(String message, Throwable cause)
        {
            super(message, cause);
        }
 
        /**
         * Constructor with message, original exception, enableSuppression flag, and writableStackTrace falg.
         * @param message
         * @param cause
         * @param enableSuppression
         * @param writableStackTrace
         */
        public TDLProException(String message, Throwable cause,
                                           boolean enableSuppression, boolean writableStackTrace)
        {
            super(message, cause, enableSuppression, writableStackTrace);
        }
        
        public String getDisplayMessage() {
            return ERROR_PERFORMING;
        }  
}
