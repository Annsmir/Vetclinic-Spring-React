package com.example.vet.exception;

public class PatientNotFoundException extends RuntimeException {
    public PatientNotFoundException(int id) {
        super("Looks like patient #" + id + " does not exist...");
    }
}
