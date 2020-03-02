package com.fda.ctp.config.security.jwt.security.endpoint;


import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.env.Environment;
import org.springframework.http.MediaType;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fda.ctp.config.security.UserTDL;
import com.fda.ctp.config.security.jwt.security.auth.jwt.extractor.TokenExtractor;
import com.fda.ctp.config.security.jwt.security.auth.jwt.verifier.TokenVerifier;
import com.fda.ctp.config.security.jwt.security.config.JwtSettings;
import com.fda.ctp.config.security.jwt.security.config.WebSecurityConfig;
import com.fda.ctp.config.security.jwt.security.exceptions.InvalidJwtToken;
import com.fda.ctp.config.security.jwt.security.model.token.JwtToken;
import com.fda.ctp.config.security.jwt.security.model.token.JwtTokenFactory;
import com.fda.ctp.config.security.jwt.security.model.token.RawAccessJwtToken;
import com.fda.ctp.config.security.jwt.security.model.token.RefreshToken;


@RestController
public class RefreshTokenEndpoint {
    @Autowired private JwtTokenFactory tokenFactory;
    @Autowired private JwtSettings jwtSettings;
    @Autowired private Environment env;
    @Autowired private UserDetailsService userDetailsService;
    @Autowired private TokenVerifier tokenVerifier;
    @Autowired @Qualifier("jwtHeaderTokenExtractor") private TokenExtractor tokenExtractor;
    
    @RequestMapping(value="/api/auth/token", method=RequestMethod.GET, produces={ MediaType.APPLICATION_JSON_VALUE })
    public @ResponseBody JwtToken refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        
    	String tokenPayload = tokenExtractor.extract(request.getHeader(WebSecurityConfig.JWT_TOKEN_HEADER_PARAM));
        
        RawAccessJwtToken rawToken = new RawAccessJwtToken(tokenPayload);
        RefreshToken refreshToken = RefreshToken.create(rawToken, env.getProperty("tokenSigningKey"));
        		
        String jti = refreshToken.getJti();
        if (!tokenVerifier.verify(jti)) {
            throw new InvalidJwtToken();
        }

        String subject = refreshToken.getSubject();        
        UserTDL user = (UserTDL) userDetailsService.loadUserByUsername(subject);
        return tokenFactory.createAccessJwtToken(user);
    }
}
