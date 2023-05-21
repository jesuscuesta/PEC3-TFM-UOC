import { Component } from '@angular/core';

@Component({
  selector: 'agri-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss']
})
export class SimilarProductsComponent {
  listProducts = [
    {
      name: 'Zanahoria',
      description: 'Descripción de la zanahoria',
      price: 20,
      image: 'https://picsum.photos/200/300',
      valoracion: 3,
    },
    {
      name: 'Puerros',
      description: 'Descripción de los puerros',
      price: 30,
      image: 'https://picsum.photos/200/300',
      valoracion: 5,
    },
    {
      name: 'Maiz',
      description: 'Descripción del maiz',
      price: 50,
      image: 'https://picsum.photos/200/300',
      valoracion: 1,
    },
    {
      name: 'Zanahoria',
      description: 'Descripción de la zanahoria',
      price: 20,
      image: 'https://picsum.photos/200/300',
      valoracion: 2,
    },
    {
      name: 'Puerros',
      description: 'Descripción de los puerros',
      price: 30,
      image: 'https://picsum.photos/200/300',
      valoracion: 4,
    },
    {
      name: 'Maiz',
      description: 'Descripción del maiz',
      price: 50,
      image: 'https://picsum.photos/200/300',
      valoracion: 5,
    },
  ];
}
