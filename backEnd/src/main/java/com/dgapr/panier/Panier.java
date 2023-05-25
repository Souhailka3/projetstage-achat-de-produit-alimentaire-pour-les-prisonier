package com.dgapr.panier;

import java.util.Set;

import com.dgapr.contenir.Contenir;
import com.dgapr.typeStatus.TypeStatus;
import com.dgapr.utilisateur.Utilisateur;

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
public class Panier {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private Double prixtotal;

  public Panier() {
  }

  @ManyToOne
  private Utilisateur utilisateur;

  @OneToMany(mappedBy = "panier", fetch = FetchType.LAZY)
  private Set<Contenir> contenir;

  @ManyToOne
  private TypeStatus typeStatus;
}
