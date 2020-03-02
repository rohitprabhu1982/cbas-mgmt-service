package com.fda.ctp.bean;

import lombok.Data;

/**
 * The Class User.
 */
@Data
public class User extends BaseTDLProBean {
    private long userId;
    private String email;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String role;
    private String employeeId;
    private String lastLoginDt;
    private String endDt;
    private String enabled;
    
    public User() {
        email = "";
        firstName = "";
        lastName = "";
        role = "";
        employeeId = "";
    }

    /**
     * Instantiates a new user.
     *
     * @param email the email
     * @param password the password
     * @param firstname the firstname
     * @param lastname the lastname
     * @param role the role
     */
    public User(String email, String password, String firstname, String lastname, String role) {
        this.email = email;
        this.password = password;
        this.firstName = firstname;
        this.lastName = lastname;
        this.role = role;
    }
}
