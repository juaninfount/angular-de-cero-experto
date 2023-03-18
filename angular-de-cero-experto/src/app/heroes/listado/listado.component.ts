import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán America'];
  heroeBorrado:string = "";

  constructor(){
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  borrarHeroe(){
    if(this.heroes.length>0){
      //var heroeBorrado = this.heroes.pop();
      this.heroeBorrado = this.heroes.shift() || '';
      console.log("...borrando " + this.heroeBorrado );
    }else{
      console.log("Listado de héroes vacía.");
    }
  }
  
}
