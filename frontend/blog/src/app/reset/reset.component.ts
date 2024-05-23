import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { passwordValidator } from 'src/validators/confirnpasswordvalidator';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit{
  resetForm!: FormGroup;
  token!:string;

  constructor( private fb:FormBuilder,private api:ApiService, private route:Router, private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
    this.resetForm = this.fb.group({
      Password: ['',Validators.required],
      confirmPassword: ['',Validators.required]
    },
    {
      validator:passwordValidator('Password','confirmPassword')
    }
  )
    this.activatedRoute.params.subscribe(val=>{
      this.token =val['token'];
      console.log(this.token);
      
    })
  }


  reset(){
    let resetObj ={
      token:this.token,
      Password:this.resetForm.value.Password
    } 
    this.api.resetPassword(resetObj).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert(res.message)
        this.resetForm.reset()
        this.route.navigateByUrl("")
        
      },
      error:(err:any)=>{
        console.log(err);
        alert("reset failed")
        
      }
    })   
  }

}
