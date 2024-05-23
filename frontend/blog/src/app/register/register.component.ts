import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from 'src/validators/confirnpasswordvalidator';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm !:FormGroup;

  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private route:Router
  ){}

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      FirstName: ['',Validators.required],
      LastName: ['',Validators.required],
      Email: ['',Validators.compose([Validators.required, Validators.email])],
      Password: ['',Validators.required],
      confirmPassword: ['',Validators.required]
    },
    {
      validator:passwordValidator('Password','confirmPassword')
    }
  );
    
  }

  register(){
    this.api.register(this.registerForm.value).subscribe({
      next: (res:any) =>{
        alert("user created Successfully")
        console.log(res); 
        this.registerForm.reset();
        this.route.navigateByUrl("")      
      },
      error: (err:any) =>{
        console.log(err); 
        alert("Internal Error")   
      }
    })
  }


}
