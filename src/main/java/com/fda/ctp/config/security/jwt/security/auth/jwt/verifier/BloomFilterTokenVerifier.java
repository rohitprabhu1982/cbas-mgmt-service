package com.fda.ctp.config.security.jwt.security.auth.jwt.verifier;


import org.springframework.stereotype.Component;


@Component
public class BloomFilterTokenVerifier implements TokenVerifier {
    @Override
    public boolean verify(String jti) {
        return true;
    }
}
