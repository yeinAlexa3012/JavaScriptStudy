/*Dado el array:
Haz una función que:
- Agregue "mango" al final.
- Elimine la primera fruta.
- Devuelva el array final. */

const frutas = ["manzana", "pera", "uva", "sandia", "melon"];
frutas.push("mango");
frutas.shift();
console.log(frutas);

/*Dado el array:
Determina:
- Si existe algún número mayor a 18 usando.
    Debe imprimir:
    Si existe
    o
    No existe */

const numeros = [5, 10, 15, 20, 25];

const existe = numeros.some((num) => num > 18);
if (existe) {
  console.log("Existe");
} else {
  console.log("No existe");
}

/*Dado el array:
Verifica si todas las palabras tienen 3 letras. */

const palabras = ["sol", "mar", "pan", "pez"];

const Tienen3Letras = palabras.every((pal) => pal.length === 3);

if (Tienen3Letras) {
  console.log("Todas tienen 3 palabras");
} else {
  console.log("No todas tienen 3 palabras");
}

/*Dado el array:
Obtén el primer número positivo. */

const numeros1 = [-10, -5, -3, 4, 8];
const NumeroPositivo = numeros1.find((num) => num > 0);
console.log("El primer numero positivo es", NumeroPositivo);

/*Crea una función:
Debe:
Quitar el primer elemento.
Agregarlo al final.
Devolver el array resultante. */

const numeros2 = [1, 2, 3, 4];

const moverPrimeroAlFinal = (array) => {
  let PrimerNumero = array.shift();
  array.push(PrimerNumero);

  return array;
};

console.log(moverPrimeroAlFinal(numeros2));

//Obtén el primer producto que cueste menos de 100 e imprime su nombre.

const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 80 },
  { nombre: "Monitor", precio: 300 },
];

const MenosDeCien = (array) => {
  const Primero = array.findIndex((pri) => pri.precio < 100);
  return `El primer producto que vale menos de 100 es, ${array[Primero].nombre}`;
};

console.log(MenosDeCien(productos));

//Obtén la posición de la primera persona mayor de edad.

const edades = [14, 16, 20, 25, 17];

let posicion = edades.findIndex((ed) => ed > 18);

console.log("La edad de la primera persona mayor de edad es", edades[posicion]);

/*La función debe:
Recorrer el array.
Sumar únicamente los números impares.
Devolver el resultado. */

const edades1 = [14, 16, 20, 25, 17];

const sumarImpares = (numeros) => {
  let cont = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      continue;
    } else {
      cont += numeros[i];
    }
  }
  return cont;
};

console.log(sumarImpares(edades1));

/*Para cada pedido debes:
- Sacar el nombre del cliente.
- Agregar "bebida" al inicio del pedido.
- Agregar "postre" al final.
- Agregar nuevamente el nombre del cliente al final.
La función debe devolver el array con todos los pedidos procesados. */

let pedidos = [
  ["Ana", "pizza", "hamburguesa"],
  ["Luis", "tacos"],
  ["Maria", "ensalada", "sopa"],
];

const Pedidos = (array) => {
  for (let i = 0; i < array.length; i++) {
    const nombreCliente = array[i].shift();
    array[i].unshift("bebida");
    array[i].push("postre");
    array[i].push(nombreCliente);
  }
  return array;
};

console.log(Pedidos(pedidos));

//Crea una función que devuelva solo los estudiantes con promedio mayor a 80.

const estudiantes = [
  { nombre: "Ana", promedio: 90 },
  { nombre: "Luis", promedio: 55 },
  { nombre: "Carlos", promedio: 70 },
  { nombre: "Sofia", promedio: 95 },
];

const MejorPromedio = (array) => {
  let promediosMejores = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].promedio > 80) {
      promediosMejores.push(array[i].nombre);
    }
  }
  return promediosMejores;
};

console.log(MejorPromedio(estudiantes));

//Determina si existe alguna palabra con más de 7 letras.
const palabras1 = ["javascript", "html", "css", "python", "java"];

const MasLetras = (array) => {
  const Existe = array.some((ex) => ex.length > 7);
  if (Existe) {
    return `Existe`;
  } else {
    return `No existe`;
  }
};

console.log(MasLetras(palabras1));

/*Debes generar un nuevo array con objetos que tengan:
nombre
promedio
estado
Estados posibles:
<=60  -> Reprobado
61-85 -> Aceptable
>85   -> Excelente */

const estudiantes1 = [
  { nombre: "Ana", notas: [80, 90, 100] },
  { nombre: "Luis", notas: [40, 50, 60] },
  { nombre: "Sofia", notas: [95, 85, 92] },
];

const Promedio = (notas) => {
  const suma = notas.reduce((acumulador, contador) => acumulador + contador, 0);
  return suma / notas.length;
};

const Estado = (promedio) => {
  if (promedio <= 60) {
    return `Reprobado`;
  } else if (promedio > 61 && promedio <= 85) {
    return `Aceptable`;
  } else {
    return `Excelente`;
  }
};

const Reporte = (array) => {
  let nuevoArray = [];
  const promedio = Promedio(array.notas);
  const estado = Estado(promedio);
  nuevoArray.push = {
    nombre: array.nombre,
    promedio: promedio,
    estado: estado,
  };
  return nuevoArray;
};

estudiantes1.forEach((est) => {
  console.log(Reporte(est));
});

/*Debe:
- Calcular la suma de los números pares.
- Eliminar el último número del array.
- Agregar la suma al inicio.
- Devolver el array final. */

const edades2 = [14, 16, 20, 25, 17];

const procesarNumeros = (array) => {
  cont = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      cont += array[i];
    } else {
      continue;
    }
  }
  array.pop();
  array.unshift(cont);
  return array;
};

console.log(procesarNumeros(edades2));

/*Debe:
Unir los dos arrays.
Eliminar el primer elemento.
Agregar al final el doble del último número.
Devolver el array final. */

const array1 = [10, 20, 30, 40, 50];
const array2 = [5, 15, 25, 35, 45];

const fusionarArray = (a, b) => {
  const newArray = [...a, ...b];
  newArray.shift();
  const ultimo = newArray[newArray.length - 1];
  newArray.push(ultimo * 2);
  return newArray;
};

console.log(fusionarArray(array1, array2));
