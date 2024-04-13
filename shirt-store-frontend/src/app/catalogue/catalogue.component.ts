import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';
import { PokemonData } from '../interfaces/pokemon-data.interfaces';
import { NgxSpinnerService } from 'ngx-spinner';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})

export class CatalogueComponent implements OnInit  {
  pokemonNames: string[] = []; // Almacena los nombres de los Pokémon
  pokemonIDs: number[] = [];

  pokemonDataList: PokemonData[] = [];
  currentIndex = 0;
  showCatalogue = false;
  searchTerm: string = '';
  filteredPokemonDataList: PokemonData[] = [];

  shirts = [
    {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      description: 'Shirt 1.',
      price: '3.99',
      width: 200,
      height: 200,
      color: 'white', 
      id: 1
    }
  ]

  constructor(private pokeApiService: PokeApiService, private spinner: NgxSpinnerService, private searchService: SearchService) {}

  ngOnInit() {
    this.spinner.show();

    // Oculta la pantalla de carga después de 3 segundos
    setTimeout(() => {
        this.spinner.hide();
        this.showCatalogue = true;
    }, 5000);
    // Obtén la lista de todos los Pokémon
    this.pokeApiService.getAllPokemon().subscribe(data => {
      // Accede a la lista de resultados
      const pokemonList = data.results;

      // Recorre la lista de IDs de Pokémon
      pokemonList.forEach((pokemon: { url: { split: (arg0: string) => number[]; }; }) => {
        // Obtén la información de cada Pokémon por ID
        this.pokeApiService.getPokemonById(pokemon.url.split('/')[6]).subscribe(pokemonData => {
          if (this.pokemonDataList.length < 1000) {
            if (!this.pokemonDataList.includes(pokemonData.name)) {
              this.pokemonDataList.push({ name: pokemonData.name, id: pokemonData.id });
            }

          }
        });
      });
    });
    this.pokemonDataList.sort((a, b) => a.id - b.id);

    this.generateShirts(999);

  }

  moveLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  moveRight() {
    if (this.currentIndex < 1302 - 4) { 
      this.currentIndex++;
    }
  }

  changeColor(color: string, i: number) {

    if (this.visiblePokemonNames.length > 0) {
      
      // Actualiza la imagen de la camiseta con el fondo correspondiente al color seleccionado
      this.shirts[i].imageSrc = `../../assets/images/shirts/${color}-tshirt.png`;
    }
  }

  capitalizeFirstLetter(str: string): string {
    if (!str) return ''; // Verifica si la cadena es vacía o nula
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  generateShirts(count: number): void {
    // Define el struct base de la camiseta
    const baseShirt = {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      description: 'Shirt 1.',
      price: '3.99',
      width: 200,
      height: 200,
      color: 'white',
      id : 1
    };

    // Limpia la lista de camisetas
    this.shirts = [];

    // Genera camisetas según el tamaño de visiblePokemonNames o `count`
    for (let i = 0; i < count; i++) {
      // Crea una copia del struct base de la camiseta
      const newShirt = { ...baseShirt };
      
      // Puedes asignar otros valores específicos aquí, si es necesario
      
      // Añade la nueva camiseta a la lista de camisetas
      this.shirts.push(newShirt);
    }
  }

  getPokemonImageUrl(index: number): string {
    const pokemonId = index + 1; // Convertir el índice a ID de Pokémon
    // Retornar la URL de la imagen del Pokémon correspondiente
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
}

get visiblePokemonNames() {
  // Calcula el rango de índices que queremos mostrar
  const startIndex = this.currentIndex;
  const endIndex = this.currentIndex + 4;

  this.pokemonDataList.sort((a, b) => a.id - b.id);

  for (const pokemon of this.pokemonDataList) {
    // Verifica si el nombre ya existe en pokemonNames
    if (!this.pokemonNames.includes(pokemon.name)) {
        // Si el nombre no existe, lo añade a pokemonNames
        this.pokemonNames.push(pokemon.name);
    }

    // Verifica si el ID ya existe en pokemonIDs
    if (!this.pokemonIDs.includes(pokemon.id)) {
        // Si el ID no existe, lo añade a pokemonIDs
        this.pokemonIDs.push(pokemon.id);
    }
  }

  // Obtenemos el array de nombres desde pokemonNames dentro del rango especificado
  const names = this.pokemonNames.slice(startIndex, endIndex);

  // Creamos un array de índices que va desde startIndex hasta endIndex - 1
  const indices = this.pokemonIDs.slice(startIndex, endIndex);

  const combinedArray = names.map((name, idx) => ({
    name,
    index: indices[idx]
  }));

  return combinedArray;
}



}