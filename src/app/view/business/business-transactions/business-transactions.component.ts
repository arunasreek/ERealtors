import { Component, OnInit } from '@angular/core';
import { MemberServices } from 'src/app/services';

@Component({
  selector: 'app-business-transactions',
  templateUrl: './business-transactions.component.html',
  styleUrls: ['./business-transactions.component.css']
})
export class BusinessTransactionsComponent implements OnInit {
  businessTransaction:any;
  constructor(public memberService: MemberServices) { }

  ngOnInit(): void {
    this.getBusniessTransaction();
  }

  getBusniessTransaction(){
    this.memberService.getBusinessTransaction().subscribe((res)=>{
        this.businessTransaction = res.Result;
        console.log(this.businessTransaction);
    });
  }

}
