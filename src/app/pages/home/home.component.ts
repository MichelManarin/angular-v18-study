import { Component, OnDestroy } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy {

  user: User | undefined;
  constructor(private userService: UserService){
    this.user = userService.getUser();
  }

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
