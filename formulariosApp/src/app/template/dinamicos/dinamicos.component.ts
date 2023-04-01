import { Component, Input } from '@angular/core';


interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  @Input() nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'JJ',
    favoritos: [
      { id: 1, nombre: 'C&C General' },
      { id: 2, nombre: 'Counter Strike' }
    ]
  };

  agregarJuego(){
    const nuevoFavorito: Favorito = {id:this.persona.favoritos.length+1, nombre:this.nuevoJuego};
    this.persona.favoritos.push(nuevoFavorito);
  }

  eliminar(index:number){
    this.persona.favoritos.splice( index,1);
    this.nuevoJuego = '';
  }

  guardar() {
    console.log('form posteado');
  }
}
