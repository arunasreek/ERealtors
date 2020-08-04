import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
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
  selector: 'app-receipt-voucher',
  templateUrl: './receipt-voucher.component.html',
  styleUrls: ['./receipt-voucher.component.css']
})
export class ReceiptVoucherComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  // @ViewChild('htmlData') htmlData:ElementRef;
  Guid : string;
  modalRef: BsModalRef;
  ReceiptVoucherList:any;
  Amountdue:any;
  AmountReceived:any;
  Balancedue:any;
  receiptForm:FormGroup;
  submitted= false;
  currentId:number;
  currentDate:any;
  receiptDetails:any;
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
    // this. getDue();
    // this. setReceiptForm();
    this.currentDate = new Date();
    this.Amountdue=0;
    this.AmountReceived=0;
    this.Balancedue=0;
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
      Amount:[''],
      in_rupees:[''],
      for_receipt_of:[''],

    });
  }
  get f() { return this.receiptForm.controls; }
  
  openModal(template: TemplateRef<any>){
    // const modalRef = this.modalService.open(ModelComponent, { size: 'lg', backdrop: 'static' });
    this.modalRef = this.modalService.show(template);  
  }

  public convetToPDF()
{
var data = document.getElementById('htmlData1');
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
pdf.save('receipt.pdf'); // Generated PDF
});
}

  // onExportClick(){
  // const options ={
  //   filename:'receipt-voucher.pdf',
  //   image:{type:'jpeg'},
  //   html2canvas:{},
  //   jsPDF:{orientation:'landscape'}
  // };
  // const content: Element = document.getElementById('htmlData');

  // html2pdf()
  // .form(content)
  // .set(options)
  // .save();
  // }

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

  pushReceipt(){
  if(!this.amount && !this.currentId && !this.receiptDetails){
    this.toastr.error('Mandatory Field Required','error');
  }else{
    const data = {
      SpName : "usp_IU_Receipt",
      Action : 'Insert',
      Id :  this.customerId,
      payment  :parseInt(this.amount),
      TransactionDate: new Date(),
      TransactionDetails : this.receiptDetails 
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
      this.toastr.success('Receipt Created Successfully','success');
      this.staticTabs.tabs[0].active = true;
    });
  }
    //Reset 
  }


  // postReceiptVoucher(){
  //   var data={
  //     SpName : "usp_IU_Receipt",
  //      Action:"Insert",
  //       Id:10001,
  //       payment:25000,
  //       TransactionDate:"2020-07-30",
  //       TransactionDetails:"Test"
    
  // }
  //   this.receiptService.postReceiptVoucher(data)
  //    .subscribe((res) => {
  //      this.ReceiptVoucherList = res.Result;
  //     console.log(res);
  //   });
  // }
  getDue(event:any){
    var data={
      SpName : "usp_IU_Receipt",
      Action:"Due",
      Id:parseInt(event.target.value),
      payment:parseInt(this.amount),
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

    this.amountR = this.convertNumberToWords(this.amount)
  }

  // public downloadPDF():void {
  //   let DATA = this.htmlData.nativeElement;
  //   let doc = new jsPDF('p','pt', 'a4');

  //   let handleElement = {
  //     '#editor':function(element,renderer){
  //       return true;
  //     }
  //   };
  //   doc.fromHTML(DATA.innerHTML,15,15,{
  //     'width': 400,
  //     'elementHandlers': handleElement
  //   });

  //   doc.save('receipt-voucher.pdf');
  // }

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
