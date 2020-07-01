import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators} from '@angular/forms';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  formResetPassword:FormGroup;
  constructor(private  fb:FormBuilder) { 
    this.formResetPassword=this.fb.group({
         ResetPassword:['',[Validators.required,Validators.minLength(6)]],
         NewPassword:['',[Validators.required,Validators.minLength(6)]],
    });
    

  }
  





  ngOnInit(): void {
  }

}
