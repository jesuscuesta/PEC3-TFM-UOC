import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'listado',
    loadChildren: () =>
      import('./pages/listado/listado.module').then((m) => m.ListadoModule),
  },
  {
    path: 'detalle',
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
