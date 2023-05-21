import { Component } from '@angular/core';

@Component({
  selector: 'agri-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent {
  detailProduct = {
    name: 'Zanahoria',
    description:
      'Las zanahorias son una excelente fuente de nutrientes esenciales como vitamina A, vitamina K, vitamina C, vitamina B6, potasio y fibra. Su contenido de betacaroteno actúa como antioxidante, protegiendo contra el estrés oxidativo y reduciendo el riesgo de enfermedades crónicas. Además, la vitamina A presente en las zanahorias es fundamental para la salud ocular, manteniendo la retina en buen estado.',
    price: 20,
    image: 'https://picsum.photos/200/300',
    listImages: [
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
      'https://picsum.photos/200/300',
    ],
    valoracion: 3,
  };

  constructor() {
    this.detailProduct = {
      name: 'Zanahoria',
      description:
        'Las zanahorias son una excelente fuente de nutrientes esenciales como vitamina A, vitamina K, vitamina C, vitamina B6, potasio y fibra. Su contenido de betacaroteno actúa como antioxidante, protegiendo contra el estrés oxidativo y reduciendo el riesgo de enfermedades crónicas. Además, la vitamina A presente en las zanahorias es fundamental para la salud ocular, manteniendo la retina en buen estado.',
      price: 20,
      image: 'https://picsum.photos/200/300',
      listImages: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
      ],
      valoracion: 3,
    };
  }
}
