// La busqueda en Arrays varia dependiendo de que estas buscando en el Array

const emojis = ['✨', '🥑', '😍']

//---------------------------------------------------------------------------------------------------------

//Si se busca la POSICION del elemento: indexOf()
const posicionCorazon = emojis.indexOf('😍')
console.log(posicionCorazon)

//---------------------------------------------------------------------------------------------------------

//Si se quiere saber si el elemento EXISTE o no: includes() -> retorna True o False
const tieneCorazon = emojis.includes('😍')
console.log(tieneCorazon)

//---------------------------------------------------------------------------------------------------------

//Si se quiere saber si ALMENOS UN ELEMENTO del Array cumple con una condicion en especifico: some() 
//hay que pasarle una funcion que recorra el array, si hay varios datos que cumplan la condicion
//solo va a iterar hasta el primero que encuentre que cumpla asi hayan mas.
const tieneCorazon1 = emojis.some(emoji => emoji === '😍')
console.log(tieneCorazon) //--> true

const names = ['Leo', 'Isa', 'Ían', 'Lea']
const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo) //--> false

//--------------------------------------------------------------------------------------------------------

//Si se quiere saber si TODOS los elementos del array cumplen con la condicion: every()
// ¿Todos los emojis son felices?
const emojis1 = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = emojis.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false

// ¿Todos los números son pares?
const numbers = [2, 4, 7, 10, 12]
const todosSonPares = numbers.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false

// ¿Todos los strings son mayores a 3 caracteres?
const names1 = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = names.every(name => name.length > 3)
console.log(todosLosNombresSonLargos) // -> true

//-------------------------------------------------------------------------------------------------------

//Si quiere DEVOLVER EL PRIMER ELEMENTO QUE CUMPLE LA CONDICION: find()
const numbers2 = [13, 27, 44, -10, 81]
// encuentra el primer número negativo
const firstNegativeNumber = numbers.find(number => number < 0)
console.log(firstNegativeNumber) // -> -10

//-------------------------------------------------------------------------------------------------------

//Si quiere DEVOLVER el INDICE del PRIMER ELEMENTO QUE CUMPLE LA CONDICION: findIndex() 
const numbers3 = [13, 27, 44, -10, 81]
// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers.findIndex(number => number < 0)
console.log(firstNegativeNumberIndex) // -> 3
// ahora puedes usar el índice para acceder al elemento
console.log(numbers[firstNegativeNumberIndex]) // -> -10