import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent implements OnInit{
 public searchTerm !: string;
  
 constructor(private cartService:CartService){}
 ngOnInit(): void {

 }
 search(event:any){
  this.searchTerm=(event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.cartService.search.next(this.searchTerm);  
 }

}
