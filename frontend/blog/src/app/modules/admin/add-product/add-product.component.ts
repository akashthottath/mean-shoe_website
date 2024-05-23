import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  addForm !:FormGroup;

  constructor(
    private fb:FormBuilder,
    private api:ApiService
  ){}

  ngOnInit(): void {
    this.addForm = this.fb.group({
      Id: ['',Validators.required],
      productName: ['',Validators.required],
      image: ['',Validators.required],
      price: ['',Validators.required],
      brand: ['',Validators.required],
      description: ['',Validators.required]
    })
  }


  submit(){
    this.api.addProduct(this.addForm.value).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert("Product Add Successfully")
        this.addForm.reset()       
      },
      error:(err:any)=>{
        console.log(err);
        alert("Product Adding Failed")
        
      }
    })
  }

  cancel(){
    this.addForm.reset()
  }

}
