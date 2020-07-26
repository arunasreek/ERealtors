import { Component, OnInit } from '@angular/core';
import { MemberServices } from 'src/app/services';

@Component({
  selector: 'app-active-payouts',
  templateUrl: './active-payouts.component.html',
  styleUrls: ['./active-payouts.component.css']
})
export class ActivePayoutsComponent implements OnInit {
  realtorsData : any;
  teamCollection : any = [];
  currentMonth : string;
  image : string;
  constructor(public memberService: MemberServices) { }

  ngOnInit(): void {
    const monthNames = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
  ];

  const d = new Date();
  this.currentMonth =  monthNames[d.getMonth()];
  }

  searchUser(userId:number){
    this.memberService.getMemberData(userId)
    .subscribe((res) => {
     this.realtorsData = res.Result[0];
     var data = res.Result[0].Team_Coll.split(':');
     this.image = "http://devapi.rajadhanihousingprojects.com/MemberImage/" + res.Result[0].Image;
     if(data){
        data.forEach(element => {
          this.teamCollection.push(element)
        });
     }else{
      this.teamCollection = res.Result[0].Team_Coll;
     }
     
     console.log(res);
   });
  }
  

}
