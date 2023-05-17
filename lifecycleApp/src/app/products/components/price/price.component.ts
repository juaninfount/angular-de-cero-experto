import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html'
})

export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input()
  public price:number = 0;

  public interval$?: Subscription; // representa un recurso disponible

  ngOnInit(): void {
    console.log('ngOnInit');
    this.interval$ = interval(1000).subscribe( value => console.log(`Tick: ${value}`) ); 
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente hijo: ngOnchanges');
    console.log({changes});
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.interval$?.unsubscribe();
  }

}
