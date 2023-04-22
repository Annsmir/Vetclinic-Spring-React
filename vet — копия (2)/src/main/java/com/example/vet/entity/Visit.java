package com.example.vet.entity;

import lombok.Getter;
import lombok.Setter;

import jakarta.persistence.*;
import jakarta.validation.Valid;

@Entity
@Table(name="visit")
@Getter
@Setter
public class Visit {
    @Id
    @Column(name="VisitCode")
    private int VisitCode;

    @Column(name = "VisitDate")
    private String VisitDate;
    @Column(name = "VisitSymptoms")
    private String VisitSymptoms;
    @Column(name = "TestResults")
    private String TestResults;
    @Column(name = "VisitNumber")
    private int VisitNumber;

    @Valid
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "patient_patient_code")
    private Patient Patient_PatientCode;

    @Valid
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "drug_drug_code")
    private Drug Drug_DrugCode;

    @Valid
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "diagnosis_diagnosis_code")
    private Diagnosis Diagnosis_DiagnosisCode;

    @Valid
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "doctor_doctor_code")
    private Doctor Doctor_DoctorCode;

    public int getVisitCode() {
        return VisitCode;
    }

    public void setVisitCode(int VisitCode) {
        this.VisitCode = VisitCode;
    }

    public String getVisitDate(){
        return VisitDate;
    }

    public void setVisitDate(String VisitDate) {
        this.VisitDate = VisitDate;
    }

    public String getVisitSymptoms() {
        return VisitSymptoms;
    }

    public void setVisitSymptoms(String VisitSymptoms) {
        this.VisitSymptoms = VisitSymptoms;
    }

    public String getTestResults(){
        return TestResults;
    }

    public void setTestResults(String TestResults) {
        this.TestResults = TestResults;
    }

    public int getVisitNumber(){
        return VisitNumber;
    }

    public void setVisitNumber(int VisitNumber){
        this.VisitNumber = VisitNumber;
    }

    public Patient getPatient_PatientCode(){
        return Patient_PatientCode;
    }

    public void setPatient_PatientCode(Patient Patient_PatientCode){
        this.Patient_PatientCode = Patient_PatientCode;
    }

    public Drug getDrug_DrugCode(){
        return Drug_DrugCode;
    }

    public void setDrug_DrugCode(Drug Drug_DrugCode) {
        this.Drug_DrugCode = Drug_DrugCode;
    }

    public Diagnosis getDiagnosis_DiagnosisCode(){
        return Diagnosis_DiagnosisCode;
    }

    public void setDiagnosis_DiagnosisCode(Diagnosis Diagnosis_DiagnosisCode){
        this.Diagnosis_DiagnosisCode = Diagnosis_DiagnosisCode;
    }

    public Doctor getDoctor_DoctorCode(){
        return Doctor_DoctorCode;
    }

    public void setDoctor_DoctorCode (Doctor Doctor_DoctorCode) {
        this.Doctor_DoctorCode = Doctor_DoctorCode;
    }

    public Visit() {
    }

}
