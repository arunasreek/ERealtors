import { Component, OnInit } from '@angular/core';
import { MemberServices, CommonServices } from 'src/app/services';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-statement-account',
  templateUrl: './statement-account.component.html',
  styleUrls: ['./statement-account.component.css']
})
export class StatementAccountComponent implements OnInit {
  customerList :any;
  statementList:any;
  p: number=1;
  constructor(public commonservice: CommonServices) { }

  ngOnInit(): void {
    
    this.getSponserList();
  }

  getStatementRecord(id){
    this.commonservice.getStatement(id)
    .subscribe((res) => {
     this.statementList = res.Result;
     console.log(res);
   });
  }
  public convetToPDF()
  {
  var data = document.getElementById('StatementData');
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
  pdf.save('Statement of Account.pdf'); // Generated PDF
  });
  }
  getSponserList(){
    this.commonservice.getSponserList()
     .subscribe((res) => {
      this.customerList = res.Result;
      this.getStatementRecord(res.Result[1].SponserId);
      console.log(res);
    });
  }

  changeCust(event:any){
    this.getStatementRecord(event.target.value);
  }
}
