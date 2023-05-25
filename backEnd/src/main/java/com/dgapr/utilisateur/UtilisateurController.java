package com.dgapr.utilisateur;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Controller // This means that this class is a Controller
@RequestMapping(path = "/utilisateur") // This means URL's start with /demo (after Application path)
public class UtilisateurController {
  @Autowired // This means to get the bean called userRepository
  // Which is auto-generated by Spring, we will use it to handle the data
  private UtilisateurRepository utilisateurRepository;

  @GetMapping(path = "/all")
  public @ResponseBody Iterable<Utilisateur> getAllUtilisateur() {
    // This returns a JSON or XML with the users
    return utilisateurRepository.findAll();
  }

}