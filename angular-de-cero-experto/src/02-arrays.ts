
let habilidades = ['Bash','Counter','Healing'];
interface Character{
  nombre: string;
  hp: number,
  habilidades: string[],
  puebloNatal? : string 
}

const personaje: Character = {
  nombre: 'Strider',
  hp: 34,
  habilidades: ['Bash','Counter']
};


function curar(personaje: Character, curarX: number):void{
    personaje.hp += curarX;
    console.log(`Sumar ${curarX} al hp del personaje ${personaje.nombre}.`);
    console.log(personaje);
}

personaje.puebloNatal = "Cadiz";

console.table(personaje);
curar(personaje, 20);