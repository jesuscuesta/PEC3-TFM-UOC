# Agrify

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## Pasos seguidos para la aplicación

- Instalamos y configuramos angular material v15 con el tema Indigo/Pink, incluyendo las animaciones. Además añadimos un componente de angular material para comprobar que funciona.

- Creamos secciones con el routing básico para la aplicación y los componentes orientativos

- Instalamos para [PWA](https://angular.io/guide/service-worker-getting-started) y añadimos la configuración básica, que posteriormente ampliaremos

- Instalamos [ngx-translate](https://github.com/ngx-translate/core) y añadimos la configuración básica para el multi-idioma

### Estructura proyecto

Siguiendo las buenas prácticas en cuanto a estructura del proyecto, y buscando que sea escalable, se ha creado:

- Core: contendrá todos los elementos comunes a toda la aplicación como interceptores, componentes globales, etc. Creados: footer, header, interceptor, servicio de login
- Pages: las páginas que contendrán los componentes: Creadas las secciones que crearemos en el MVP. Además ya se ha creado un routing temporal para las secciones. Posteriormente lo complementaremos para poder pasar las variables por routing y para securizar la sección privada del vendedor
- Shared: los elementos que se incluirán en las páginas y que podrían ser reutilizados en diferentes componentes, módulos y/o páginas. Por ahora hay solo un componente, pero posiblemente se crearán más posteriormente

### Lighthouse

Instalamos [Lighthouse](https://www.npmjs.com/package/lighthouse) y lo configuramos para medir el SEO.

Hemos añadido un comando para ejecutarlo con la web en local, y un posible comando para cuando tengamos desplegada la aplicación en producción.

```js
npm run seo
npm run seo:live
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
