package com.dgapr.contenir;

import com.dgapr.contenir.Contenir;
import com.dgapr.panier.Panier;
import com.dgapr.produit.Produit;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity // This tells Hibernate to make a table out of this class
public class Contenir {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private Integer quantite;

  @ManyToOne
  private Panier panier;

  @ManyToOne
  private Produit produit;

  public Contenir() {
  }

}