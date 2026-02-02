package com.example.controller;

import java.io.IOException;
import java.util.Map;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.transaction.annotation.Transactional;

import com.example.entity.User;
import com.example.entity.ResumeDetails;
import com.example.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/resume")
@RequiredArgsConstructor
public class ResumeController {

    private final UserRepository userRepository;

    @PostMapping("/upload")
    @Transactional
    public ResponseEntity<?> uploadResume(@RequestParam("file") MultipartFile file, Authentication auth) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Resume file is missing");
        }

        String email;
        if (auth.getPrincipal() instanceof UserDetails) {
            email = ((UserDetails) auth.getPrincipal()).getUsername();
        } else {
            email = auth.getPrincipal().toString();
        }

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        try {
            ResumeDetails details = user.getResumeDetails();
            if (details == null) {
                details = new ResumeDetails();
                user.setResumeDetails(details);
            }

            details.setData(file.getBytes());
            details.setContentType(file.getContentType());
            details.setFileName(file.getOriginalFilename());

            // Set URL to download endpoint
            String resumeUrl = "/api/resume/download/" + user.getId();
            user.setResumeUrl(resumeUrl);

            userRepository.save(user);

            return ResponseEntity.ok(Map.of("resumeUrl", resumeUrl));
        } catch (IOException e) {
            return ResponseEntity.status(500).body("❌ Failed to upload resume: " + e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<?> getResumeLink(Authentication auth) {
        String email;
        if (auth.getPrincipal() instanceof UserDetails) {
            email = ((UserDetails) auth.getPrincipal()).getUsername();
        } else {
            email = auth.getPrincipal().toString();
        }

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return ResponseEntity.ok(Map.of("resumeUrl", user.getResumeUrl()));
    }

    @GetMapping("/download/{userId}")
    @Transactional(readOnly = true)
    public ResponseEntity<Resource> downloadResume(@PathVariable Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        ResumeDetails details = user.getResumeDetails();

        if (details == null || details.getData() == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(details.getContentType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + details.getFileName() + "\"")
                .body(new ByteArrayResource(details.getData()));
    }

    @GetMapping("/view/{filename}")
    public ResponseEntity<Resource> viewResume(@PathVariable String filename, Authentication auth) {
        String email;
        if (auth.getPrincipal() instanceof UserDetails) {
            email = ((UserDetails) auth.getPrincipal()).getUsername();
        } else {
            email = auth.getPrincipal().toString();
        }

        User user = userRepository.findByEmail(email).orElseThrow();
        return downloadResume(user.getId());
    }
}