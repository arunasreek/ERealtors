import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';

@Injectable()
export class CommonServices {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getSponserList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/ERealtors/Member/GetSponserList`).pipe(map((res: any) => {
            return res;
        }))
    }

    getGenealogy(custmerId:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/ERealtors/Member/GetGenealogy/${custmerId}`).pipe(map((res: any) => {
            return res;
        }))
    }

    getStatement(custmerId:number) {
        return this.http.get<any>(`${this.config.apiEndpoint}/ERealtors/Member/GetStatementOfAccount/${custmerId}`).pipe(map((res: any) => {
            return res;
        }))
    }
}