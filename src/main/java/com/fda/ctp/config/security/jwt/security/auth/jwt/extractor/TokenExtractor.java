package com.fda.ctp.config.security.jwt.security.auth.jwt.extractor;

public interface TokenExtractor {
    String extract(String payload);
}
