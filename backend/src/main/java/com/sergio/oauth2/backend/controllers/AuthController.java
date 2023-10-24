package com.sergio.oauth2.backend.controllers;

import com.sergio.oauth2.backend.dtos.TokenDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @PostMapping("/auth")
    public ResponseEntity<TokenDto> auth(@RegisteredOAuth2AuthorizedClient OAuth2AuthorizedClient authorizedClient) {
        return ResponseEntity.ok(new TokenDto(authorizedClient.getAccessToken().getTokenValue()));
    }
}
