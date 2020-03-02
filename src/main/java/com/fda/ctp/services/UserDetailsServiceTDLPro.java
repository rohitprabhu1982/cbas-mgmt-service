/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.services;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fda.ctp.config.security.UserTDL;
import com.fda.ctp.domain.RoleEntity;
import com.fda.ctp.domain.UserEntity;
import com.fda.ctp.exception.TDLProException;
import com.fda.ctp.repository.UserRepository;
import com.fda.ctp.repository.UserRoleRepository;

/**
 *
 * @author rabalasubramani3
 */

/**
 * UserDetailsServiceTDLPro loads user specific details if user is found in the database.
 * This includes roles,resources and privileges. If user is not found in the database
 * with the email entered an exception is thrown indicating that authentication of the 
 * user failed.
 */
@Service("userDetailsService")
@Transactional
public class UserDetailsServiceTDLPro implements UserDetailsService {
        
    Logger logger = LoggerFactory.getLogger(UserDetailsServiceTDLPro.class);
    
    @Autowired
    UserRepository userRepo;
    
    @Autowired
    UserRoleRepository roleRepo;    
    
    @Override
    public UserDetails loadUserByUsername(final String email) throws UsernameNotFoundException {

        try {
            final UserEntity user = userRepo.findByEmailIgnoreCase(email);
            if (user == null) {
                throw new UsernameNotFoundException("No user found with username: " + email);
            }

            /*
             * Custom User object to be used during custom implementation of Access Decision Manager.
             * The User object can carry information related to resources and privileges as well.
             */
 /*
             * Send in an empty password. As this is an SSO authentication and the username coming to 
               ASMAT is already authenticated. Password is not Required.
             */
            return new UserTDL(user.getEmail(), user.getPassword(), true, true, true, true, getGrantedAuth(user), user);

        } catch (final Exception e) {
            throw new TDLProException("System currently unavailable.", e);
        }
    }    

    
    private final List<GrantedAuthority> getGrantedAuth(UserEntity user) {

        List<RoleEntity> roles = user.getRoles();
        final List<GrantedAuthority> authorities = new ArrayList<>();

        for (RoleEntity role : roles) {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }

        return authorities;
    }    
    
    
    
}
