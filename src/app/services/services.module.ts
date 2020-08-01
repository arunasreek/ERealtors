import { NgModule } from '@angular/core';
import {
    MemberServices,
    SettingServices,
    ReceiptServices
    

} from './'

@NgModule({
    providers: [
        MemberServices,
        SettingServices,
        ReceiptServices
        
    ]
})

export class ServicesModule {

}