console.log('Hello typescript')

function add (a: number , b: number){
    return a + b; 
}

const sum = add(2,3)

console.log("resultado " + sum)

//-------------

//Boolean

let muted: boolean = false
muted = false

// number
let age: number = 6
let edad = 7

//string

let nombre: string = 'Camilo'

//Arreglos
let people: string[] = [] //Define un arreglo tipo Strings
people = ['Raul' , 'Carlos', 'Honorio']

/** AHora arreglos de strings y numeros */

let peopleStringNumbers: Array<string | number> = []
peopleStringNumbers.push('Fernando')
peopleStringNumbers.push(52)

//Enum

enum color{
    Rojo, Verde, Azul //Rojo = 0 Verde = 1  Azul = 2
}

let colorFavorito : color = color.Azul
console.log(`Mi color favorito es ${colorFavorito}`)

/** Para asignar valores a los elementos del enum */
enum colorAsignado{
    Rojo = 'Red', 
    Verde = 'Green', 
    Azul = 'Blue' 
}

let colorFavoritoAsignado : colorAsignado = colorAsignado.Azul
console.log(`Mi color favorito es ${colorFavoritoAsignado}`)

//Any par cualquier tipo de variable

let comodin: any = 'Joker'
comodin = {type : 'King Heart'}

//Object
let someObject: object = {type : 'King Heart'}
