package com.example.vet.controllers;

import com.example.vet.entity.Owner;
import com.example.vet.exception.OwnerNotFoundException;
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

    @GetMapping("/owner/{id}")
    Owner getOwnerById(@PathVariable int id) {
        return ownerRepository.findById(id)
                .orElseThrow(()->new OwnerNotFoundException(id));
    }

    @PutMapping("/owner/{id}")
    Owner updateOwner(@RequestBody Owner newOwner, @PathVariable int id) {
        return ownerRepository.findById(id)
                .map(owner -> {
                    owner.setOwnerName(newOwner.getOwnerName());
                    owner.setOwnerTelephone(newOwner.getOwnerTelephone());
                    return ownerRepository.save(owner);
                }).orElseThrow(()->new OwnerNotFoundException(id));
    }

    @DeleteMapping("/owner/{id}")
    String deleteOwner(@PathVariable int id) {
        if(!ownerRepository.existsById(id)){
            throw new OwnerNotFoundException(id);
        }
        ownerRepository.deleteById(id);
        return "Owner with id " + id + " has been deleted";
    }
}
