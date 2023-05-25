package com.dgapr.etablissement;

import org.springframework.data.repository.CrudRepository;



// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface EtablissementRepository extends CrudRepository<Etablissement, Integer> {

}