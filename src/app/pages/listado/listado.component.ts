import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'agri-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent {
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

  constructor(httpClient: HttpClient) {}

  // Configuración de Google Maps
  center = { lat: 40.2093876, lng: -3.580981 };
  zoom = 15;
  display?: google.maps.LatLngLiteral;
}
