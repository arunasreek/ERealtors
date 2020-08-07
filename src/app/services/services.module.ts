import { NgModule } from '@angular/core';
import {
    MemberServices,
    SettingServices,
    ReceiptServices,
    CommonServices
    

} from './'

@NgModule({
    providers: [
        MemberServices,
        SettingServices,
        ReceiptServices,
        CommonServices
        
    ]
})

export class ServicesModule {

}