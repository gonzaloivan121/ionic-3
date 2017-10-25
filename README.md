# Ionic v3
![ionic](http://www.mindinventory.com/blog/wp-content/uploads/2017/04/ionic-3.jpg)

## ¡Bienvenido a mi aplicación en Ionic!

Me presento.

Mi nombre es Gonzalo, trabajo en *Atech, SL (Málaga)* y me dedico al desarrollo web y multiplataforma.

Esta app es sólo para probar diferentes propiedades y opciones dentro del mundo de Ionic y ÁngularJS, pero algún día espero llegar a publicar mi propia aplicación en la Google Play Store.

## Pequeño tutorial de instalación de Ionic 3:

Para empezar, debemos instalar NodeJS desde su [página oficial](https://nodejs.org/es/download/) y realizar la instalación (en este caso desde Windows).

Una vez terminada la instalación, creamos una carpeta donde guarar nuestros proyectos Ionic, instalamos las dependencias de Ionic y Cordova e inicializamos un nuevo proyecto.

**SE RECOMIENDA EJECUTAR EL CMD COMO ADMINISTRADOR**

```bash
md C:\ionic
cd C:\ionic
npm install -g ionic cordova
start NombreProyecto
```

Para ejecutar nuestro proyecto, hacemos `cd NombreProyecto` y ejecutamos:

```bash
ionic cordova platform add android
ionic serve
```

La primera línea solo será necesaria la primera vez que ejecutemos el proyecto.

## ¿Quieres probar mi App?
Si quieres probar el desarrollo de mi aplicación, debes copiar en la carpeta `..\src\pages` en contenido de mi carpeta `..\..\pages`.
Con eso debería bastar.

## Estructura de ficheros

Las vistas de cada página las encontraremos en `..\src\pages`. Normalmente trabajaremos en esta carpeta, aunque en algún momento necesitaremos utilizar las demás.

## SUERTE CON TU DESARROLLO EN IONIC
Os dejo [AQUÍ](https://www.youtube.com/playlist?list=PLYxzS__5yYQng-XnJhB21Jc7NW1OIaqct) una lista de reproducción de una serie de tutoriales gráficos en Ionic. Está en inglés, pero el acento se entiende perfectamente.

Por el contrario, si el inglés no es vuestro punto fuerte, os dejo con [OTRA](https://www.youtube.com/playlist?list=PLYPjmy5IVxT-7FV0uzpG2izFhGoE0Hq2y) lista de reproducción, esta vez en español.
