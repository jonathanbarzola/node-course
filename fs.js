const fs = require('fs');

const first = fs.readFileSync('./data/first.txt', 'utf-8');
const second = fs.readFileSync('./data/second.txt');

console.log(first);
console.log(second.toString());

const title = 'Este contenido se ha añadido';

fs.writeFileSync('./data/four.txt', title, {
    flag: 'a'
});


/* 
    Este módulo 'fs' sirve para leer, escribir archivos.

    - fs.readFileSync(): dada determinada ruta te devuelve su contenido.

    - fs.writeFileSync(): dada una ruta crea un archivo, y también añade texto :0, ademas si no quieres sobre escribir le puedes añadir <<flag: 'a'>> como un objeto

*/