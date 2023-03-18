import { Producto, calculaISV } from './06-desestructuracion-funciones';


const carrito: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 1022,
    },
    {
        desc: 'Telefono 2',
        precio: 932
    }
];


const[total, isv] = calculaISV(carrito);
console.log('Total:' + total);
console.log('isv:' + isv);