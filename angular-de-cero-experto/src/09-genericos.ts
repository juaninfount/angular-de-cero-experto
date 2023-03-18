function queTipoSoy<T>(argumento: T) {
    return argumento;
}


let soystring = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(123);
let soyArreglo = queTipoSoy(['A','B','C']);
let soyNumeroExplicito = queTipoSoy<number>(100);

console.log(soystring);
console.log(soyNumeroExplicito);

