package com.dgapr.utilisateur;

import com.dgapr.etablissement.Etablissement;
import com.dgapr.typeUtilisateur.TypeUtilisateur;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity // This tells Hibernate to make a table out of this class
@Data
public class Utilisateur {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String nom;

  private String prenom;

  private String email;

  private String mdp;

  @ManyToOne
  private Etablissement etablissement;

  @ManyToOne
  private TypeUtilisateur typeUtilisateur;

}
