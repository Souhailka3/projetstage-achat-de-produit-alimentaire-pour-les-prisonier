package com.dgapr.panier;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface PanierRepository extends CrudRepository<Panier, Integer> {

    @Query("select p from Panier p where p.typeStatus.type = 'PENDING' and p.utilisateur.id = 1")
    Optional<Panier> findPanierByStatusAndUser();
}