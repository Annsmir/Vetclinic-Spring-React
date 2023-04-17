package com.example.vet.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "owner")
@Getter
@Setter

public class Owner {
    @Id
    @Column(name="owner_code")
    private int OwnerCode;

    @Column(name = "owner_name")
    private String OwnerName;

    @Column(name = "owner_telephone")
    private String OwnerTelephone;

    public int getOwnerCode() {return OwnerCode;}
    public void setOwnerCode(int OwnerCode) {this.OwnerCode = OwnerCode;}

    public String getOwnerName() {return OwnerName;}
    public void setOwnerName(String OwnerName) {this.OwnerName = OwnerName;}

    public String getOwnerTelephone() {return OwnerTelephone;}
    public void setOwnerTelephone(String OwnerTelephone) {this.OwnerTelephone = OwnerTelephone;}

    public Owner() {
    }

}
