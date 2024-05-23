import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  allUsers:any =[];
  searchKey:string="";
  
  
 constructor(private api:ApiService, private cartService:CartService){}

  ngOnInit(): void {
    this.getusers();
  }
  getusers(){
    this.api.getAllusers().subscribe({
      next: (res:any)=>{
        this.allUsers = res.data;
        console.log(this.allUsers);   
        this.cartService.search.subscribe((val:any)=>{
          this.searchKey = val;
        });     
      },
      error:(err:any)=>{
        console.log(err);    
      }
    })
  }

  deleteUser(id:any){
    this.api.deleteUser(id).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.getusers();      
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
