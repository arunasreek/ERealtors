import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';

@Injectable()
export class MemberServices {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }


    postMember(data: any) {
        return this.http.post<any>(`${this.config.apiEndpoint}/ERealtors/Member/PostMemberData`, data).pipe(map((res: any) => {
            return res;
        }))
    }

    getSponserList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/ERealtors/Member/GetSponserList`).pipe(map((res: any) => {
            return res;
        }))
    }

    getMemberData(memberId:number){
        return this.http.get<any>(`${this.config.apiEndpoint}/ERealtors/Member/GetMemberData/${memberId}`).pipe(map((res: any) => {
            return res;
        }))
    }

    getMemberList(){
        return this.http.get<any>(`${this.config.apiEndpoint}/ERealtors/Member/GetMemberList`).pipe(map((res: any) => {
            return res;
        }))
    }
}