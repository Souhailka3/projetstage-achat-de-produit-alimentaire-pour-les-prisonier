package com.dgapr.typeStatus;


import java.util.Set;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.dgapr.panier.Panier;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Entity // This tells Hibernate to make a table out of this class
@Data
public class TypeStatus {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Integer id;

  private String type;

  public TypeStatus(){
  }

  public TypeStatus(Integer id){
    this.id = id;
  }

  @OneToMany (mappedBy = "typeStatus",fetch = FetchType.LAZY)
  private Set<Panier> panier;
}