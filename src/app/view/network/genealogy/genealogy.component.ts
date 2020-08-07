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
    this.commonService.getGenealogy(10001)
    .subscribe((res) => {
      if(res){
        var chart = new OrgChart(document.getElementById('tree'), {
          mouseScrool: OrgChart.action.none,
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

  get(data:any){
  

    var splitR = data.split('$');
    var newNodes = [
      { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
                    { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
                    { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
                    { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
                    { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
                    { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
                    { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
  ];

   
  // chart.load([newNodes]);
  }

}
