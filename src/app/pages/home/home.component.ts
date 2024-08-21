import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log("Destruiu");
  }

  ngDoCheck(): void {
    console.log("Uma mudança de variavel foi feita")
  }

  num: number = 1;

  adiciona1 (){
    this.num++;
  }
}
