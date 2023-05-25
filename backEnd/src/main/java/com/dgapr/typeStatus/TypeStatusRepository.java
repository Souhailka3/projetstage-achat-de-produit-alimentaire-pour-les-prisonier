package com.dgapr.typeStatus;

import org.springframework.data.repository.CrudRepository;

import com.dgapr.typeStatus.TypeStatusRepository;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface TypeStatusRepository extends CrudRepository<TypeStatus, Integer> {

}