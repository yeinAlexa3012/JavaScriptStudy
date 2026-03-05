/*Ejercicio 1 – Gestión de pedidos 
Crea una función procesarPedidos que:
Reciba un array de pedidos, cada pedido es un array donde:
El primer elemento es el nombre del cliente, Los demás son productos.
Debes:
    - Sacar el nombre.
    - Agregar "bebida" al inicio.
    - Agregar "postre" al final.
    - Volver a agregar el nombre al final.
    - Retornar un nuevo array con todos los pedidos procesados. */

let pedidos = [
  ["Ana", "arroz", "papa"],
  ["Luis", "leche", "huevos"],
  ["Jhony", "pan", "jugo"],
];

const ProcesarPedidos = (pedido) => {
  for (let i = 0; i < pedido.length; i++) {
    let nombreEliminado = pedido[i].shift();
    pedido[i].unshift("bebida");
    pedido[i].push("postre");
    pedido[i].push(nombreEliminado);
  }
  return pedido;
};

ProcesarPedidos(pedidos);

/*Ejercicio 2 – Mover extremos
 Crea una función intercambiarExtremos que:
    - Reciba un array.
    - Quite el primer elemento.
    - Quite el último elemento.
    - Agregue el último al inicio.
    - Agregue el primero al final.
    - Devuelva el array modificado.
*/

let arrayInt = [1, 2, 3, 4, 5];

const intercambiarExtremos = (array) => {
  let primerElemento = array.shift();
  let ultimoElemento = array.pop();
  array.push(primerElemento);
  array.unshift(ultimoElemento);
  return array;
};

intercambiarExtremos(arrayInt);

/*Ejercicio 3 – Reporte de estudiantes mejorado
Segun el Array estudiantes
Haz una función generarReportes que:
    - Calcule el promedio de cada estudiante.
    - Obtenga su estado (Reprobado, Aceptable, Excelente).
    - Retorne un nuevo array con objetos así:
{
  nombre: "",
  promedio: 0,
  estado: ""
} */

const estudiantes = [
  { nombre: "Ana", calificaciones: [80, 90, 100] },
  { nombre: "Luis", calificaciones: [50, 40, 60] },
  { nombre: "Sofia", calificaciones: [95, 85, 92] },
];

const CalcularPromedio = (calificacion) => {
  let suma = calificacion.reduce((ac, num) => ac + num, 0);
  return suma / calificacion.length;
};

const generarEstado = (estudiante) => {
  let promedio = CalcularPromedio(estudiante.calificaciones);
  if (promedio <= 60) {
    return "Reprobado";
  } else if (promedio <= 85) {
    return "Aceptable";
  } else {
    return "Excelente";
  }
};

const generarReporte = (estudiante) => {
  for (let i = 0; i < estudiante.length; i++) {
    estudiante[i] = {
      nombre: estudiante[i].nombre,
      promedio: CalcularPromedio(estudiante[i].calificaciones),
      estado: generarEstado(estudiante[i]),
    };
  }
  return estudiante;
};

generarReporte(estudiantes);

/*Ejercicio 4 – Sumar pares y reorganizar
Crea una función procesarNumeros que:
    - Reciba un array de números.
    - Calcule la suma de los números pares.
    - Quite el último número.
    - Agregue la suma al inicio.
    - Devuelva el array resultante. */

let arrayNumeros = [2, 3, 4, 5, 1, 6, 8];
const ProcesarNumeros = (arrayNumero) => {
  let sum = 0;
  for (let i = 0; i < arrayNumero.length; i++) {
    if (arrayNumero[i] % 2 === 0) {
      sum += arrayNumero[i];
    } else {
      continue;
    }
  }
  arrayNumero.pop();
  arrayNumero.unshift(sum);
  return arrayNumero;
};

ProcesarNumeros(arrayNumeros);

/*Ejercicio 5 – Carrito inteligente
Crea una función actualizarCarrito que:
    - Reciba un array de productos.
    - Agregue "oferta" al inicio.
    - Si el carrito tiene más de 3 productos, elimine el último.
    - Agregue "total" al final.
    - Devuelva el array final. */

let arrayProductos = ["papa", "arroz", "uvas", "leche", "pan"];
const actualizarCarrito = (array) => {
  array.unshift("oferta");
  if (array.length > 3) {
    array.pop();
  }
  array.push("total");
  return array;
};

