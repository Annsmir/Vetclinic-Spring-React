package com.example.vet.entity;

import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "animal")
@Getter
@Setter
public class Animal {
    @Id
    @Column(name="animal_category")
    private int AnimalCategory;

    @Column(name = "animal_category_name")
    private String AnimalCategoryName;

    public Animal() {
    }

}
