package com.dgapr.contenir;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dgapr.panier.Panier;
import com.dgapr.panier.PanierService;
import com.dgapr.produit.Produit;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Controller // This means that this class is a Controller
@RequestMapping(path = "/contenir") // This means URL's start with /demo (after Application path)
public class ContenirController {
  @Autowired // This means to get the bean called userRepository
  private ContenirRepository contenirRepository;
  @Autowired
  private PanierService panierService;

  @PostMapping(value = "{action}/save", produces = MediaType.APPLICATION_JSON_VALUE)
  public @ResponseBody Contenir save(@PathVariable(value = "action") String action,
      @RequestBody Produit produit) {
    Panier panier = panierService.createOrGetPanier();
    Contenir contenir = new Contenir();
    Optional<Contenir> contenirOptional = contenirRepository.findByProduitIdAndPanierId(produit.getId(),
        panier.getId());
    if (contenirOptional.isPresent()) {
      contenir = contenirOptional.get();
      int quantity = contenir.getQuantite();
      if (action.equals("add")) {
        contenir.setQuantite(quantity + 1);
        contenirRepository.save(contenir);
      } else {
        if (quantity == 1)
          contenirRepository.delete(contenir);
        else {
          contenir.setQuantite(quantity - 1);
          contenirRepository.save(contenir);
        }
      }
    } else {
      contenir.setProduit(produit);
      contenir.setPanier(panier);
      contenir.setQuantite(1);
      contenirRepository.save(contenir);
    }
    return contenir;
  }

  @DeleteMapping(path = "/deleteProductCart/{id}")
  public @ResponseBody void deleteCart(@PathVariable(value = "id") int id) {
    Panier panier = panierService.createOrGetPanier();
    Optional<Contenir> contenirOptional = contenirRepository.findByProduitIdAndPanierId(id,
        panier.getId());
    if (contenirOptional.isPresent()) {
      contenirRepository.deleteById(contenirOptional.get().getId());
    }
  }

  @GetMapping(path = "/getPendingCart")
  public @ResponseBody Iterable<Contenir> getPendingCart() {
    return contenirRepository.getPendingCart(1);
  }

  @GetMapping(path = "/getValidCart/{id}")
  public @ResponseBody Iterable<Contenir> getValidCart(@PathVariable(value = "id") int id) {
    return contenirRepository.getValidCart(id);
  }

  @GetMapping(path = "/all")
  public @ResponseBody Iterable<Contenir> getAllContenir() {
    // This returns a JSON or XML with the users
    return contenirRepository.findAll();
  }
}