/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fda.ctp.config.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import com.fda.ctp.bean.Privilege;
import com.fda.ctp.bean.Resource;
import com.fda.ctp.bean.Role;
import com.fda.ctp.domain.PrivilegeEntity;
import com.fda.ctp.domain.ResourceEntity;
import com.fda.ctp.domain.ResourcePrivilegeEntity;
import com.fda.ctp.domain.RoleEntity;
import com.fda.ctp.domain.UserEntity;

/**
 *
 * @author rabalasubramani3
 */
public class UserTDL extends User {

    /**
     * The Constant serialVersionUID.
     */
    private static final long serialVersionUID = -2598920912004376626L;

    /**
     * The user.
     */
    private UserEntity user;

    /**
     * The roles.
     */
    private List<Role> roles;

    //private String secret;
    private String email;

    //private String isUsing2FA;
    /**
     * Instantiates a new user cmspro.
     *
     * @param username the username
     * @param password the password
     * @param enabled the enabled
     * @param accountNonExpired the account non expired
     * @param credentialsNonExpired the credentials non expired
     * @param accountNonLocked the account non locked
     * @param authorities the authorities
     * @param user the user
     */
    public UserTDL(String username, String password, boolean enabled, boolean accountNonExpired,
            boolean credentialsNonExpired, boolean accountNonLocked, Collection<? extends GrantedAuthority> authorities,
            UserEntity user) {
        super(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
        this.user = user;
        this.setRoles(user);
        this.email = user.getEmail();
    }

    public UserTDL(String username, Collection<? extends GrantedAuthority> authorities) {
        super(username, null, authorities);
    }

    /**
     * Gets the user.
     *
     * @return the user
     */
    public UserEntity getUser() {
        return user;
    }

    /**
     * Sets the roles.
     *
     * @param user the new roles
     */
    public void setRoles(UserEntity user) {

        List<RoleEntity> userroles = user.getRoles();
        List<Role> rls = new ArrayList<>();

        for (RoleEntity role : userroles) {
            List<ResourcePrivilegeEntity> resourceprivileges = role.getFuncgrps();
            Role rolem = new Role();
            rolem.setName(role.getName());
            rolem.setUsername(user.getEmail());

            Map<String, List<String>> resourceMap = new HashMap<>();

            for (ResourcePrivilegeEntity resourcePrivilegeEntity : resourceprivileges) {

                PrivilegeEntity privilege = resourcePrivilegeEntity.getPrivilege();
                ResourceEntity resourceEntity = resourcePrivilegeEntity.getResource();

                Privilege pm = new Privilege();
                pm.setName(privilege.getName());

                Resource rm = new Resource();
                rm.setName(resourceEntity.getName());

                if (resourceMap.containsKey(rm.getName())) {
                    List<String> privileges = resourceMap.get(rm.getName());
                    privileges.add(pm.getName());
                } else {
                    List<String> privileges = new ArrayList<>();
                    privileges.add(pm.getName());
                    resourceMap.put(rm.getName(), privileges);
                }
            }

            rolem.setResources(resourceMap);
            rls.add(rolem);
        }

        this.setRoles(rls);
    }

    /**
     * Gets the roles.
     *
     * @return the roles
     */
    public List<Role> getRoles() {
        return roles;
    }

    /**
     * Sets the roles.
     *
     * @param roles the new roles
     */
    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    /* (non-Javadoc)
     * @see org.springframework.security.core.userdetails.User#equals(java.lang.Object)
     */
    @Override
    public boolean equals(Object o) {
        boolean returnVal = false;
        if (o instanceof UserTDL) {
            UserTDL localuser = (UserTDL) o;
            returnVal = Objects.equals(this.user.getId(), localuser.getUser().getId());
        }
        return returnVal;
    }

    /**
     * Implemented for code compliance.
     *
     * @return the int
     */
    @Override
    public int hashCode() {
        return Objects.hash(this.user);
    }
}
