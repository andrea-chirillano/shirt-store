package com.shirtstore.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class PokeApiController {

    @GetMapping("/pokemon/{nombre}")
    public Pokemon obtenerPokemon(@PathVariable String nombre) {
        final String url = "https://pokeapi.co/api/v2/pokemon/" + nombre.toLowerCase();
        RestTemplate restTemplate = new RestTemplate();
        Pokemon pokemon = restTemplate.getForObject(url, Pokemon.class);
        return pokemon;
    }

    public static class Pokemon {
        private int id;
        private String name;

        // Necesitas los getters y setters para que RestTemplate pueda deserializar los datos JSON
        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
}

