import { NgModule } from '@angular/core';
import {
    MemberServices,
    SettingServices

} from './'

@NgModule({
    providers: [
        MemberServices,
        SettingServices
    ]
})

export class ServicesModule {

}