import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.css']
})
export class LandpageComponent implements OnInit{

  allProduct:any =[];
  searchKey:string ="";

  constructor(private api:ApiService, private cartService:CartService){}

  ngOnInit(): void {
  this.getAllProduct();


  }

  addtoCart(product:any){
    this.cartService.addtoCart(product);
    alert("Item Added To Cart")
  }

  getAllProduct(){
    this.api.getProduct().subscribe({
      next:(res:any)=>{
        this.allProduct = res.data;
        console.log(this.allProduct);
        this.allProduct.forEach((a:any) => {
          Object.assign(a, {quantity: 1,
            total: a.price
          })
        });
        this.cartService.search.subscribe((val:any)=>{
          this.searchKey = val;
        });
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
