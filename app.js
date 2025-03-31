const { ArbolCategorias } = require("./arbol");

let arbol = new ArbolCategorias();

arbol.agregarCategoria(0, "bd"); 

arbol.agregarCategoria(1, "Mascotas", 0);
arbol.agregarCategoria(2, "Gato", 1);
arbol.agregarCategoria(3, "Perro", 1);
arbol.agregarCategoria(4, "Plantas", 0);
arbol.agregarCategoria(5, "Árbol", 4);
arbol.agregarCategoria(6, "Flores", 4); // tarea 2: Flores estaba tenia un padre que no correspodía (perro)
arbol.agregarCategoria(7, "Micu", 2);
arbol.agregarCategoria(8, "Sasy", 2);
arbol.agregarCategoria(9, "Fido", 3);
arbol.agregarCategoria(10, "Bobby", 3);
arbol.agregarCategoria(11, "Roble", 5);

// tarea 1
arbol.agregarCategoria(10, "Bigotes", 2); 
arbol.agregarCategoria(11, "Rex", 9); 

// tarea 3
console.log(">");
arbol.imprimirArbol();


