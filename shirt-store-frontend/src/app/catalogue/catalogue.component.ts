import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {

  shirts = [
    {
      imageSrc: '../../assets/images/shirt-pikachu.jpg',
      name: 'Shirt Pikachu',
      description: 'Shirt 1.',
      price: '3.99',
      width: '200',
      height: '200'
    },
    {
      imageSrc: '../../assets/images/shirt-charmander.jpg',
      name: 'Shirt Charmander',
      description: 'Shirt 2.',
      price: '3.99',
      width: '200',
      height: '200'
    },
    {
      imageSrc: '../../assets/images/shirt-squirtle.jpg',
      name: 'Shirt Squirtle',
      description: 'Shirt 3.',
      price: '3.99',
      width: '200',
      height: '200'
    },
    {
      imageSrc: '../../assets/images/shirt-bulbasaur.jpg',
      name: 'Shirt Bulbasaur',
      description: 'Shirt 4.',
      price: '3.99',
      width: '200',
      height: '200'
    },
    {
      imageSrc: '../../assets/images/shirt-eevee.jpg',
      name: 'Shirt Eevee',
      description: 'Shirt 5.',
      price: '3.99',
      width: '200',
      height: '200'
    },
    {
      imageSrc: '../../assets/images/shirt-sylveon.jpg',
      name: 'Shirt Syleon',
      description: 'Shirt 5.',
      price: '3.99',
      width: '200',
      height: '200'
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
}