/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.bean;

/**
 *
 * @author rabalasubramani3
 */
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class SecurityContextUtil {

    public static UserContext getPrincipal() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserContext user = null;
        if (auth.isAuthenticated()) {
            user = (UserContext) auth.getPrincipal();
        }
        return user;
    }
}
