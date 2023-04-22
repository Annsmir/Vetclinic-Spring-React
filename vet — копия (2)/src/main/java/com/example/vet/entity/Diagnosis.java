package com.example.vet.entity;

import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "diagnosis")
@Getter
@Setter
public class Diagnosis {
    @Id
    @Column(name="diagnosis_code")
    private int DiagnosisCode;

    @Column(name = "diagnosis_name")
    private String DiagnosisName;

    @Column(name = "drug_recommendation")
    private String DrugRecommendation;

    @Column(name = "treatment_recommendation")
    private String TreatmentRecommendation;

    public Diagnosis() {
    }

    public Diagnosis(String DiagnosisName, String DrugRecommendation, String TreatmentRecommendation) {
        this.DiagnosisName = DiagnosisName;
        this.DrugRecommendation = DrugRecommendation;
        this.TreatmentRecommendation = TreatmentRecommendation;
    }

}
