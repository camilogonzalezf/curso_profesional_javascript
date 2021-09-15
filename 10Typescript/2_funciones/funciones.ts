//Ejemplo sencillo de suma
function add(a: number , b: number): number {
    return a + b
}

const sum = add(4, 6)

console.log(`La suma da ${sum}`)

//Funciones que retornan funciones

function createAdder (a: number): (number) => number {
    return function(b: number){
        return b + a;
    }
}

const  addFour = createAdder(4)
const  addSix = addFour(6)

console.log(`La funcion que retorna funciones da como resultado ${addSix}`)

//Funciones con argumentos Opcionales

function fullName(name: string , lastName?: string): string {
    if(lastName){ // el ? toma lastName como undefined o falso SINO se pone
        return `${name} ${lastName}`
    }else {
        return name
    }
}

let nombre = fullName('Camilo') //En este caso lastName es undefined

console.log(nombre)

nombre = fullName('Pacho', 'Villegas') //En este caso lastName tiene un valor

console.log(nombre)

//Funciones con argumentos Opcionales

function fullNameOmision(name: string , lastName: string = 'Correa'): string {
        return `${name} ${lastName}`
}

let nombreOmision = fullNameOmision('Camilo') //En este caso lastName es undefined y va a tomar el default Correa
console.log(nombreOmision)

nombreOmision = fullNameOmision('Gildardo' , 'Delgado') //En este caso lastName toma Delgado
console.log(nombreOmision)