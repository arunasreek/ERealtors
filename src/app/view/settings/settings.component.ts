import { Component, OnInit, ViewChild } from '@angular/core';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import {  SettingServices } from 'src/app/services';
import { ToastrService } from 'ngx-toastr';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  settingList:any;
  cadreForm: FormGroup;
  autoPoolForm: FormGroup;
  constructor(public settingService:SettingServices,private formBuilder: FormBuilder,
              public toastr: ToastrService) { }

  ngOnInit(): void {
    this.getSettingList();
    this.settingForm();
  }

  settingForm(){
    this.cadreForm = this.formBuilder.group({
      Cadre : ['',Validators.required],
      Target_Units: [0,Validators.required],
      Downline_Members: [0,Validators.required],
      Plots_SQYDS: [0,Validators.required],
      Rate_per_plot : [0,Validators.required],
      Incentive_Maximum_Amount : [0,Validators.required],
      Incentive_Percentage : [0,Validators.required],
      MFA_Minimum_Amount : [0,Validators.required],
      MFA_Percentage : [0,Validators.required],
      Bonanza_Maximum_Amount : [0,Validators.required],
      Bonanza_Percentage : [0,Validators.required],
      Perk1 : ['',Validators.required],
      Perk2: ['',Validators.required],
      Action: ['',Validators.required]
    });

    this.autoPoolForm = this.formBuilder.group({
      Autopool_Star_Level : ['',Validators.required],
      Autopool_Level : ['',Validators.required],
      Upgrade_Amount : [0,Validators.required],
      Downline_Members : [0,Validators.required]
    });
  }

  get f() { return this.cadreForm.controls; }

  getSettingList(){
    this.settingService.getSettingList()
     .subscribe((res) => {
      this.settingList = res.Result;
      console.log(res);
    });
  }

  postSetting(cTabName:string){
    this.cadreForm.controls['Action'].setValue(cTabName);
    this.settingService.postSetting(this.cadreForm.value)
    .subscribe((res) => {
    // this.settingList = res.Result;
      this.toastr.success('Data Saved Successfully','Success');
      this.staticTabs.tabs[0].active = true;
      this.cadreForm.reset();
   });
  }

  postAutoPool(){
    this.autoPoolForm.controls['Upgrade_Amount'].setValue(parseFloat(this.autoPoolForm.value.Upgrade_Amount));
    this.autoPoolForm.controls['Downline_Members'].setValue(parseInt(this.autoPoolForm.value.Downline_Members));
    this.settingService.postAutoPoolSetting(this.autoPoolForm.value)
    .subscribe((res) => {
      this.toastr.success('Data Saved Successfully','Success');
      this.staticTabs.tabs[0].active = true;
      this.autoPoolForm.reset();
   });
  }

  editSetting(cadre:string){
     var filterList =  this.settingList.find(x=>x.Cadre === cadre);
     this.cadreForm.setValue({
      Cadre : filterList.Cadre ,
      Target_Units:filterList.Target_Units ,
      Downline_Members:filterList.Downline_Members ,
      Plots_SQYDS:filterList.Plots_SQYDS ,
      Rate_per_plot :filterList.Rate_per_Plot ,
      Incentive_Maximum_Amount :filterList.Incentive_Maximum_Amount ,
      Incentive_Percentage :filterList.Incentive_Percentage ,
      MFA_Minimum_Amount :filterList.MFA_Minimum_Amount ,
      MFA_Percentage :filterList.MFA_Percentage ,
      Bonanza_Maximum_Amount :filterList.Bonanza_Maximum_Amount ,
      Bonanza_Percentage :filterList.Bonanza_Percentage ,
      Perk1 :filterList.Perk1 ,
      Perk2: filterList.Perk1 ,
      Action: 'Cadre'
     });

     this.staticTabs.tabs[1].active = true;

  }
}
