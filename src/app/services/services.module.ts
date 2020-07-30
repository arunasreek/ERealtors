import { NgModule } from '@angular/core';
import {
    MemberServices,
    SettingServices,
    ReceiptServices,
    PaymentServices

} from './'

@NgModule({
    providers: [
        MemberServices,
        SettingServices,
        ReceiptServices,
        PaymentServices
    ]
})

export class ServicesModule {

}