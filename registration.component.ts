import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
 // selector: 'app-registration',
 // templateUrl: './registration.component.html',
 // styleUrls: ['./registration.component.css']
 selector: 'app-registration',
 templateUrl:'./registration.component.html',
 styles:[]
})
export class RegistrationComponent implements OnInit {

  constructor(public service:UserService) { 
    this.service.formModel.reset();
    //submitted=false;
  }

  ngOnInit() {
  }
  onSubmit(){

  }
  isavailable =true;
  myClickFunction(event){
    alert("Email has send to your email id. please confirm your email ");
    console.log(event);
 }

}
