package com.dgapr.typeUtilisateur;

import org.springframework.data.repository.CrudRepository;

import com.dgapr.typeUtilisateur.TypeUtilisateurRepository;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface TypeUtilisateurRepository extends CrudRepository<TypeUtilisateur, Integer> {

}