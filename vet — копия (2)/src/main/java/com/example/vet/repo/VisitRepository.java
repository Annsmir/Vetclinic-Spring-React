package com.example.vet.repo;

import com.example.vet.entity.Visit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VisitRepository extends JpaRepository <Visit, Integer> {

}
