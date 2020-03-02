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

import java.time.LocalDate;

/**
 * The Class UserDTO.
 */


public class UserDTO extends BaseTDLProBean implements Comparable<UserDTO> {

    /**
     * The email.
     */
    private String email;

    /**
     * The password.
     */
    private String password;

    /**
     * The first name.
     */
    private String firstName;

    /**
     * The last name.
     */
    private String lastName;

    /**
     * The role.
     */
    private String role;

    /**
     * The user id.
     */
    private Long userId;

    /**
     * The enabled.
     */
    private String enabled;

    /**
     * The last Login Date.
     */
    private LocalDate lastLoginDate;

    /**
     * The end date.
     */
    private LocalDate endDate;

    /**
     * The phone 1.
     */
    private String employeeId;

    private String secret;

    private String isUsing2FA;

    private String verificationCode;

    private String tfaRegistrationReq;

    private Boolean tfaRegistAuthenticated;

    /**
     * Instantiates a new user DTO.
     */
    public UserDTO() {
        email = "";
        firstName = "";
        lastName = "";
        role = "";
    }

    /**
     * Instantiates a new user DTO.
     *
     * @param email the email
     */
    public UserDTO(String email) {
        this.email = email;
    }

    /**
     * Instantiates a new user DTO.
     *
     * @param email the email
     * @param password the password
     */
    public UserDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }

    /**
     * Gets the user id.
     *
     * @return the userId
     */
    public Long getUserId() {
        return userId;
    }

    /**
     * Sets the user id.
     *
     * @param userId the userId to set
     */
    public void setUserId(Long userId) {
        this.userId = userId;
    }

    /**
     * Gets the enabled.
     *
     * @return the enabled
     */
    public String getEnabled() {
        return enabled;
    }

    /**
     * Sets the enabled.
     *
     * @param enabled the enabled to set
     */
    public void setEnabled(String enabled) {
        this.enabled = enabled;
    }

    /**
     * Gets the email.
     *
     * @return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * Sets the email.
     *
     * @param email the new email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Gets the password.
     *
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * Sets the password.
     *
     * @param password the new password
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * Gets the last name.
     *
     * @return the last name
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * Sets the last name.
     *
     * @param lastName the new last name
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * Gets the first name.
     *
     * @return the first name
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * Sets the first name.
     *
     * @param firstName the new first name
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * Gets the role.
     *
     * @return the role
     */
    public String getRole() {
        return role;
    }

    /**
     * Sets the role.
     *
     * @param role the new role
     */
    public void setRole(String role) {
        this.role = role;
    }

    /* (non-Javadoc)
	 * @see java.lang.Comparable#compareTo(java.lang.Object)
     */
    @Override
    public int compareTo(UserDTO user) {
        return compareString().compareTo(user.compareString());
    }

    /**
     * Compare string.
     *
     * @return the string
     */
    protected String compareString() {
        return (this.lastName + " " + this.firstName + " " + this.email).toUpperCase();
    }

    /**
     * @return the lastLoginDate
     */
    public LocalDate getLastLoginDate() {
        return lastLoginDate;
    }

    /**
     * @param lastLoginDate the lastLoginDate to set
     */
    public void setLastLoginDate(LocalDate lastLoginDate) {
        this.lastLoginDate = lastLoginDate;
    }

    /**
     * @return the endDate
     */
    public LocalDate getEndDate() {
        return endDate;
    }

    /**
     * @param endDate the endDate to set
     */
    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }

    public String getIsUsing2FA() {
        return isUsing2FA;
    }

    public void setIsUsing2FA(String isUsing2FA) {
        this.isUsing2FA = isUsing2FA;
    }

    public String getVerificationCode() {
        return verificationCode;
    }

    public void setVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
    }

    public String getTfaRegistrationReq() {
        return tfaRegistrationReq;
    }

    public void setTfaRegistrationReq(String tfaRegistrationReq) {
        this.tfaRegistrationReq = tfaRegistrationReq;
    }

    public Boolean getTfaRegistAuthenticated() {
        return tfaRegistAuthenticated;
    }

    public void setTfaRegistAuthenticated(Boolean tfaRegistAuthenticated) {
        this.tfaRegistAuthenticated = tfaRegistAuthenticated;
    }

}
