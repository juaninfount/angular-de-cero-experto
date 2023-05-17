import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit, OnChanges, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, 
AfterViewChecked, OnDestroy {

  public  isProductVisible:boolean = false;
  public  currentPrice:number = 10;

  constructor() {
    console.log('Constructor')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    
  }

  ngAfterContentInit(): void {
    
  }
  ngAfterContentChecked(): void {
    
  }
  ngAfterViewInit(): void {
    
  }
  ngAfterViewChecked(): void {
    
  }
  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    
  }

  increasePrice(){
    this.currentPrice++;
  }

}
