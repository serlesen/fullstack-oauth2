package com.sergio.oauth2.backend.controllers;

import com.sergio.oauth2.backend.dtos.MessageDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessagesController {

    @GetMapping("/message")
    public ResponseEntity<MessageDto> message(@AuthenticationPrincipal OAuth2User principal) {
        return ResponseEntity.ok(new MessageDto("Hi " + principal.getName()));
    }
}
