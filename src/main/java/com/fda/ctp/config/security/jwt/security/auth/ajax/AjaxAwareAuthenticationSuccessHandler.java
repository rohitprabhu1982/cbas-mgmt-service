package com.fda.ctp.config.security.jwt.security.auth.ajax;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.WebAttributes;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fda.ctp.bean.Role;
import com.fda.ctp.config.security.UserTDL;
import com.fda.ctp.config.security.jwt.security.model.token.JwtToken;
import com.fda.ctp.config.security.jwt.security.model.token.JwtTokenFactory;

@Component("jwtSuccessHandler")
public class AjaxAwareAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private final ObjectMapper mapper;
    private final JwtTokenFactory tokenFactory;
    private List<Role> roles;
    private StringBuffer roleList;
    private Role role;
    private String roleName;

    @Autowired
    public AjaxAwareAuthenticationSuccessHandler(final ObjectMapper objectMapper, final JwtTokenFactory tokenFactory) {
        this.mapper = objectMapper;
        this.tokenFactory = tokenFactory;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
            Authentication authentication) throws IOException, ServletException {
        UserTDL userContext = (UserTDL) authentication.getPrincipal();

        JwtToken accessToken = tokenFactory.createAccessJwtToken(userContext);
        JwtToken refreshToken = tokenFactory.createRefreshToken(userContext);
        roles = userContext.getRoles();
        Iterator iterator = roles.iterator();
        roleList =new StringBuffer();
        
        
        while(iterator.hasNext()) {
        	role = (Role)iterator.next();
        	roleName = role.getName();
        	roleList.append(roleName);
        }
        
        
        Map<String, String> tokenMap = new HashMap<String, String>();

        tokenMap.put("accesstoken", accessToken.getToken());
        tokenMap.put("refreshtoken", refreshToken.getToken());
        tokenMap.put("rolelist", roleList.toString());

        response.setStatus(HttpStatus.OK.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        mapper.writeValue(response.getWriter(), tokenMap);

        clearAuthenticationAttributes(request);
    }

    /**
     * Removes temporary authentication-related data which may have been stored
     * in the session during the authentication process..
     *
     * @param request
     */
    protected final void clearAuthenticationAttributes(HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        if (session == null) {
            return;
        }

        session.removeAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
    }

}
