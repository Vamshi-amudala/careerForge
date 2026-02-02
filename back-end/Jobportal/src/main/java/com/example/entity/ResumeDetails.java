package com.example.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "resume_details")
public class ResumeDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(name = "data", length = 10000000)
    private byte[] data;

    @Column(name = "file_name")
    private String fileName;

    @Column(name = "content_type")
    private String contentType;
}
