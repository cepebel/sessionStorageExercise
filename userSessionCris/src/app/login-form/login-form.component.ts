
import { Component, OnInit } from '@angular/core';
import { Iuser, users } from '../app.model';
import { NgForm } from '@angular/forms';
import { LogInService } from '../services/log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  userName: Iuser = {};
  loggedUser: Iuser = {name:"default"};
  name: string = ""
  email: string = ""
  password: string = ""
  USERS: Iuser[] = [];
  isRegister: Boolean = false;
  
  constructor(private logInService: LogInService, private router: Router) {}
  ngOnInit(): void {
  }

  logIn(f: NgForm){
    this.email = f.value.email
    this.password = f.value.password
    this.logInService.getUserByMail(this.email).subscribe(res=>{
      if(res==undefined){
        console.error('No hay usuario')
      }
      else{
        let user: users = res
        if(user.password == this.password){
          sessionStorage.setItem("myuser", JSON.stringify(res))
          this.router.navigateByUrl('welcome')
        }
        else{
          console.error('Contraseña equivocada')
        }
      }
    })

  }
 
  
}
