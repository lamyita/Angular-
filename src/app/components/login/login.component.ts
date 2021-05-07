import { AccountService } from './../../services/account.service';
import { TokenService } from './../../services/token.service';
import { AuthontfService } from './../../services/authontf.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.required]),
    password: new FormControl(null,[ Validators.required, Validators.minLength(8), Validators.maxLength(16)])
    ,})


    constructor(
      private authontfService: AuthontfService, 
      private tokenService : TokenService,
      private router: Router ,
      private accountService:AccountService
      ) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.loginForm.value);
    this.authontfService.login(this.loginForm.value).subscribe(res =>  this.handleResponse(res)) 
   //this.authontfService.fetchPost();

  }

  handleResponse(res: any){
    this.tokenService.handle(res)
    this.accountService.changeStatus(true)
    this.router.navigateByUrl("/address/create")

  }
}
