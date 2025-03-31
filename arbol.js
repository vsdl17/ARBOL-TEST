class Nodo 
{
    constructor(id, nombre) {
      this.id = id;
      this.nombre = nombre;
      this.hijos = [];
    }
  
    agregarHijo(nodo) {
      this.hijos.push(nodo);
    }
}
  
class ArbolCategorias 
{
    constructor() {
        this.raiz = null;
    }

    
    buscarNodo(id, nodo = this.raiz) 
    {
        if (!nodo) return null; 
        if (nodo.id === id) return nodo; 

        for (let hijo of nodo.hijos) 
        {
            let resultado = this.buscarNodo(id, hijo);
            if (resultado) return resultado;
        }

        return null;
    }

    agregarCategoria(id, nombre, idPadre = null) 
    {
        let nuevo_nodo = new Nodo(id, nombre);

        if (idPadre === null) 
        {
            // Si no tiene padre es la raiz
            if (this.raiz === null) 
            {
                this.raiz = nuevo_nodo;
            } 
            else 
            {
                console.log("ya existe raiz");
            }
        } 
        else 
        {
            let nodo_padre = this.buscarNodo(idPadre);
            if (nodo_padre) 
            {
                nodo_padre.agregarHijo(nuevo_nodo);
            } 
            else 
            {
                console.log(`no se encontro categoria con id ${idPadre}`);
            }
        }
    }

    // IMPRMIR
    imprimirArbol(nodo = this.raiz, nivel = 0) 
    {
        if (!nodo) return;

        console.log("  ".repeat(nivel) + "- " + nodo.nombre);

        for (let hijo of nodo.hijos) 
        {
            this.imprimirArbol(hijo, nivel + 1);
        }
    }
}
  
  module.exports = { Nodo, ArbolCategorias };
  