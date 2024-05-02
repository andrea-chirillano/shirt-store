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
  pokemonNames: string[] = [];  
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

    setTimeout(() => {
        this.spinner.hide();
        this.showCatalogue = true;
    }, 5000);
    this.pokeApiService.getAllPokemon().subscribe(data => {
      const pokemonList = data.results;

      pokemonList.forEach((pokemon: { url: { split: (arg0: string) => number[]; }; }) => {
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

    if(!this.searchTerm) {
      this.generateShirts(999);
    } else {
      this.generateShirts(this.pokemonDataList.length);
    }

    
    this.searchService.currentSearchTerm.subscribe(term => {
      console.log(this.searchTerm, "searchTerm")
      this.searchTerm = term.trim().toLowerCase();
      console.log(this.searchTerm, "2")
      if (this.filterData() == true) {
        this.pokemonDataList = [];
        this.pokemonDataList = this.filteredPokemonDataList;
        console.log(this.pokemonDataList, "pokemonDataList")
      }
    });

  }

  filterData(): boolean {
    if (!this.searchTerm) {
      this.filteredPokemonDataList = this.pokemonDataList;
      return true;
    }
  
    this.filteredPokemonDataList = this.pokemonDataList.filter(pokemon => {
      console.log("filerData", pokemon.name.toLowerCase().includes(this.searchTerm) || pokemon.id.toString().includes(this.searchTerm))
      return pokemon.name.toLowerCase().includes(this.searchTerm) || pokemon.id.toString().includes(this.searchTerm);
    });

    this.pokemonDataList = this.filteredPokemonDataList;
  
    return this.filteredPokemonDataList.length > 0;
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
      
      this.shirts[i].imageSrc = `../../assets/images/shirts/${color}-tshirt.png`;
    }
  }

  capitalizeFirstLetter(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  generateShirts(count: number): void {
    const baseShirt = {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      description: 'Shirt 1.',
      price: '3.99',
      width: 200,
      height: 200,
      color: 'white',
      id : 1
    };

    this.shirts = [];

    for (let i = 0; i < count; i++) {
      const newShirt = { ...baseShirt };
      this.shirts.push(newShirt);
    }
  }

  getPokemonImageUrl(index: number): string {
    const pokemonId = index + 1;
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
}

get visiblePokemonNames() {
  const startIndex = this.currentIndex;
  const endIndex = this.currentIndex + 4;

  this.pokemonDataList.sort((a, b) => a.id - b.id);

  if (!this.searchTerm) {
    this.pokemonDataList = this.filteredPokemonDataList;
  }

  for (const pokemon of this.pokemonDataList) {
    if (!this.pokemonNames.includes(pokemon.name)) {
        this.pokemonNames.push(pokemon.name);
    }
    if (!this.pokemonIDs.includes(pokemon.id)) {
        this.pokemonIDs.push(pokemon.id);
    }
  }

  const names = this.pokemonNames.slice(startIndex, endIndex);

  const indices = this.pokemonIDs.slice(startIndex, endIndex);

  const combinedArray = names.map((name, idx) => ({
    name,
    index: indices[idx]
  }));

  return combinedArray;
}



}