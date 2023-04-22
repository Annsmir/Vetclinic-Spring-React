package com.example.vet.entity;

import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "speciality")
@Getter
@Setter
public class Speciality {
    @Id
    @Column(name="speciality_code")
    private int SpecialityCode;

    @Column(name = "speciality_name")
    private String SpecialityName;

    public Speciality() {
    }

    public Speciality(String SpecialityName) {
        this.SpecialityName = SpecialityName;
    }

}
