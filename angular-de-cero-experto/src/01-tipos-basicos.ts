
let nombre = 'Strider';
nombre = 'Juan Perez'; 
let hp: number | string = 95;
hp = 98;
let estaVivo = false;
console.log(nombre + hp + estaVivo);




interface PersonajeLDR{
    nombre: string,
    pv: number,
    mostrarHp: () => void
}

function curar2(personaje: PersonajeLDR, curarX: number):void{
    personaje.pv += curarX;
    console.log(`Sumar ${curarX} al hp del personaje ${personaje.nombre}.`);
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLDR = {
    nombre: "Section",
    pv: 50,
    mostrarHp(){
        console.log(`Mostrar puntos de vida de personaje ${this.nombre}: ${this.pv}.`);
    }
};

//console.log(sumar(12,34));
//console.log(sumarflecha(12,34));

curar2(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();