package com.example.vet.controllers;


import com.example.vet.entity.Diagnosis;
import com.example.vet.repo.DiagnosisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class DiagnosisController {
    @Autowired
    private DiagnosisRepository diagnosisRepository;

    @PostMapping("/new_diagnosis")
    Diagnosis newDiagnosis (@RequestBody Diagnosis newDiagnosis) {
        return diagnosisRepository.save(newDiagnosis);
    }

    @GetMapping("/diagnoses")
    List<Diagnosis> getAllDiagnosis() {
        return diagnosisRepository.findAll();
    }
}
