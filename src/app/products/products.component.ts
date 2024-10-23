import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Camiseta Branca',
      price: 50.00,
      imageUrl: 'assets/camiseta-branca.jpg'
    },
    {
      id: 2,
      name: 'Calça Jeans',
      price: 120.00,
      imageUrl: 'assets/calca-jeans.jpg'
    },
    {
      id: 3,
      name: 'Meia',
      price: 50.00,
      imageUrl: 'assets/Meia.jpg'
    },
    {
      id: 4,
      name: 'Blusa de Frio',
      price: 1200.00,
      imageUrl: 'assets/blusa-frio.jpg'
    },
    {
      id: 5,
      name: 'regata',
      price: 79.00,
      imageUrl: 'assets/regata.jpg'
    },
    {
      id: 6,
      name: 'Tênis',
      price: 589.00,
      imageUrl: 'assets/Tenis.jpg'
    },
    
  ];
}
