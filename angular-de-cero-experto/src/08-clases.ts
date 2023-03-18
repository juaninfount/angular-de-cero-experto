
class PersonaNormal{
    constructor( 
        public nombre: string, 
        public direccion: string 
    )  {}
}

class Heroe extends PersonaNormal {
    
    constructor(public alterEgo: string, public edad: number, public nombreReal: string){
        super(nombreReal, 'New York, US');
        
    }
}

const ironman = new Heroe("iron man",42, "Stark");
console.log({ironman});