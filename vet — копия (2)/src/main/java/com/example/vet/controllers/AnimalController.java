package com.example.vet.controllers;


import com.example.vet.entity.Animal;
import com.example.vet.repo.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class AnimalController {
    @Autowired
    private AnimalRepository animalRepository;

    @PostMapping("/new_animal")
    Animal newAnimal (@RequestBody Animal newAnimal) {
        return animalRepository.save(newAnimal);
    }

    @GetMapping("/animals")
    List<Animal> getAllAnimals() {
        return animalRepository.findAll();
    }
}
