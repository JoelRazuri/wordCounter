/*
    Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/


const contadorDePalabras = (text="", palabra=undefined) => {
    
    if (!text) return console.warn("Debe ingresar un texto");
    if (palabra === undefined) return console.warn("Debe ingresar una palabra para verificar cuantas veces esta en el texto");

    let contador = 0;

    textoALista = (text.toLowerCase()).split(" ")

    for (let i=0; i<textoALista.length; i++){ 
        if (palabra.toLowerCase() === textoALista[i]){
            contador += 1;
        }      
    }

    return console.info(contador);
}


// A tener en cuenta que las comas, puntos y caracteres especiales que se encuentren al lado de una palabra, no seran contadas como la misma
// Ej: 'bien,' no es igual a 'bien'
// Corregir

console.info("EJERCICIO 6");
contadorDePalabras("Hola como estas bien bien bien mal okey hola HOLA", "hola");
contadorDePalabras("Hola como estas bien bien bien mal okey hola HOLA", "bien");
contadorDePalabras("Hola como estas bien bien bien mal okey hola HOLA", "mal");