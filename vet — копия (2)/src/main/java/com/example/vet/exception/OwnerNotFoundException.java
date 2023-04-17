package com.example.vet.exception;

public class OwnerNotFoundException extends RuntimeException {
    public OwnerNotFoundException(int id) {super("Looks like owner #" + id + " does not exist...");}
}
