package com.example.vet.exception;

public class VisitNotFoundException extends RuntimeException{
    public VisitNotFoundException(int id) {
        super("Looks like visit #" + id + " does not exist...");
    }

}
