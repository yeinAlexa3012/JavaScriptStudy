let frutas = ['manzana', 'pera', 'uva', 'fresa']

let i = 0

//Con While
while(i < frutas.length){
    console.log(frutas[i])
    i++
}

//Con For
for(let i = 0; i <frutas.length; i++){
    console.log(frutas[i])
}

//Con For of
for (const fruta of frutas){
    console.log(fruta)
}

//Con ForEach
frutas.forEach(fru =>{
    console.log(fru)
})

