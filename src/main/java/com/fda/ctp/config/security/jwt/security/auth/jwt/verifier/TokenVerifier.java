package com.fda.ctp.config.security.jwt.security.auth.jwt.verifier;


public interface TokenVerifier {
    public boolean verify(String jti);
}
