import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  allProduct:any =[];
  searchKey:string="";

  constructor(private api:ApiService, private cartService:CartService){}

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct(){
    this.api.getProduct().subscribe({
      next:(res:any)=>{
        this.allProduct = res.data;
        console.log(this.allProduct);
        this.cartService.search.subscribe((val:any)=>{
          this.searchKey = val;
        });     
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  deleteProduct(id:any){
    this.api.deleteProduct(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.getAllProduct()
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
