import { Component, Input } from '@angular/core';

@Component({
  selector: 'agri-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.scss']
})
export class MainDetailComponent {
  @Input() product: any = {
    name: 'Zanahoria',
    description: 'Descripción de la zanahoria',
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
