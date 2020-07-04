# AplicacionesInteractivas_Back

# Descripción

  - El siguiente repositorio corresponde al backend de la materia Aplicaciones Interactivas dictada en [UADE](https://www.uade.edu.ar/facultad-de-ingenieria-y-ciencias-exactas/) (Universidad Argentina de la Empresa) 
  - El frontend que hace uso de esta api es la siguiente: haga clic [aquí](https://github.com/LaggerP/AplicacionesInteractivas_Front_appMatematica) para entrar al repositorio del frontend

### Instalación

**AplicacionesInteractivas_Back_mate requires [Node.js](https://nodejs.org/) to run.**

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ npm run nodemon 
```

### Creación DB tables

```sh
$ sequelize db:migrate
```

### Multiplicacion - Juego

Se debe importar el archivo tablaMultiplicacionJuegos.csv en la tabla **multiplicacionjuegos** para crear los juegos de forma mas rápida, ya que hace uso de imagenes a través de urls.
