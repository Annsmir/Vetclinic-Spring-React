package com.example.vet.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.Valid;
import java.util.Date;

@Entity
@Table(name="patient")
@Getter
@Setter
public class Patient {
    @Id
    @Column(name="PatientCode")
    private int PatientCode;

    @Column(name = "PatientName")
    private String PatientName;
    @Column(name = "PatientBirthday")
    private String PatientBirthday;
    @Column(name = "PatientCardNumber")
    private int PatientCardNumber;
    @Column(name = "PatientBreed")
    private String PatientBreed;
    @Column(name = "PatientSex")
    private String PatientSex;

    @Valid
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "owner_owner_code")
    private Owner OwnerOwnerCode;

    @Valid
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "animal_animal_category")
    private Animal AnimalAnimalCategory;

    public int getPatientCode() {
        return PatientCode;
    }
    public void setPatientCode(int PatientCode) { this.PatientCode = PatientCode; }

    public String getPatientName() { return PatientName; }
    public void  setPatientName(String PatientName) { this.PatientName = PatientName;}

    public String getPatientBirthday() {return  PatientBirthday;}
    public void setPatientBirthday(String PatientBirthday) {this.PatientBirthday = PatientBirthday;}

    public int getPatientCardNumber() { return PatientCardNumber;}
    public void setPatientCardNumber(int PatientCardNumber) {this.PatientCardNumber = PatientCardNumber;}

    public String getPatientBreed() {return PatientBreed;}
    public void setPatientBreed (String PatientBreed) {this.PatientBreed = PatientBreed;}

    public String getPatientSex() {return PatientSex;}
    public void setPatientSex(String PatientSex) {this.PatientSex = PatientSex;}

    public Owner getOwnerOwnerCode() {return OwnerOwnerCode;}
    public void setOwnerOwnerCode(Owner OwnerOwnerCode) { this.OwnerOwnerCode = OwnerOwnerCode;}

    public Animal getAnimalAnimalCategory() {return AnimalAnimalCategory;}
    public void setAnimalAnimalCategory(Animal AnimalAnimalCategory) {this.AnimalAnimalCategory = AnimalAnimalCategory;}

    public Patient() {
    }

}
