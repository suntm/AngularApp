import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';
import { PaymentDetails } from '../shared/payment-details.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailsService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord:PaymentDetails){
    this.service.formData = Object.assign({}, selectedRecord) ;
  }
  onDelete(id:Number){
    if(confirm('Are you sure to delete this record ?'))
    {
      this.service.deletePaymentDetail(id)
      .subscribe(
        res =>{        
          this.service.refreshList();
          this.toastr.error("Deleted Successfully", "Payment Detail Registeration")
        },
        err =>{console.log(err);}
      );
    }  
   
  }
}
