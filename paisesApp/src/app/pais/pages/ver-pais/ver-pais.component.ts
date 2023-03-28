import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute
      .params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id))
         ,tap(console.log) //  We use the pipe to chain the tap operator, which just logs the values of the source observable 
      ).subscribe(pais => {       
        console.log(pais); 
        this.pais = pais[0];        
      });
    /*
    this.activatedRoute.params.subscribe( ({id}) => {
        console.log(id);
    
      this.paisService.getPaisPorAlpha(id).subscribe( (pais) => {
        console.log(pais);
      });        
        
    });  
    */
  }
}