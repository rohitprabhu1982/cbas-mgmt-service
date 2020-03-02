package com.fda.ctp.config.security.twofactauth;

import java.util.Collection;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;

import com.fda.ctp.bean.UserContext;

public class TwoFactorAuthToken extends AbstractAuthenticationToken {

    private static final long serialVersionUID = 2877954820905567501L;

    //private RawAccessJwtToken rawAccessToken;
    private String verificationCode;
    private UserContext userContext;

    public TwoFactorAuthToken(String verificationCode) {
        super(null);
        this.verificationCode = verificationCode;
        this.setAuthenticated(false);
    }

    public TwoFactorAuthToken(Collection<? extends GrantedAuthority> authorities) {
        super(authorities);
        this.eraseCredentials();
        super.setAuthenticated(true);
    }

    @Override
    public void setAuthenticated(boolean authenticated) {
        if (authenticated) {
            throw new IllegalArgumentException(
                    "Cannot set this token to trusted - use constructor which takes a GrantedAuthority list instead");
        }
        super.setAuthenticated(false);
    }

    @Override
    public Object getCredentials() {
        return verificationCode;
    }

    @Override
    public Object getPrincipal() {
        return this.userContext;
    }

    @Override
    public void eraseCredentials() {
        super.eraseCredentials();
        this.verificationCode = null;
    }

    /**
     *
     */
    /*private static final long serialVersionUID = 1L;
	
	private String verificationCode;
	private Object principal;
	private Object credentials;
	
	public TwoFactAuthToken(Object principal, Object credentials, Object twoFactorCredential) {
		super(principal, credentials);
		this.setVerificationCode((String) twoFactorCredential);
		this.setPrincipal(principal);
		this.setCredentials(credentials);
	}
	
	public TwoFactAuthToken(Object principal, Object credentials,Object twoFactorCredential,
			Collection<? extends GrantedAuthority> authorities){
		super(principal, credentials,
				authorities);
		
	}

	public String getVerificationCode() {
		return verificationCode;
	}

	public void setVerificationCode(String verificationCode) {
		this.verificationCode = verificationCode;
	}

	public Object getPrincipal() {
		return principal;
	}

	public void setPrincipal(Object principal) {
		this.principal = principal;
	}

	public Object getCredentials() {
		return credentials;
	}

	public void setCredentials(Object credentials) {
		this.credentials = credentials;
	}*/
}
