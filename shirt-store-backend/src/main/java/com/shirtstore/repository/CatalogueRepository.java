package com.shirtstore.repository;

import com.shirtstore.model.Catalogue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CatalogueRepository extends JpaRepository<Catalogue, Long> {
    
}
