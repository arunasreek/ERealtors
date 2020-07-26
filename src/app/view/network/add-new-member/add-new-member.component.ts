import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import {  MemberServices } from 'src/app/services';
import { ToastrService } from 'ngx-toastr';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-add-new-member',
  templateUrl: './add-new-member.component.html',
  styleUrls: ['./add-new-member.component.css']
})
export class AddNewMemberComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  modalRef: BsModalRef;
  sponserList : any;
  memberList : any;
  currentMonth : string;
  filterValue : any;
  file : any;
  imageUrl : string;
  Guid : string;
  events: Subscription[] = [];
  messages: string[] = [];
  constructor(private modalService: BsModalService,public memberService: MemberServices,
              public toastr: ToastrService,private changeDetection: ChangeDetectorRef) { }
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
           Id:0,
           Gender:'Male'
  };
  ngOnInit(): void {
    this.getSponserList();
    this.getMemberList();
    this.Guid = null;
  }

  pushMember(){
    const data = {
      ActionTaken : this.Guid?'Update':'Insert',
      Id : this.model.Id,
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
      Date_of_Joining : this.model.Date_of_Joining,
      Date_of_Birth  :   this.model.Date_of_Birth,
      perks  :this.model.perks,
      Password :this.model.Password,
      Confirm_Password :this.model.Confirm_Password,
      Sponsor : parseInt(this.model.Sponsor),
      Name_of_Nominee :this.model.Name_of_Nominee,
      Mobile_Number :this.model.Mobile_Number,
      Pan_Card_Number :this.model.Pan_Card_Number,
      Aadhaar_Number :this.model.Aadhaar_Number,
      Bank_Name :this.model.Bank_Name,
      IFSC_Code :this.model.IFSC_Code,
      Bank_Account_Number :this.model.Bank_Account_Number,
      IsOptingforStar1Autopool : this.model.IsOptingforStar1Autopool?1:0,
      UpgradeAmountPaid :this.model.UpgradeAmountPaid,
      ImageUrl : this.imageUrl,
      Gender:this.model.Gender
    };
    this.memberService.postMember(data)
    .subscribe(() => {
      this.getMemberList();
      
       this.toastr.success(' '+data.ActionTaken==='Update'?'Record Updated Successfully':'Record Added Successfully'+'  ', 'Success');
       this.staticTabs.tabs[0].active = true;
    });
    //Reset 
    this.reset();

    console.log(this.model);
    
    
  }

  getSponserList(){
    this.memberService.getSponserList()
     .subscribe((res) => {
      this.sponserList = res.Result;
      console.log(res);
    });
  }

  getMemberList(){
    this.memberService.getMemberList('View',null)
     .subscribe((res) => {
      this.memberList = res.Result;
      this.filterValue = res.Result;
      console.log(res);
    });
  }

  searchMember(value){
      this.filterValue = this.memberList.filter(x=>x.Id === parseInt(value));
  }

  searchMemberkey(event : any){
    console.log(event.target.value);
    if(event.target.value){
    const filters =[parseInt(event.target.value)];
    this.filterValue = this.memberList.filter(function(itm){
                          return filters.indexOf(itm.Id) > -1;
                        });
      }else {
        this.filterValue = this.memberList;
      }
      
    }

    onFileChanged(event: any) {
      if (event.target.files.length > 0) {
          const file = event.target.files[0];
          const fileExtensitions = ["jpg", "jpeg", "png"];
          if (fileExtensitions.indexOf(file.name.split('.').pop()) > -1) {
              const formData = new FormData();
              this.file = file;
              formData.append('file', file);
              this.memberService.uploadMemberImage(formData).subscribe((data: string) => {
                  if(data){}
                    this.imageUrl = data;
                    this.toastr.success('Image Added Successfully ', 'Success');
              });
          } else {
              this.toastr.error('Allowed file formats jpg, jpeg, png, only','Error');
          }
      }
  }

  viewMember(guid:any){
        this.staticTabs.tabs[1].active = true;
        this.getMemberData(guid);
  }

  deleteMember(Id:any){
    this.memberService.getMemberList('Delete',Id)
    .subscribe((res) => {
     this.getMemberList();
     this.toastr.success('Member Deleted Successfully','Success');
   });
  }
  
  openModal(template: TemplateRef<any>,guid : any) {
    const _combine = combineLatest(
      this.modalService.onShow,
      this.modalService.onShown,
      this.modalService.onHide,
      this.modalService.onHidden
    ).subscribe(() => this.changeDetection.markForCheck());

    this.getMemberData(guid);

     this.events.push(
      this.modalService.onHidden.subscribe((reason: string) => {
        const _reason = reason ? `, dismissed by ${reason}` : '';
        this.reset();
        this.unsubscribe();
      })
    );
 
    this.events.push(_combine);
    this.modalRef = this.modalService.show(template);
   
  }
  unsubscribe() {
    this.events.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.events = [];
  }

  reset(){
    this.Guid = null;
    this.model.RefId = 0;
    this.model.plot_sqyds =0;
    this.model.no_of_plots =0;
    this.model.rate_per_plot =0;
    this.model.address = '';
    this.model.First_Name = '';
    this.model.Surname  = '';
    this.model.Username = '';
    this.model.Email_Address = ''; 
    this.model.Date_of_Joining = new Date(); 
    this.model.Date_of_Birth  = new Date(); 
    this.model.perks  = ''; 
    this.model.Password = ''; 
    this.model.Confirm_Password = '';
    this.model.Sponsor = ''; 
    this.model.Name_of_Nominee = '';
    this.model.Mobile_Number = '';
    this.model.Pan_Card_Number = '';
    this.model.Aadhaar_Number = '';
    this.model.Bank_Name = '';
    this.model.IFSC_Code = '';
    this.model.Bank_Account_Number = '';
    this.model.IsOptingforStar1Autopool = 0; 
    this.model.UpgradeAmountPaid = 0; 
    this.model.Gender='Male'
  }

  getMemberData(guid:any){
    var data =  this.memberList.find(x=>x.Guid === guid);
     this.Guid = data.Guid;
     this.model.RefId = 0;
     this.model.plot_sqyds = data.plot_sqyds;
     this.model.no_of_plots = data.no_of_plots;
     this.model.rate_per_plot = data.rate_per_plot;
     this.model.address  = data.address;
     this.model.First_Name =data.First_Name;
     this.model.Surname  =data.Surname;
     this.model.Username =data.Username;
     this.model.Email_Address = data.Email_Address;
     this.model.Date_of_Joining = new Date(data.Date_of_Joining);
     this.model.Date_of_Birth  = new Date(data.Date_of_Birth);
     this.model.perks  = data.perks;
     this.model.Password = data.Password;
     this.model.Confirm_Password =data.Confirm_Password;
     this.model.Sponsor =data.Sponsor;
     this.model.Name_of_Nominee =data.Name_of_Nominee;
     this.model.Mobile_Number =data.Mobile_Number;
     this.model.Pan_Card_Number =data.Pan_Card_Number;
     this.model.Aadhaar_Number =data.Aadhaar_Number;
     this.model.Bank_Name =data.Bank_Name;
     this.model.IFSC_Code =data.IFSC_Code;
     this.model.Bank_Account_Number = data.Bank_Account_Number;
     this.model.IsOptingforStar1Autopool = data.IsOptingforStar1Autopool;
     this.model.UpgradeAmountPaid = data.UpgradeAmountPaid;
     this.model.Id = data.Id;
     this.model.Gender = data.Gender;
  }
}
