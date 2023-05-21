import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'agri-product-star',
  templateUrl: './product-star.component.html',
  styleUrls: ['./product-star.component.scss']
})
export class ProductStarComponent {

  @Input() product: any = null;

  constructor(private router: Router) {}

  detail(id_product: number) {
    this.router.navigateByUrl('/detail/' + id_product);
  }

}
