package com.example.vet.controllers;

import com.example.vet.entity.Drug;
import com.example.vet.repo.DrugRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class DrugController {
    @Autowired
    private DrugRepository drugRepository;

    @PostMapping("/new_drug")
    Drug newDrug (@RequestBody Drug newDrug) {
        return drugRepository.save(newDrug);
    }

    @GetMapping("/drugs")
    List<Drug> getAllDrugs() {
        return drugRepository.findAll();
    }
}
