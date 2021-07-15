import { Injectable } from '@angular/core';
import { PaymentDetails } from './payment-details.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  constructor(private http:HttpClient) { }
  formData:PaymentDetails = new PaymentDetails();
  readonly baseUrl = "https://localhost:44345/api/PaymentDetails";
  list : PaymentDetails[];

  postPaymentDetail() {
    return this.http.post(this.baseUrl, this.formData);
  }
  
  putPaymentDetail() {
    return this.http.put(`${this.baseUrl}/${this.formData.paymentDetailId}`, this.formData);
  }

  deletePaymentDetail(id:Number) {    
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

    refreshList(){
      this.http.get(this.baseUrl).toPromise().then(res => this.list = res as PaymentDetails[])
    }     
}
