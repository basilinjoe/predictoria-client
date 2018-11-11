import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

export interface LoginResponse {
  userName: string,
  password: string,
  isAdmin: boolean
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  });
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    const resultGetUrl = `http://localhost:9091/api/login`;
    this.http.post<LoginResponse>(resultGetUrl, this.loginForm.value).subscribe(res=>{
      if(res.isAdmin){
        this.router.navigate(['dashboardAdmin', res.userName]);
      }
      else{
        this.router.navigate(['dashboard', res.userName]);
      }
    });
  }

}
