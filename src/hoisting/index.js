//Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

console.log(nameOfDog)//undefined
var nameOfDog = 'Elmo'
console.log(nameOfDog)//Elmo



nameofCat = () => {
    console.log(`el gato es ${elma}`)
}

nameofCat()//undefined
var elma = 'Elmito'
nameofCat()//Elmito