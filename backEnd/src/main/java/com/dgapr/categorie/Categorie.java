package com.dgapr.categorie;

import java.util.Set;

import com.dgapr.produit.Produit;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity // This tells Hibernate to make a table out of this class
public class Categorie {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String nomcategorie;

  private String img;

  @JsonIgnore
  @OneToMany(mappedBy = "categorie", fetch = FetchType.LAZY)
  private Set<Produit> produits;

}