package com.example.vet.controllers;

import com.example.vet.entity.Visit;
import com.example.vet.exception.VisitNotFoundException;
import com.example.vet.repo.VisitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class VisitsController {
    @Autowired
    private VisitRepository visitRepository;

    @PostMapping("/new_visit")
    Visit newVisit(@RequestBody Visit newVisit) {
        return visitRepository.save(newVisit);
    }

    @GetMapping("/visits")
    List<Visit> getAllVisits() {
        return visitRepository.findAll();
    }

    @GetMapping("/visit/{id}")
    Visit getVisitById(@PathVariable int id) {
        return visitRepository.findById(id)
                .orElseThrow(()->new VisitNotFoundException(id));
    }

    @PutMapping("/visit/{id}")
    Visit updateVisit(@RequestBody Visit newVisit, @PathVariable int id) {
        return visitRepository.findById(id)
                .map(visit -> {
                    visit.setVisitDate(newVisit.getVisitDate());
                    visit.setVisitSymptoms(newVisit.getVisitSymptoms());
                    visit.setTestResults(newVisit.getTestResults());
                    visit.setVisitNumber(newVisit.getVisitNumber());
                    visit.setPatient_PatientCode((newVisit.getPatient_PatientCode()));
                    visit.setDrug_DrugCode(newVisit.getDrug_DrugCode());
                    visit.setDiagnosis_DiagnosisCode(newVisit.getDiagnosis_DiagnosisCode());
                    visit.setDoctor_DoctorCode(newVisit.getDoctor_DoctorCode());
                    return visitRepository.save(visit);
                }).orElseThrow(()->new VisitNotFoundException(id));
    }

    @DeleteMapping("/visit/{id}")
    String deleteVisit(@PathVariable int id) {
        if(!visitRepository.existsById(id)){
            throw new VisitNotFoundException(id);
        }
        visitRepository.deleteById(id);
        return "Visit with id " + id + " has been deleted";
    }
}
