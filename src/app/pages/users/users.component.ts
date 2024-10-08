import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  // users: String[] = [
  //   "Vinicius",
  //   "Julio",
  //   "Larissa"
  // ]
  userSelecionado: User | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm() {
    this.userForm = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      idade: ['', [Validators.required, Validators.min(12), Validators.max(110)]],
    })
  }

  SubmitForm() {
    if(this.userForm.valid) {
      this.users.push(this.userForm.value)
      this.userForm.reset();
    }
  }

  users: User[] = [
    { nome: "Vinicius", idade: 25 },
    { nome: "Julio", idade: 19},
    { nome: "Larissa", idade: 22 },
    { nome: "Maria", idade: 45 },
  ]

  infoUserSelecionado(user: User){
    this.userSelecionado = user;
    this.userService.setUser(user);
  }
}
