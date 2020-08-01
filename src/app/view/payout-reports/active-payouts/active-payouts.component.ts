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
  autoPoolCollection : any = [];
  currentMonth : string;
  currentYear:string;
  allYears:any = [];
  image : string;
  monthNames: any = [];
  cYear:any;
  constructor(public memberService: MemberServices) { }

  ngOnInit(): void {
    this.monthNames = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
  ];

  const d = new Date();
  this.currentMonth =  this.monthNames[d.getMonth()];
  this.currentYear = d.getFullYear().toString();
    for(var i=2020; i<=2050; i++){
        this.allYears.push(i);
    }
  }

  searchUser(userId:number,month:any,year:number){
    this.teamCollection= [];
    this.autoPoolCollection= [];
    var MonYear = month.substring(0,3)+' '+year;
    this.currentMonth = month;
    this.currentYear = year.toString();
    this.memberService.getMemberData(userId,MonYear)
    .subscribe((res) => {
      if(res){
        this.realtorsData = res.Result[0];
        var data = res.Result[0].Team_Coll.split(':');
        var autoData = res.Result[0].first_Level.split(':');
        //this.image = "http://devapi.rajadhanihousingprojects.com/MemberImage/" + res.Result[0].Image;
        this.image = "http://api.rajadhanihousingprojects.com/MemberImage/" + res.Result[0].Image;
        if(data){
           data.forEach(element => {
             this.teamCollection.push(element)
           });
           autoData.forEach(element => {
             this.autoPoolCollection.push(element)
           });
        }else{
         this.teamCollection = res.Result[0].Team_Coll;
         this.autoPoolCollection = res.Result[0].first_Level;
        }
        
        console.log(res);
      }
     
   });
  }
  

}
