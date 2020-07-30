import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';

@Injectable()
export class PaymentServices {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }


    getDue(data: any) {
        return this.http.post<any>(`${this.config.apiEndpoint}/ERealtors/Voucher/GetPaymentVList`, data).pipe(map((res: any) => {
            return res;
        }))
    }
    getView(data:any) {
        return this.http.post<any>(`${this.config.apiEndpoint}/ERealtors/Voucher/GetPaymentVList`, data).pipe(map((res: any) => {
            return res;
        }))
    }
    posPaymentVoucher(data:any) {
        return this.http.post<any>(`${this.config.apiEndpoint}/ERealtors/Voucher/GetPaymentVList`, data).pipe(map((res: any) => {
            return res;
        }))
    }
  
}