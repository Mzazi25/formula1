import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userList:any =[];
  constructor(private commonServ:CommonService, private router:Router) { }

  ngOnInit(): void {
    this.commonServ.getUser().subscribe((data:any)=>{
      this.userList = data;
    })
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['login']);

  }

}
