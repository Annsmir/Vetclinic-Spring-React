package com.example.vet.controllers;

import com.example.vet.entity.Patient;
import com.example.vet.repo.PatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PatientController {
    @Autowired
    private PatientRepo patientRepo ;

    @PostMapping("/new_patient")
    Patient newPatient (@RequestBody Patient newPatient) {
        return patientRepo.save(newPatient);
    }

    @GetMapping("/patients")
    List<Patient> getAllPatients() {
        return patientRepo.findAll();
    }
}
