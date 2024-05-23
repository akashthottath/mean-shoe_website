import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm!:FormGroup
  sectionId!:any

  constructor(
    private route:ActivatedRoute,
    private api:ApiService,
    private router:Router,
    private fb:FormBuilder
  ){}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      Id: '', 
      productName: '', 
      image: '', 
      price: '', 
      brand: '', 
      description: '', 
    });

    this.sectionId= this.route.snapshot.paramMap.get('id')!
    console.log(this.sectionId);
    this.getexistingProduct()
  }

  getexistingProduct(){
    this.api.getSingleproduct(this.sectionId).subscribe({
      next:(res:any)=>{
        this.editForm.patchValue(res.data)
      }
    });
  }

 edit(){
  this.api.editProduct(this.sectionId, this.editForm.value).subscribe({
    next:(res:any)=>{
      this.router.navigateByUrl('/admin/products')
    },
    error:(err:any)=>{
      console.log(err);
    }
  })
 }

}
