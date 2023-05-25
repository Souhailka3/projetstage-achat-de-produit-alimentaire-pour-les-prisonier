package com.dgapr.panier;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dgapr.typeStatus.TypeStatusRepository;
import com.dgapr.utilisateur.UtilisateurRepository;

@Service
public class PanierService {
    @Autowired
    private PanierRepository panierRepository;

    @Autowired
    private TypeStatusRepository typeStatusRepository;

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    public Panier createOrGetPanier() {
        Panier panier;
        Optional<Panier> panierOptional = panierRepository.findPanierByStatusAndUser();
        if (panierOptional.isPresent()) {
            return panierOptional.get();
        } else {
            panier = new Panier();
            panier.setPrixtotal(0.0);
            panier.setTypeStatus(typeStatusRepository.findById(2).get());
            panier.setUtilisateur(utilisateurRepository.findById(1).get());
            panierRepository.save(panier);
        }
        return panier;
    }
}
