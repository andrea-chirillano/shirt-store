package com.shirtstore.service;

import com.shirtstore.model.Catalogue;
import com.shirtstore.repository.CatalogueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatalogueService {

    @Autowired
    private CatalogueRepository catalogueRepository;

    public List<Catalogue> getAllCatalogues() {
        return catalogueRepository.findAll();
    }

    @SuppressWarnings("null")
    public Catalogue addCatalogue(Catalogue catalogue) {
        // Puedes agregar lógica adicional antes de guardar, si es necesario
        return catalogueRepository.save(catalogue);
    }

    // Otros métodos según las operaciones que necesites
}
