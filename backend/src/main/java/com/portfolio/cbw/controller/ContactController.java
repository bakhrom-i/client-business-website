package com.portfolio.cbw.controller;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactController {

    @PostMapping
    public ResponseEntity<Void> submit(@Valid @RequestBody ContactRequest req) {
        // TODO: persist to DB and dispatch email via JavaMailSender
        return ResponseEntity.accepted().build();
    }

    public record ContactRequest(
            @NotBlank String name,
            @Email @NotBlank String email,
            @NotBlank String message
    ) {}
}
