import { Component, OnInit } from '@angular/core';
import OrgChart from "@balkangraph/orgchart.js";
import { CommonServices } from 'src/app/services';
declare var $: any;

@Component({
  selector: 'app-genealogy',
  templateUrl: './genealogy.component.html',
  styleUrls: ['./genealogy.component.css']
})
export class GenealogyComponent implements OnInit {

  node :any[] = [];
  constructor(public commonService:CommonServices) { }

  ngOnInit(): void {
    this.commonService.getGenealogy(null)
    .subscribe((res) => {
      if(res){
        //  var mouseScroll: OrgChart.action.scroll,
        var chart = new OrgChart(document.getElementById('tree'), {
          
          enableSearch: true,
          nodeBinding: {
            field_0: "name",
            field_1: "title",
            img_0: "img"
          },
        });
      var data = res.Result;
       
      data.forEach((element,index) => {
        if(index === 0){
         var key = "pid";
         delete element[key];
        }
        console.log(element);
         chart.add(element);
       });
       chart.draw(OrgChart.action.init);
      }
    });
   
  }

}
