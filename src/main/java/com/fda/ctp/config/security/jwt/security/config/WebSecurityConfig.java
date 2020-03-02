package com.fda.ctp.config.security.jwt.security.config;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.authentication.event.AuthenticationSuccessEvent;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.DelegatingPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fda.ctp.config.security.jwt.security.RestAuthenticationEntryPoint;
import com.fda.ctp.config.security.jwt.security.auth.ajax.AjaxLoginProcessingFilter;
import com.fda.ctp.config.security.jwt.security.auth.jwt.JwtAuthenticationProvider;
import com.fda.ctp.config.security.jwt.security.auth.jwt.JwtTokenAuthenticationProcessingFilter;
import com.fda.ctp.config.security.jwt.security.auth.jwt.SkipPathRequestMatcher;
import com.fda.ctp.config.security.jwt.security.auth.jwt.extractor.TokenExtractor;
import com.fda.ctp.config.security.twofactauth.TwoFactorAuthLoginProcessingFilter;
import com.fda.ctp.config.security.twofactauth.TwoFactorAuthenticationProvider;
import com.fda.ctp.services.SimpleSQLManager;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@ComponentScan(basePackages = {"com.fda.ctp"})
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    public static final String JWT_TOKEN_HEADER_PARAM = "X-Authorization";
    public static final String FORM_BASED_LOGIN_ENTRY_POINT = "/api/auth/login";
    public static final String TOKEN_BASED_AUTH_ENTRY_POINT = "/api/**";
    public static final String TOKEN_REFRESH_ENTRY_POINT = "/api/auth/token";
    public static final String TWO_FACT_BASED_LOGIN_ENTRY_POINT = "/api/auth/google/2fa";

    public static final String APP_NAME = "cmspro";

    /**
     * The user details service.
     */
    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private RestAuthenticationEntryPoint authenticationEntryPoint;
    @Autowired
    private AuthenticationSuccessHandler jwtSuccessHandler;
    @Autowired
    private AuthenticationFailureHandler jwtFailureHandler;
    @Autowired
    private JwtAuthenticationProvider jwtAuthenticationProvider;

    @Autowired
    private TokenExtractor tokenExtractor;

    @Autowired
    private AuthenticationSuccessHandler twoFactAuthSuccessHandler;
    @Autowired
    private AuthenticationFailureHandler twoFactAuthFailureHandler;
    @Autowired
    private TwoFactorAuthenticationProvider twoFactorAuthenticationProvider;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private ObjectMapper objectMapper;
    
    @Autowired
    SimpleSQLManager simpleSQLManager;

    @Override
    public void configure(final WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/src/**", "/config/**", "/dist/",
                "/node_modules/**", "/tslint.js/**", "/appresources/**", "/typedoc.json", "/package.json",
                "/tsconfig.json", "/webpack.config.js", "/" + APP_NAME + "/webpack-dev-server.js", "/webpack-dev-server.js",
                "/vendor.bundle.js", "/polyfills.bundle.js", "/main.bundle.js");
    }

    protected AjaxLoginProcessingFilter buildAjaxLoginProcessingFilter() throws Exception {
        AjaxLoginProcessingFilter filter = new AjaxLoginProcessingFilter(FORM_BASED_LOGIN_ENTRY_POINT, jwtSuccessHandler, jwtFailureHandler, objectMapper);
        filter.setAuthenticationManager(this.authenticationManager);
        return filter;
    }

    protected JwtTokenAuthenticationProcessingFilter buildJwtTokenAuthenticationProcessingFilter() throws Exception {
        List<String> pathsToSkip = Arrays.asList(TOKEN_REFRESH_ENTRY_POINT, FORM_BASED_LOGIN_ENTRY_POINT);
        SkipPathRequestMatcher matcher = new SkipPathRequestMatcher(pathsToSkip, TOKEN_BASED_AUTH_ENTRY_POINT);
        JwtTokenAuthenticationProcessingFilter filter
                = new JwtTokenAuthenticationProcessingFilter(jwtFailureHandler, tokenExtractor, matcher);
        filter.setAuthenticationManager(this.authenticationManager);
        return filter;
    }

    protected TwoFactorAuthLoginProcessingFilter buildTwoFactorAuthLoginProcessingFilter() throws Exception {
        TwoFactorAuthLoginProcessingFilter filter = new TwoFactorAuthLoginProcessingFilter(TWO_FACT_BASED_LOGIN_ENTRY_POINT, twoFactAuthSuccessHandler, twoFactAuthFailureHandler, objectMapper);
        filter.setAuthenticationManager(this.authenticationManager);
        return filter;
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) {
        auth.authenticationProvider(authProvider());
        auth.authenticationProvider(twoFactorAuthenticationProvider);
        auth.authenticationProvider(jwtAuthenticationProvider);
        auth.eraseCredentials(false);
        
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors().and()
                .csrf().disable() // We don't need CSRF for JWT based authentication
                .exceptionHandling()
                .authenticationEntryPoint(this.authenticationEntryPoint)
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers(FORM_BASED_LOGIN_ENTRY_POINT).permitAll() // Login end-point
                .antMatchers(TOKEN_REFRESH_ENTRY_POINT).permitAll() // Token refresh end-point
                .and()
                .authorizeRequests()
                // Protected API End-points
                .antMatchers(TOKEN_BASED_AUTH_ENTRY_POINT).authenticated()
                .and()
                .addFilterBefore(buildAjaxLoginProcessingFilter(), UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(buildJwtTokenAuthenticationProcessingFilter(), UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(buildTwoFactorAuthLoginProcessingFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    public DaoAuthenticationProvider authProvider() {
        final DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setPasswordEncoder(delegatingPasswordEncoder());
        authProvider.setUserDetailsService(userDetailsService);
        // Add the following line when you are ready to encrypt password
        // authProvider.setPasswordEncoder(encoder());		
        return authProvider;
    }

	@Bean
    public static PasswordEncoder delegatingPasswordEncoder() {
		PasswordEncoder defaultEncoder = new BCryptPasswordEncoder(11);
	    Map<String, PasswordEncoder> encoders = new HashMap<>();
	    encoders.put("bcrypt", new BCryptPasswordEncoder(11));
	    encoders.put(null,  (NoOpPasswordEncoder) NoOpPasswordEncoder.getInstance());
	 
	    DelegatingPasswordEncoder passwordEncoder = new DelegatingPasswordEncoder(
	      "bcrypt", encoders);
	    passwordEncoder.setDefaultPasswordEncoderForMatches(defaultEncoder);
	 
	    return passwordEncoder;
    }
	
	@Bean
	public ApplicationListener<AuthenticationSuccessEvent>
	  authenticationSuccessListener( PasswordEncoder encoder) {
	    return (AuthenticationSuccessEvent event) -> {
	        Authentication auth = event.getAuthentication();
	 
	        if (auth instanceof UsernamePasswordAuthenticationToken
	          && auth.getCredentials() != null) {
	 
	            CharSequence clearTextPass = (CharSequence) auth.getCredentials();
	            String newPasswordHash = encoder.encode(clearTextPass);
	            
	            // [...] Update user's password
	            simpleSQLManager.passwordMigrationByUsername(newPasswordHash, auth.getName());
	 
	            ((UsernamePasswordAuthenticationToken) auth).eraseCredentials();
	        }
	    };
	}

}
