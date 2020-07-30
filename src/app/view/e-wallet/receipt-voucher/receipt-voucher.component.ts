import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { combineLatest, Subscription } from 'rxjs';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-receipt-voucher',
  templateUrl: './receipt-voucher.component.html',
  styleUrls: ['./receipt-voucher.component.css']
})
export class ReceiptVoucherComponent implements OnInit {
  Guid : string;
  modalRef: BsModalRef;
 
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.Guid = null;
  }
  // const data = {
  //   ActionTaken : this.Guid?'Update':'Insert',
  //   Id : this.model.Id,
  //   RefId :0,
  
  // };
  openModal(template: TemplateRef<any>){
    // const modalRef = this.modalService.open(ModelComponent, { size: 'lg', backdrop: 'static' });
    this.modalRef = this.modalService.show(template);  
  }

}
