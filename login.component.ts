import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { $ } from 'protractor';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin:FormGroup;
  formForgotPassword:FormGroup;
  constructor(private fb:FormBuilder) {
   this.formLogin = this.fb.group({
      LoginEmail:['',[Validators.required,Validators.email]],
      LoginPassword:['',[Validators.required,Validators.minLength(6)]],
    });
   this.formForgotPassword =this.fb.group({
      Email:['',[Validators.required,Validators.email]],
    });
}

ngOnInit() {
 
  }
onSubmit()
{

}


}

