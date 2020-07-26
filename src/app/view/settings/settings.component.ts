import { Component, OnInit } from '@angular/core';
import { DATE } from 'ngx-bootstrap/chronos/units/constants';
import {  SettingServices } from 'src/app/services';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingList:any;
  constructor(public settingService:SettingServices) { }

  ngOnInit(): void {
    this.getSettingList();
  }

  getSettingList(){
    this.settingService.getSettingList()
     .subscribe((res) => {
      this.settingList = res.Result;
      console.log(res);
    });
  }

  editSettingList(){
    
  }

}
