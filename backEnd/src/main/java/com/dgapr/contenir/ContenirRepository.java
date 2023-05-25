package com.dgapr.contenir;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface ContenirRepository extends CrudRepository<Contenir, Integer> {

    @Query("select c from Contenir c where c.produit.id = ?1 and c.panier.id = ?2")
    Optional<Contenir> findByProduitIdAndPanierId(Integer idProduit, Integer idpanier);

    @Query("select c from Contenir c where c.panier.typeStatus.type = 'PENDING' and c.panier.utilisateur.id = ?1")
    Iterable<Contenir> getPendingCart(Integer idUser);

    @Query("select c from Contenir c where c.panier.id = ?1 and c.panier.utilisateur.id = 1")
    Iterable<Contenir> getValidCart(Integer idPanier);

}