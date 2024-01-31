import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {

  shirts = [
    {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      pokemonOverlaySrc: '../../assets/images/pokemons/pikachu.png',
      name: 'Shirt Pikachu',
      description: 'Shirt 1.',
      price: '3.99',
      width: 200,
      height: 200,
      widthPokemon: 75,
      heightPokemon: 75,
      color: 'white'
    },
    {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      pokemonOverlaySrc: '../../assets/images/pokemons/charmander.png',
      name: 'Shirt Charmander',
      description: 'Shirt 2.',
      price: '3.99',
      width: 200,
      height: 200,
      widthPokemon: 70,
      heightPokemon: 70,
      color: 'white'
    },
    {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      pokemonOverlaySrc: '../../assets/images/pokemons/squirtle.png',
      name: 'Shirt Squirtle',
      description: 'Shirt 3.',
      price: '3.99',
      width: 200,
      height: 200,
      widthPokemon: 75,
      heightPokemon: 75,
      color: 'white'
    },
    {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      pokemonOverlaySrc: '../../assets/images/pokemons/bulbasur.png',
      name: 'Shirt Bulbasaur',
      description: 'Shirt 4.',
      price: '3.99',
      width: 200,
      height: 200,
      widthPokemon: 60,
      heightPokemon: 60,
      color: 'white'
    },
    {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      pokemonOverlaySrc: '../../assets/images/pokemons/eevee.png',
      name: 'Shirt Eevee',
      description: 'Shirt 5.',
      price: '3.99',
      width: 200,
      height: 200,
      widthPokemon: 95,
      heightPokemon: 75,
      color: 'white'
    },
    {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      pokemonOverlaySrc: '../../assets/images/pokemons/sylveon.png',
      name: 'Shirt Syleon',
      description: 'Shirt 5.',
      price: '3.99',
      width: 200,
      height: 200,
      widthPokemon: 70,
      heightPokemon: 80,
      color: 'white'
    },
    {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      pokemonOverlaySrc: '../../assets/images/pokemons/jolteon.png',
      name: 'Shirt Jolteon',
      description: 'Shirt 6.',
      price: '3.99',
      width: 200,
      height: 200,
      widthPokemon: 90,
      heightPokemon: 90,
      color: 'white'
    },
    {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      pokemonOverlaySrc: '../../assets/images/pokemons/flareon.png',
      name: 'Shirt Flareon',
      description: 'Shirt 7.',
      price: '3.99',
      width: 200,
      height: 200,
      widthPokemon: 90,
      heightPokemon: 90,
      color: 'white'
    },
    {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      pokemonOverlaySrc: '../../assets/images/pokemons/vaporeon.png',
      name: 'Shirt Vaporeon',
      description: 'Shirt 8.',
      price: '3.99',
      width: 200,
      height: 200,
      widthPokemon: 90,
      heightPokemon: 90,
      color: 'white'
    },
    {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      pokemonOverlaySrc: '../../assets/images/pokemons/leafeon.png',
      name: 'Shirt Leafeon',
      description: 'Shirt 9.',
      price: '3.99',
      width: 200,
      height: 200,
      widthPokemon: 90,
      heightPokemon: 90,
      color: 'white'
    },
    {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      pokemonOverlaySrc: '../../assets/images/pokemons/glaceon.png',
      name: 'Shirt Glaceon',
      description: 'Shirt 10.',
      price: '3.99',
      width: 200,
      height: 200,
      widthPokemon: 95,
      heightPokemon: 90,
      color: 'white'
    },
    {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      pokemonOverlaySrc: '../../assets/images/pokemons/espeon.png',
      name: 'Shirt Espeon',
      description: 'Shirt 11.',
      price: '3.99',
      width: 200,
      height: 200,
      widthPokemon: 90,
      heightPokemon: 90,
      color: 'white'
    },
    {
      imageSrc: '../../assets/images/shirts/white-tshirt.png',
      pokemonOverlaySrc: '../../assets/images/pokemons/umbreon.png',
      name: 'Shirt Umbreon',
      description: 'Shirt 12.',
      price: '3.99',
      width: 200,
      height: 200,
      widthPokemon: 90,
      heightPokemon: 90,
      color: 'white'
    }
  ];

  currentIndex = 0;

  get visibleShirts() {
    const startIndex = this.currentIndex;
    const endIndex = this.currentIndex + 4; 
    return this.shirts.slice(startIndex, endIndex);
  }

  moveLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  moveRight() {
    if (this.currentIndex < this.shirts.length - 4) { 
      this.currentIndex++;
    }
  }

  changeColor(color: string, i: number) {

    if (this.visibleShirts.length > 0) {
      // Actualiza la imagen de la camiseta con el fondo correspondiente al color seleccionado
      this.visibleShirts[i].imageSrc = `../../assets/images/shirts/${color}-tshirt.png`;
    }
  }

}