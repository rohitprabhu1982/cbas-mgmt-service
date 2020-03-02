/*
 * Copyright (C) Deloitte, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
package com.fda.ctp.exception;

import java.sql.SQLException;
import java.sql.SQLSyntaxErrorException;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.fda.ctp.bean.ErrorInfo;



/**
 *
 * @author rabalasubramani3
 */
@ControllerAdvice
public class GlobalTDLProControllerExceptionHandler {

    /**
     * The Constant logger.
     */
    private static final Logger logger = LoggerFactory.getLogger(GlobalTDLProControllerExceptionHandler.class);

    /**
     * The exception config.
     */
    /* should we auto-inject this instead? */
//    @Autowired
//    private ExceptionConfig exceptionConfig;

    /**
     * Handle unacceptable request.
     *
     * @param req the req
     * @param ex the ex
     * @return the error info
     */
    @ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
    @ExceptionHandler(TDLProException.class)
    @ResponseBody
    ErrorInfo
    handleUnacceptableRequest(HttpServletRequest req, Exception ex) {
        logger.error("TDLProException: ", req.getRequestURL().toString(), ex.getLocalizedMessage());
        return new ErrorInfo(req.getRequestURI(), ex.getLocalizedMessage());
    }

    /**
     * Handle error.
     *
     * @param req the req
     * @param ex the ex
     * @return the error info
     */
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(UserNotFoundException.class)
    @ResponseBody
    ErrorInfo
    handleError(HttpServletRequest req, Exception ex) {
        logger.error("UserNotFoundException: ", req.getRequestURL().toString(), ex.getLocalizedMessage());
        return new ErrorInfo(req.getRequestURL().toString(), ex.getLocalizedMessage());
    }

    /**
     * Handler for any SQLExceptions.
     *
     * @param req the req
     * @param ex the ex
     * @return the error info
     */
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler({SQLException.class, DataAccessException.class})
    @ResponseBody
    ErrorInfo
    handleDatabaseError(HttpServletRequest req, Exception ex) {

        if (ex.getCause() != null && ex.getCause().getCause() != null && ex.getCause().getCause() instanceof SQLSyntaxErrorException) {
            logger.error("Database Error: A sql syntax error has occurred. Please check the sql.");
            return new ErrorInfo(req.getRequestURL().toString(), "A sql syntax error has occurred. Please check the sql.");
        }

        logger.error("Database Error:", req.getRequestURL().toString(), ex.getLocalizedMessage());
        return new ErrorInfo(req.getRequestURL().toString(), ex.getLocalizedMessage());

    }

    /**
     * Handle bad request.
     *
     * @param req the req
     * @param ex the ex
     * @return the error info
     */
    @ResponseStatus(HttpStatus.CONFLICT)
    @ExceptionHandler(DataIntegrityViolationException.class)
    @ResponseBody
    ErrorInfo
    handleBadRequest(HttpServletRequest req, Exception ex) {
//        TDLProException tdlproException = null;
        String rootCauseErrorMessage = null;
        // get the uri that generated the exception
        String uri = req.getRequestURI();
//        String path = new UrlPathHelper().getPathWithinApplication(req);
        // look up the name of the new exception to create
//        String className = exceptionConfig.getClassNameForURI(path);
        // create an instance of this exception
        try {
//            Class<?> exceptionClass = Class.forName(className);
//            Constructor<?> ctor = exceptionClass.getConstructor(Throwable.class);
//            tdlproException = (TDLProException) ctor.newInstance(new Object[]{ex});
            rootCauseErrorMessage = ExceptionUtils.getRootCauseMessage(ex);
        } catch (Exception e) {
            // log this please
            logger.error("error", e);
//            tdlproException = new TDLProException(ex);
        }
        return new ErrorInfo(uri, rootCauseErrorMessage);
    }

    /**
     * Handle Authentication Exception.
     *
     * @param req the req
     * @param ex the ex
     * @return the error info
     */
    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler(AuthenticationException.class)
    @ResponseBody
    ErrorInfo
    handleAuthenticationException(HttpServletRequest req, Exception ex) {
        logger.error("Authentication  Exception: ", req.getRequestURL().toString(), ex.getLocalizedMessage());
        return new ErrorInfo(req.getRequestURL().toString(), ex.getLocalizedMessage());
    }

//    public ExceptionConfig getExceptionConfig() {
//        return exceptionConfig;
//    }
//
//    public void setExceptionConfig(ExceptionConfig exceptionConfig) {
//        this.exceptionConfig = exceptionConfig;
//    }
}
