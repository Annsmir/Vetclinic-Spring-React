package com.example.vet.repo;

import com.example.vet.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByPhone(String phone);
    User findUserById(Long id);
}