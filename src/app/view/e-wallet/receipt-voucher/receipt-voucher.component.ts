import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import {  ReceiptServices } from 'src/app/services';
import { combineLatest, Subscription } from 'rxjs';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { FormGroup,  FormBuilder,  Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-receipt-voucher',
  templateUrl: './receipt-voucher.component.html',
  styleUrls: ['./receipt-voucher.component.css']
})
export class ReceiptVoucherComponent implements OnInit {
  Guid : string;
  modalRef: BsModalRef;
  ReceiptVoucherList:any;
  Amountdue:any;
  AmountReceived:any;
  Balancedue:any;
  receiptForm:any;

 
  constructor(private modalService: BsModalService,public receiptService: ReceiptServices,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.Guid = null;
    this.getView();
    this. getDue();
    this. setReceiptForm();

  }
  // const data = {
  //   ActionTaken : this.Guid?'Update':'Insert',
  //   Id : this.model.Id,
  //   RefId :0,
  
  // };

  setReceiptForm(){
    this.receiptForm = this.formBuilder.group({
      Action: [''],
      Id: [''],
      payment: [''],
      TransactionDate:[''],
      TransactionDetails:[''],
      amount:[''],
      in_rupees:[''],
      for_receipt_of:[''],

  }, {
  
  });
  }
  get f() { return this.receiptForm.controls; }
  
  openModal(template: TemplateRef<any>){
    // const modalRef = this.modalService.open(ModelComponent, { size: 'lg', backdrop: 'static' });
    this.modalRef = this.modalService.show(template);  
  }
  getView(){
    var data={
      SpName : "usp_IU_Receipt",
      Action:"View",
      Id:null,
      payment:null,
      TransactionDate:null,
      TransactionDetails:null
  }
    this.receiptService.getView(data)
     .subscribe((res) => {
       this.ReceiptVoucherList = res.Result;
      console.log(res);
    });
  }
  postReceiptVoucher(){
    var data={
      SpName : "usp_IU_Receipt",
       Action:"Insert",
        Id:10001,
        payment:25000,
        TransactionDate:"2020-07-30",
        TransactionDetails:"Test"
    
  }
    this.receiptService.postReceiptVoucher(data)
     .subscribe((res) => {
       this.ReceiptVoucherList = res.Result;
      console.log(res);
    });
  }
  getDue(){
    var data={
      SpName : "usp_IU_Receipt",
      Action:"Due",
      Id:10001,
      payment:25000,
      TransactionDate:null,
      TransactionDetails:null
    
  }
    this.receiptService.getDue(data)
     .subscribe((res) => {
       this.Amountdue = res.Result.TotalDue;
       this.AmountReceived = res.Result.AmountReceived;
       this.Balancedue = res.Result.BalanceDue;
      console.log(res);
    });
  }
}
