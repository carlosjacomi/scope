//Ambito Lexico las funciones pueden acceder a sus variables externas anidadas

const myGlobal = 0

myFunction = () => {
    const myNumber = 1
    console.log(myGlobal)

    parent = () =>  { // funcion interna (closure)
        const inner = 2
        console.log(myNumber, myGlobal)

        child = () => { // funcion interna (closure)
            console.log(inner, myNumber, myGlobal)
        }
        return child()
    }

    return parent()
}

myFunction()