import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any  = FormGroup;
  users:any = [];
  constructor(private fb:FormBuilder, private router:Router, private commserv:CommonService) { }


  ngOnInit(): void {
    this.login = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required, Validators.email])]
    })
    this.commserv.getUser().subscribe((data:any)=>{
      this.users = data;;
    })
  }
  
  loginSubmit(data:any){
if (data.name){
  this.users.forEach((item: { name: any; email: any; }) => {
    if(item.name === data.name && item.email === data.email){
      localStorage.setItem("isLoggedin", "true");
      this.router.navigate(['home']);
    }
    else{
      localStorage.clear();
    }
  }
  )}
  }
  gotToSignup(){
this.router.navigate(['register']);
  }
}
