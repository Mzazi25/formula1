import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { validateBasis } from '@angular/flex-layout';

@Component({
  selector: 'app-registeer',
  templateUrl: './registeer.component.html',
  styleUrls: ['./registeer.component.css']
})
export class RegisteerComponent implements OnInit {
  register:any = FormGroup
  id:any = 4;
  constructor(private router:Router, private commServ:CommonService, private fb:FormBuilder ) { }
  
  ngOnInit(): void {
    this.register = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.compose([Validators.required, Validators.email])]
    })
  }
  registerSubmit(data:any){
    console.log(data);
    let dataToPass = {
      name:data.name,
      email:data.email,
      id:this.id++
    }

    this.commServ.addUser(dataToPass).subscribe((data:any)=>{
      console.log(data);
    })
  }
    gotToLogin(){
      this.router.navigate(['login']);
    }
  }


