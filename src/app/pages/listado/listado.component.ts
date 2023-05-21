import { Component } from '@angular/core';

@Component({
  selector: 'agri-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent {

  listProducts = [{
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 1000,
    image: 'https://picsum.photos/200/300',
    valoracion: 4
  },{
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 1000,
    image: 'https://picsum.photos/200/300',
    valoracion: 4
  }];

}
