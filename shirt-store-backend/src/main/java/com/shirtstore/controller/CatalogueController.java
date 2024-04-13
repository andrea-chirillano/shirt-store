package com.shirtstore.controller;

import com.shirtstore.model.Catalogue;
import com.shirtstore.service.CatalogueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/catalogue")
public class CatalogueController {

    @Autowired
    private CatalogueService catalogueService;

    @GetMapping("/all")
    public ResponseEntity<List<Catalogue>> getAllCatalogues() {
        List<Catalogue> catalogues = catalogueService.getAllCatalogues();
        return new ResponseEntity<>(catalogues, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Catalogue> addCatalogue(@RequestBody Catalogue catalogue) {
        Catalogue addedCatalogue = catalogueService.addCatalogue(catalogue);
        return new ResponseEntity<>(addedCatalogue, HttpStatus.CREATED);
    }

    // Otros métodos según las operaciones que necesites

}
