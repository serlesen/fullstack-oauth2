package com.sergio.oauth2.backend.controllers;

import com.sergio.oauth2.backend.dtos.MessageDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PrivateController {

    @GetMapping("/private")
    public ResponseEntity<MessageDto> privateMessages(@AuthenticationPrincipal Jwt jwt) {
        return ResponseEntity.ok(new MessageDto("Hello " + jwt.getClaim("name")));
    }
}
