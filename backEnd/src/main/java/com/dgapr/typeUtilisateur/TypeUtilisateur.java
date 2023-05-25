package com.dgapr.typeUtilisateur;


import java.util.Set;

import com.dgapr.utilisateur.Utilisateur;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity // This tells Hibernate to make a table out of this class
@Data
public class TypeUtilisateur {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Integer id;

  private String type;

  @OneToMany (mappedBy = "typeUtilisateur",fetch = FetchType.LAZY)
  private Set<Utilisateur> utilisateur;
}