actualizarCarrito(arrayProductos);

/*Ejercicio 6 – Clasificador de frutas
Segun el Array
Crea una función que:
    - Recorra el array.
    - Cree un nuevo array solo con las frutas que tengan más de 4 letras.
    - Devuelva el nuevo array. */

const frutas = ["manzana", "pera", "uva", "fresa", "melon"];

const ClasificadorFrutas = (array) => {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 4) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
};

ClasificadorFrutas(frutas);

/*Crea una función gestionarFila que:
    - Reciba un array de personas.
    - Saque a las primeras 2 personas.
    - Agregue "Nuevo1" y "Nuevo2" al final.
    - Devuelva un objeto con:
    - atendidos: array con las personas que salieron.
    - filaActual: array actualizado. */

let personas = ["Ana", "Maria", "Juan", "Pepe"];

const gestionarFila = (array) => {
  array.shift();
  array.shift();
  array.push("Nuevo1", "Nuevo2");
  return array;
};

gestionarFila(personas);

/*Ejercicio 8 – Promedio general del salón
Con el array de estudiantes anterior:
    - Calcula el promedio general del salón.
    - Devuelve solo el número.
    - No puedes usar un contador manual, usa reduce. */

const sistemaEstudiantes = (estudiantes) => {
  estudiantes.forEach((est) => {
    const prom = CalcularPromedio1(est.calificaciones);
    const estado = ObtenerCalificacion(prom);

    est.reporte = `Hola ${est.nombre}, tu promedio es ${prom} y tu estado es ${estado}`;
  });

  return estudiantes;
};

/*Ejercicio 9 – Array combinado dinámico
Crea una función fusionarYProcesar que:
    - Reciba dos arrays de números. 
    - Los una.
    - Elimine el primer elemento.
    - Agregue el doble del último número al final.
    - Devuelva el array final. */

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [4, 5, 6, 7, 8, 9];
const fusionarYProcesar = (primero, segundo) => {
  let nuevoArray = [];
  for (let i = 0; i < primero.length; i++) {
    nuevoArray.push(primero[i]);
  }
  for (let i = 0; i < segundo.length; i++) {
    nuevoArray.push(primero[i]);
  }
  nuevoArray.shift();
  let ultimo = nuevoArray.pop();
  nuevoArray.push(ultimo, ultimo * 2);
  return nuevoArray;
};

fusionarYProcesar(array1, array2);

/*Ejercicio 10 – Simulación completa
Crea un pequeño sistema que:
    - Tenga un array de estudiantes.
    - Recorra el array.
    - Para cada estudiante:
    - Calcule promedio.
    - Determine estado.
    - Agregue una propiedad nueva llamada reporte con el mensaje final.
Devuelva el array actualizado. */

const CalcularPromedio1 = (calificaciones) => {
  let suma = calificaciones.reduce(
    (acumulador, contador) => acumulador + contador,
    0,
  );

  return suma / calificaciones.length;
};

const ObtenerCalificacion = (calificacion) => {
  if (calificacion <= 60) {
    return "Reprobado";
  } else if (calificacion > 60 && calificacion <= 85) {
    return "Aceptable";
  } else {
    return "Excelente";
  }
};

const MostrarReporte = (estudiante) => {
  const prom = CalcularPromedio1(estudiante.calificaciones);
  const resul = ObtenerCalificacion(prom);

  return `Hola ${estudiante.nombre}, 
    tu promedio es ${prom} 
    y tu estado en la materia es ${resul}`;
};

const estudiante = [
  {
    nombre: "Juan",
    calificaciones: [30, 60.5, 40, 55, 34],
    asignatura: "Matematicas",
  },
  {
    nombre: "Alexa",
    calificaciones: [30, 60.5, 40, 55, 34],
    asignatura: "Matematicas",
  },
  {
    nombre: "Leidy",
    calificaciones: [30, 60.5, 40, 55, 34],
    asignatura: "Matematicas",
  },
  {
    nombre: "Maria",
    calificaciones: [30, 60.5, 40, 55, 34],
    asignatura: "Matematicas",
  },
];

estudiante.forEach((est) => {
  console.log(MostrarReporte(est));
});
