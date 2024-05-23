import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL='http://localhost:3000'

  constructor(private http:HttpClient) { }

  register(user:any){
    return this.http.post(`${this.SERVER_URL}/api/auth/register`,user)
  }

  login(user:any){
    return this.http.post(`${this.SERVER_URL}/api/auth/login`,user)
  }

  sendEmail(email:string){
    return this.http.post(`${this.SERVER_URL}/api/auth/send-email`,{Email:email})
  }

  resetPassword(resetObj: any) {
    return this.http.post(`${this.SERVER_URL}/api/auth/reset-password`,resetObj)
  }

  getAllusers(){
    return this.http.get(`${this.SERVER_URL}/api/user/all-users`)
  }

  // addpdt
  addProduct(data:any){
   return this.http.post(`${this.SERVER_URL}/api/product/add-product`,data)
  }

  // get pdt
  getProduct(){
    return this.http.get(`${this.SERVER_URL}/api/product/get-product`)
  }
 
  // get single product
  getSingleproduct(id:any){
    return this.http.get(`${this.SERVER_URL}/api/product/view/${id}`)
  }

  // delete product
  deleteProduct(id:any){
    return this.http.delete(`${this.SERVER_URL}/api/product/product-delete/${id}`)
  }

  // deleteUser
  deleteUser(id:any){
    return this.http.delete(`${this.SERVER_URL}/api/user/user-delete/${id}`)
  }

  // editProduct
  editProduct(id:any, data:any){
    return this.http.put(`${this.SERVER_URL}/api/product/edit-product/${id}`, data)
  }

}
