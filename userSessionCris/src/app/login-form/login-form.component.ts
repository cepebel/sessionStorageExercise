
import { Component, OnInit } from '@angular/core';
import { Iuser } from '../app.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LogInService } from '../services/log-in.service';
import { Observable } from 'rxjs';
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
  USERS: Iuser[] = [];
  isRegister: Boolean = false;
  
  constructor(private logInService: LogInService, private router: Router) {}
  ngOnInit(): void {
  }
  iniciarSesion(f: NgForm){
    this.name = f.value.firstName;
    this.logInService.checkandLoginObservable(this.name).subscribe(
      res =>{
        sessionStorage.setItem("myuser", JSON.stringify(res) || 'No hay usuario')
        console.log(res.name)
        this.router.navigateByUrl('welcome')
      },
      err => console.log('HTTP Error', err));
    console.clear
  }
 
  
}
