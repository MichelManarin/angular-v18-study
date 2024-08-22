import { Component } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  // users: String[] = [
  //   "Vinicius",
  //   "Julio",
  //   "Larissa"
  // ]
  userSelecionado: User | undefined;
  users: User[] = [
    { nome: "Vinicius", idade: 25 },
    { nome: "Julio", idade: 19},
    { nome: "Larissa", idade: 22 },
    { nome: "Maria", idade: 45 },
  ]

  infoUserSelecionado(user: User){
    this.userSelecionado = user;
  }
}
