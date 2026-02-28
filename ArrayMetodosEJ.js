/* Ejemplo 1
En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función 
procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:

El primer elemento lo sacamos del array, ya que es el nombre del cliente.
Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
Después añadimos al final del array el nombre del usuario que sacamos antes.
Recuerda que debes devolver el array modificado: */

function procesarPedido(pedido) {
  const nombreCliente = pedido.shift() // sacar y guardar el primero
  pedido.unshift('bebida')             // agregar al inicio
  pedido.push(nombreCliente)           // agregar al final
  return pedido                         // devolver el array
}

/*Ejemplo 2
Dado este array:
const animales = ["perro", "gato", "conejo"]
Haz lo siguiente:
- Agrega "loro" al final.
- Elimina el último elemento.
- Agrega "hamster" al inicio.
- Muestra el array final en consola.*/

const animales = ["perro", "gato", "conejo"]

animales.push('loro')
animales.pop()
animales.unshift('hamster')

console.log(animales)

/*Ejemplo 3
Completa la función para que elimine el primer elemento y lo devuelva: */

function sacarPrimero(lista) {
   lista.shift()
   return lista
}

console.log(sacarPrimero(["rojo", "azul", "verde"]))

/*Ejemplo 4
Dado el siguiente array:
Realiza las operaciones necesarias para:
- Agregar "amarillo" al final.
- Eliminar el último elemento.
- Agregar "negro" al inicio.
- Mostrar el array final en consola. */

const colores = ["rojo", "verde", "azul"]

colores.push('amarillo')
colores.pop()
colores.unshift('negro')

console.log(colores)

/*Ejemplo 5
Crea una función llamada eliminarPrimero que reciba un array y:
- Elimine el primer elemento.
- Devuelva el elemento eliminado.
- Ejemplo de uso:
- eliminarPrimero(["uno", "dos", "tres"]) */

const EliminarPrimero = (lista) =>{
    const elementoEliminado = lista.shift()
    return elementoEliminado
}

console.log(EliminarPrimero(["uno", "dos", "tres"]))

/*Ejemplo 6
Dado los Arrays
Une ambos arrays en uno solo y guárdalo en una nueva variable. Luego muéstralo en consola. */

const numeros1 = [10, 20]
const numeros2 = [30, 40]

const allNumbersArray = [...numeros1,...numeros2]
console.log(allNumbersArray)

/*Ejemplo 7
Crea una función llamada prepararCarrito que:
- Reciba un array de productos.
- Agregue "oferta" al inicio.
- Agregue "fin" al final.
- Devuelva el array modificado.
 */

const PrepararCarrito = (lista) =>{
    lista.unshift('oferta')
    lista.push('fin')
    return lista
}

console.log(PrepararCarrito(['Papas','Arroz','Leche']))

/*Ejemplo 8
Crea una función moverUltimoAlInicio que:
- Reciba un array.
- Quite el último elemento.
- Lo agregue al inicio.
- Devuelva el array resultante. */

const MoverUltimoAlInicio = (lista) =>{
    const ultimoElemento = lista.pop()
    lista.unshift(ultimoElemento)
    return lista
}

console.log(MoverUltimoAlInicio(['amarillo','azul','rojo','verde']))

/*Ejercicio 9
Crea una función procesarFila que:
- Reciba un array de personas.
- Saque el primer elemento y lo guarde.
- Agregue "nuevo" al final.
- Vuelva a agregar la persona que sacaste al final.
- Retorne el array final.
*/

const personas = ['Liliana', 'Jhony', 'Margarita', 'Janeth']
const procesarFila = (lista) =>{
      const primerElemento = lista.shift()
      lista.push('nuevo')
      lista.push(primerElemento)
      return lista
}

console.log(procesarFila(personas))

