const path = require("path");

const filePath =  path.join("/public", "dist", "/styles", "main.css");

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.parse(filePath));
console.log(path.resolve('dist'));

/*

# PATH

Este módulo te va a ayudar a identificar en que OS te encuentras va a ejecutar determinada lógica apartir de que sistema estemos.

Esto es muy importante ya que en Windows los directorios serían así: 
-> C:\Users\X\Desktop

Mientras que en Linux y Mac sería asi:
-> home/x/desktop

Métodos:

- path.sep: te ayuda a identificar el separador del OS.

- path.join('/public', 'dist', '/styles', 'main.css'): 
output: \public\dist\styles\main.css (Win32) 
convierte la ruta que le demos en una ruta válida dependiendo del OS.

- path.basename: devuelve el archivo base de una ruta.

- path.dirname: devuelve la ruta de los directorios sin archivo.

- path.parse: devuelve la ruta en un objeto.

- path.resolve: a partir de un archivo, devuelve la ruta completa dependiendo del OS.
*/
