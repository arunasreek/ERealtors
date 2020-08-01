import { Component, OnInit } from '@angular/core';
import { MemberServices } from 'src/app/services';

@Component({
  selector: 'app-member-ranks-overview',
  templateUrl: './member-ranks-overview.component.html',
  styleUrls: ['./member-ranks-overview.component.css']
})
export class MemberRanksOverviewComponent implements OnInit {
  memberRankList:any;
  constructor(public memberService: MemberServices) { }

  ngOnInit(): void {
    this.getMemberRankList();
  }

  getMemberRankList(){
    this.memberService.getMemberRanks().subscribe((res)=>{
        this.memberRankList = res.Result;        
    });
  }


}
