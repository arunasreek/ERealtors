import { Component, OnInit } from '@angular/core';
import { MemberServices, CommonServices } from 'src/app/services';

@Component({
  selector: 'app-statement-account',
  templateUrl: './statement-account.component.html',
  styleUrls: ['./statement-account.component.css']
})
export class StatementAccountComponent implements OnInit {
  customerList :any;
  statementList:any;
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
