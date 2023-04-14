package com.example.vet.controllers;

import com.example.vet.entity.Doctor;
import com.example.vet.repo.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class DoctorController {
    @Autowired
    private DoctorRepository doctorRepository;

    @PostMapping("/new_doc")
    Doctor newDoctor (@RequestBody Doctor newDoctor) {
        return doctorRepository.save(newDoctor);
    }

    @GetMapping("/doctors")
    List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }
}
