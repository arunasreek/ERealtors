import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import {  ReceiptServices } from 'src/app/services';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-payment-voucher',
  templateUrl: './payment-voucher.component.html',
  styleUrls: ['./payment-voucher.component.css']
})
export class PaymentVoucherComponent implements OnInit {
  Guid : string;
  paymentVoucherList:any;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,public receiptService: ReceiptServices) { }

  ngOnInit(): void {
    this.Guid = null;
    this.getView();
  }
  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);  
  }
  getView(){
    var data={
     SpName :"usp_IU_Payment",
      Action:"View",
      Id:null,
      payment:null,
      TransactionDate:null,
      TransactionDetails:null
  }
    this.receiptService.getView(data)
     .subscribe((res) => {
       this.paymentVoucherList = res.Result;
      console.log(res);
    });
  }
}
