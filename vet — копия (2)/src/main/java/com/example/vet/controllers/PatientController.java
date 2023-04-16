package com.example.vet.controllers;

import com.example.vet.entity.Patient;
import com.example.vet.exception.PatientNotFoundException;
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

    @GetMapping("/patient/{id}")
    Patient getPatientById(@PathVariable int id) {
        return patientRepo.findById(id)
                .orElseThrow(()->new PatientNotFoundException(id));
    }

    @PutMapping("/patient/{id}")
    Patient updatePatient(@RequestBody Patient newPatient, @PathVariable int id) {
        return patientRepo.findById(id)
                .map(patient -> {
                    patient.setPatientName(newPatient.getPatientName());
                    patient.setPatientBirthday(newPatient.getPatientBirthday());
                    patient.setPatientCardNumber(newPatient.getPatientCardNumber());
                    patient.setPatientBreed(newPatient.getPatientBreed());
                    patient.setPatientSex((newPatient.getPatientSex()));
                    patient.setOwnerOwnerCode(newPatient.getOwnerOwnerCode());
                    patient.setAnimalAnimalCategory(newPatient.getAnimalAnimalCategory());
                    return patientRepo.save(patient);
                }).orElseThrow(()->new PatientNotFoundException(id));
    }

    @DeleteMapping("/patient/{id}")
    String deletePatient(@PathVariable int id) {
        if(!patientRepo.existsById(id)){
            throw new PatientNotFoundException(id);
        }
        patientRepo.deleteById(id);
        return "Patient with id " + id + " has been deleted";
    }
}
