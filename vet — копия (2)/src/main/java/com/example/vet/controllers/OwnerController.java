package com.example.vet.controllers;

import com.example.vet.entity.Owner;
import com.example.vet.repo.OwnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class OwnerController {
    @Autowired
    private OwnerRepository ownerRepository;

    @PostMapping("/new_owner")
    Owner newOwner (@RequestBody Owner newOwner) {
        return ownerRepository.save(newOwner);
    }

    @GetMapping("/owners")
    List<Owner> getAllOwners() {
        return ownerRepository.findAll();
    }
}
