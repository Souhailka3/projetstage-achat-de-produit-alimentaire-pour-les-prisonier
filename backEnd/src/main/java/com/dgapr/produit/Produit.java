package com.dgapr.produit;

import java.util.Set;

import com.dgapr.categorie.Categorie;
import com.dgapr.contenir.Contenir;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity // This tells Hibernate to make a table out of this class
@Data
public class Produit {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String nomproduit;

  private String prix;

  private String img;

  @ManyToOne
  private Categorie categorie;

  @OneToMany(mappedBy = "produit", fetch = FetchType.LAZY)
  private Set<Contenir> contenir;
}
