package com.example.config;

import org.springframework.boot.web.servlet.server.CookieSameSiteSupplier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CookieConfig {

    @Bean
    public CookieSameSiteSupplier cookieSameSiteSupplier() {
        // Forces SameSite=None for all cookies (required for cross-site)
        return CookieSameSiteSupplier.ofNone();
    }
}