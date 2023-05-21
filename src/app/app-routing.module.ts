import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'listado',
    loadChildren: () =>
      import('./pages/listado/listado.module').then((m) => m.ListadoModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./pages/detalle/detalle.module').then((m) => m.DetalleModule),
  },
  {
    path: 'vendedor',
    loadChildren: () =>
      import('./pages/vendedor/vendedor.module').then((m) => m.VendedorModule),
  },
];

// Añadir los guard y sección para el vendedor
// Añadir pasar parámetro por la ruta en el detalle

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
