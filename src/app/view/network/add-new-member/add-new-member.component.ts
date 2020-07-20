import { Component, OnInit } from '@angular/core';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import {  MemberServices } from 'src/app/services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-new-member',
  templateUrl: './add-new-member.component.html',
  styleUrls: ['./add-new-member.component.css']
})
export class AddNewMemberComponent implements OnInit {

  constructor(public memberService: MemberServices,
              public toastr: ToastrService) { }
  model = {
           RefId :0,
           plot_sqyds :0,
           no_of_plots :0,
           rate_per_plot :0,
           address  :'',
           Country :'',
           First_Name :'',
           Surname  :'',
           Username :'',
           Email_Address :'',
           Date_of_Joining : new  Date(),
           Date_of_Birth  :   new  Date(),
           perks  :'',
           Password :'',
           Confirm_Password :'',
           Sponsor :'',
           Name_of_Nominee :'',
           Mobile_Number :'',
           Pan_Card_Number :'',
           Aadhaar_Number :'',
           Bank_Name :'',
           IFSC_Code :'',
           Bank_Account_Number :'',
           IsOptingforStar1Autopool :0,
           UpgradeAmountPaid :0,
  };
  ngOnInit(): void {
  }

  pushMember(){
    const data = {
      RefId :parseInt(this.model.RefId.toString()),
      plot_sqyds : parseInt(this.model.plot_sqyds.toString()),
      no_of_plots : parseInt(this.model.no_of_plots.toString()),
      rate_per_plot : parseInt(this.model.rate_per_plot.toString()),
      address  :this.model.address,
      Country :this.model.Country,
      First_Name :this.model.First_Name,
      Surname  :this.model.Surname,
      Username :this.model.Username,
      Email_Address :this.model.Email_Address,
      Date_of_Joining : new  Date(),
      Date_of_Birth  :   new  Date(),
      perks  :this.model.perks,
      Password :this.model.Password,
      Confirm_Password :this.model.Confirm_Password,
      Sponsor :this.model.Sponsor,
      Name_of_Nominee :this.model.Name_of_Nominee,
      Mobile_Number :this.model.Mobile_Number,
      Pan_Card_Number :this.model.Pan_Card_Number,
      Aadhaar_Number :this.model.Aadhaar_Number,
      Bank_Name :this.model.Bank_Name,
      IFSC_Code :this.model.IFSC_Code,
      Bank_Account_Number :this.model.Bank_Account_Number,
      IsOptingforStar1Autopool : this.model.IsOptingforStar1Autopool?1:0,
      UpgradeAmountPaid :this.model.UpgradeAmountPaid
    };
    this.memberService.postMember(data)
    .subscribe(() => {
       this.toastr.success('Member was added!', 'Success');
    });
  }
}
