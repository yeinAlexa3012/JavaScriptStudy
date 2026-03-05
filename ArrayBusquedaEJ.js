/*Ejercicio 1
1.  Obtén la posición de 🍇
2️. Obtén la posición de 🍍
3️. Obtén la posición de 🍉 */

const frutas = ['🍎', '🍌', '🍇', '🍓', '🍍']

const posUva = frutas.indexOf('🍇')
const posPiña = frutas.indexOf('🍍')
const posSandia = frutas.indexOf('🍉')

const Existe = (variable) =>{
    if(variable > -1){
        return `La posicion de esa fruta es: ${variable}`
    }else{
        return `La fruta no existe`
    }
}

Existe(posPiña)
Existe(posUva)
Existe(posSandia)

/*Ejercicio 2
Determina si existe algún número divisible entre 3 y mayor que 20.*/
const numeros = [12, 7, 5, 18, 21, 30]
const ExisteMayorQue3 = numeros.some(num => num % 3 === 0 && num > 20)
if(ExisteMayorQue3){
    console.log("Si existe")
}else{
    console.log("No existe")
}

/*Ejercicio 3
Determina si todos los nombres tienen al menos 3 letras. */
const nombres = ['Leo', 'Isabella', 'Ian', 'Lea', 'Alexander']
const TieneMas3 = nombres.every(nom => nom.length > 3)
if(TieneMas3){
    console.log("Todos los nombres tienen mas de 3 letras")
}else{
    console.log("Falso")
}

/*Ejercicio 4
Obtén la primera edad que sea mayor o igual a 18. */
const edades = [14, 17, 18, 21, 16]
const PrimeraEdad = edades.find(edad => edad >= 18)
console.log(`La primera edad mayor a 18 es ${PrimeraEdad}`)

/*Ejercicio 5
Obtén la posición de la primera persona mayor de edad. */
const edades2 = [14, 17, 18, 21, 16]
const PersonaMayor = edades.findIndex(edad => edad > 18)
console.log(`la posición de la primera persona mayor de edad esa ${PersonaMayor}`)

/*Ejercicio 6
Determina si existe algún producto que cueste más de 1000. */
const productos = [
    { nombre: 'Laptop', precio: 1200 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 80 },
    { nombre: 'Monitor', precio: 300 }
  ]

const ExisteMasDeMil = productos.some(prod => prod.precio > 1000)
if(ExisteMasDeMil){
    console.log("Si existe")
}else{
    console.log("No existe")
}
  
/*Ejercicio 7
Obtén el primer producto que cueste menos de 50. */
const productos2 = [
    { nombre: 'Laptop', precio: 1200 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 80 },
    { nombre: 'Monitor', precio: 300 }
]

const PrimerProducto = productos2.findIndex(prod => prod.precio < 50)
console.log(productos2[PrimerProducto].nombre)

/*Ejercicio 8
Obtén la posición del primer producto que cueste menos de 100. */

const productos3 = [
    { nombre: 'Laptop', precio: 1200 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 80 },
    { nombre: 'Monitor', precio: 300 }
]

const MenosCien = productos3.findIndex(pro => pro.precio < 100)
console.log(`La posicion es ${MenosCien}`)


/*Ejercicio 9
Determina si existe alguna palabra con más de 8 caracteres.*/

const palabras = ['javascript', 'html', 'css', 'react']

const PalabraLarga = palabras.some(pal => pal.length > 8)
if(PalabraLarga){
    console.log("Si hay")
}else{
    console.log("No hay")
}

/*Ejercicio 10
Determina si todas las palabras tienen exactamente 3 letras.*/

const palabras2 = ['sol', 'mar', 'pan', 'luz']
const PalabraCorta = palabras.every(pal => pal.length === 3)
if(PalabraCorta){
    console.log("Todos tienen 3 letras")
}else{
    console.log("No todos")
}

/*Ejercicio 11
Obtén el primer número positivo.*/
const numeros2 = [-5, -10, 3, 8, 15]
const NumeroPositivo = numeros2.find(num => num > 0)
console.log(NumeroPositivo)

/*Ejercicio 12
Obtén la posición del primer número positivo.*/
const numeros3 = [-5, -10, 3, 8, 15]
const PosicionPositivo = numeros3.findIndex(num => num > 0)
console.log(PosicionPositivo)

/*Ejercicio 13
Determina si todos los usuarios son mayores de edad.*/
const usuarios = [
  { nombre: 'Ana', edad: 17 },
  { nombre: 'Luis', edad: 22 },
  { nombre: 'Carlos', edad: 30 },
  { nombre: 'Eva', edad: 15 }
]
const TodosMayores = usuarios.every(usu => usu.edad > 18)
if(TodosMayores){
    console.log("Todos son mayores")
}else{
    console.log("No todos")
}