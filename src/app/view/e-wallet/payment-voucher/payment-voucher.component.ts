import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import {  ReceiptServices } from 'src/app/services';
import { combineLatest, Subscription } from 'rxjs';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { FormGroup,  FormBuilder,  Validators, FormGroupDirective } from '@angular/forms';
import { moment } from 'ngx-bootstrap/chronos/test/chain';
import { ToastrService } from 'ngx-toastr';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';



@Component({
  selector: 'app-payment-voucher',
  templateUrl: './payment-voucher.component.html',
  styleUrls: ['./payment-voucher.component.css']
})
export class PaymentVoucherComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  Guid : string;
  paymentVoucherList:any;
  modalRef: BsModalRef;
  Amountdue:any;
  AmountPaid:any;
  Balancedue:any;
  paymentForm:FormGroup;
  submitted= false;
  currentId:number;
  currentDate:any;
  paymentDetails:any;
  amount:any;
  customerId:any;
  amountR:any;

  constructor(private modalService: BsModalService,
    public receiptService: ReceiptServices,
    private formBuilder: FormBuilder,
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.Guid = null;
    this.getView();
    this.currentDate = new Date();
    this.Amountdue=0;
    this.AmountPaid=0;
    this.Balancedue=0;
  }

  setPaymentForm(){
    this.paymentForm = this.formBuilder.group({
      Action: [''],
      Id: [''],
      payment: [''],
      TransactionDate:[''],
      TransactionDetails:[''],
      Amount:[''],
      in_rupees:[''],
      for_receipt_of:[''],

    });
  }
  get f() { return this.paymentForm.controls; }


  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);  
  }

  public convetToPDF()
  {
  var data = document.getElementById('paymentData');
  html2canvas(data).then(canvas => {
  // Few necessary setting options
  var imgWidth = 150;
  var pageHeight = 295;
  var imgHeight = canvas.height * imgWidth / canvas.width;
  var heightLeft = imgHeight;
   
  const contentDataURL = canvas.toDataURL('image/png')
  let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
  var position = 10;
  pdf.addImage(contentDataURL, 'PNG', 50, position, imgWidth, imgHeight)
  pdf.save('payment.pdf'); // Generated PDF
  });
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


  pushPayment(){
    if(!this.amount && !this.currentId && !this.paymentDetails){
      this.toastr.error('Mandatory Field Required','error');
    }else{
      const data = {
        SpName : "usp_IU_Payment",
        Action : 'Insert',
        Id :  this.customerId,
        payment  :parseInt(this.amount),
        TransactionDate: new Date(),
        TransactionDetails : this.paymentDetails 
      };
      this.receiptService.postReceiptVoucher(data)
      .subscribe(() => {
        this.getView();
       // console.log(data.ActionTaken);
        //  this.toastr.success(data.ActionTaken ==='Update'?'Record Updated Successfully':'Record Added Successfully', 'Success');
        //  this.staticTabs.tabs[0].active = true;
        //  this.receiptForm.reset();
        //  this.submitted=false;
        //  this.Guid =null;
        this.toastr.success('Payment Created Successfully','success');
        this.staticTabs.tabs[0].active = true;
      });
    }
      //Reset 
    }

  getDue(event:any){
    var data={
      SpName : "usp_IU_Payment",
      Action:"Due",
      Id:parseInt(event.target.value),
      payment:parseInt(this.amount),
      TransactionDate:null,
      TransactionDetails:null
    
  }
    this.receiptService.getDue(data)
     .subscribe((res) => {
       this.Amountdue = res.Result.TotalDue;
       this.AmountPaid = res.Result.AmountPaid;
       this.Balancedue = res.Result.BalanceDue;
      console.log(res);
    });

    this.amountR = this.convertNumberToWords(this.amount)
  }



  convertNumberToWords(amount) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + n_array[j];
                    n_array[i] = 0;
                }
            }
        }
        let value :any;
        for (var i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array[i] * 10;
            } else {
                value = n_array[i];
            }
            if (value != 0) {
                words_string += words[value] + " ";
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Crores ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Lakhs ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Thousand ";
            }
            if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                words_string += "Hundred and ";
            } else if (i == 6 && value != 0) {
                words_string += "Hundred ";
            }
        }
        words_string = words_string.split("  ").join(" ");
    }
    return words_string;
}
}
// usp_IU_Payment
// @Action='Insert',
// @Id=10001,
// @payment=20306.25,
// @TransactionDate='2020-6-25',
// @TransactionDetails='June Payout'