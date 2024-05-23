import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import Swal  from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
 
  Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true,
  });

  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private route:Router
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['',Validators.compose([Validators.required, Validators.email])],
      Password: ['',Validators.required],
    });
    this.login();

  }

  login(){
    this.api.login(this.loginForm.value).subscribe({
      next: (res:any) =>{
        console.log(res);
        
        // alert("user logged")
        console.log(res.user); 
        // this.route.navigateByUrl("landpage");
        // this.loginForm.reset();
        if (res.data.isAdmin) {
          (async () => {
            await this.Toast.fire({
              icon: 'success',
              title: 'Admin Logged',
            });
          })();

          this.route.navigateByUrl('/admin/dashbrd');
        } else {
          (async () => {
            await this.Toast.fire({
              icon: 'success',
              title: 'User Logged',
            });
          })();

          this.route.navigateByUrl('landpage');
        }
        this.loginForm.reset();
      },
      error: (err:any) =>{
        console.log(err); 
        alert("User Not Found")   
      }
    })    
  }
  
}
