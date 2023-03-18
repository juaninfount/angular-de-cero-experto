export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}


export function calculaISV( productos: Producto[] ):[number, number] {

    let total = 0;
    productos.forEach(  ({ precio }) => {
        total += precio;
    })

    return [total, total * 0.18];

}

const resultadoFx =  calculaISV([telefono, tableta]);
const [total, isv] = resultadoFx;

console.log(`Total: ${resultadoFx[0]}, isv: ${resultadoFx[1]}`);
console.log(`Total: ${total}, isv: ${isv}`);