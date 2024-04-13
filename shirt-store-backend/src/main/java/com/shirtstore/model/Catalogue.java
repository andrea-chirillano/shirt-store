package com.shirtstore.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Catalogue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @SuppressWarnings("unused")
    private String name;
    @SuppressWarnings("unused")
    private Float price;
    // Otros campos y getters/setters
}
