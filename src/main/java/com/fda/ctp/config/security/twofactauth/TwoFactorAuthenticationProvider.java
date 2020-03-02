package com.fda.ctp.config.security.twofactauth;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import com.fda.ctp.bean.SecurityContextUtil;
import com.fda.ctp.bean.UserDTO;
import com.fda.ctp.biz.UserAdminBizCompImpl;

@Component
public class TwoFactorAuthenticationProvider implements AuthenticationProvider {

    /**
     * The user admin entity manager.
     */
    /*
	 * private UserDetailsService userDetailsService;
	 * 
	 * public void setUserDetailsService(UserDetailsService userDetailsService)
	 * { this.userDetailsService = userDetailsService; }
     */
    @Autowired
    UserAdminBizCompImpl userBizComp;

    @Override
    public Authentication authenticate(Authentication auth) throws AuthenticationException {

        String verificationCode = (String) auth.getCredentials();

        String username = SecurityContextUtil.getPrincipal().getUsername();

        UserDTO user = this.userBizComp.getUser(username);

        if ((user == null)) {
            throw new BadCredentialsException("Invalid credentials while verifying Two Factor Authentication code");
        }

//        if (user.getIsUsing2FA() != null && user.getIsUsing2FA().equalsIgnoreCase("Y")) {
//            Totp totp = new Totp(user.getSecret());
//            if (!isValidLong(verificationCode) || !totp.verify(verificationCode)) {
//                throw new BadCredentialsException("Invalid verfication code");
//            }
//        }

        return new TwoFactorAuthToken(this.getGrantedAuth(user));
    }

    private boolean isValidLong(String code) {
        try {
            Long.parseLong(code);
        } catch (NumberFormatException e) {
            return false;
        }
        return true;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(TwoFactorAuthToken.class);
    }

    private final List<GrantedAuthority> getGrantedAuth(UserDTO userDTO) {

        String role = userDTO.getRole();
        final List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(role));

        return authorities;
    }

}
