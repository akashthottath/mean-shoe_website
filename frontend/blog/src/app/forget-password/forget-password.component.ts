import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit{

  forgetForm!:FormGroup;

    constructor(
      private fb:FormBuilder,
      private api:ApiService
    ){}

  ngOnInit(): void {
    this.forgetForm = this.fb.group({
      Email: ['',Validators.compose([Validators.required, Validators.email])],
    })
  }

  submit(){
    this.api.sendEmail(this.forgetForm.value.Email).subscribe({
      next:(res:any)=>{
        console.log(res);
        
        alert("Email send successfully");
        this.forgetForm.reset();
      },
      error:(err:any)=>{
        alert(err.error.message)
        alert("usernot found")
        console.log(err);
        
      }
    })
  }

  cancel(){
    this.forgetForm.reset()
    
  }
}
