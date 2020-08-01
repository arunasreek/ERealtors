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

    getMemberData(memberId:number,MonYear:string){
        return this.http.get<any>(`${this.config.apiEndpoint}/ERealtors/Member/GetMemberData/${memberId}/${MonYear}`).pipe(map((res: any) => {
            return res;
        }))
    }

    getMemberList(actionTaken:string,memberId:number){
        return this.http.get<any>(`${this.config.apiEndpoint}/ERealtors/Member/GetMemberList/${actionTaken}/${memberId}`).pipe(map((res: any) => {
            return res;
        }))
    }

    uploadMemberImage(formData: any) {
        return this.http.post<string>(`${this.config.apiEndpoint}/ERealtors/Member/PostMember/MemberImage`, formData).pipe(map((data: string) => {
            return data;
        }));
    }

    getBusinessTransaction(){
        return this.http.get<any>(`${this.config.apiEndpoint}/ERealtors/Member/GetBusinessTransactions`).pipe(map((data: any) => {
            return data;
        }));
    }

    getMemberRanks(){
        return this.http.get<any>(`${this.config.apiEndpoint}/ERealtors/Member/GetMemberRanks`).pipe(map((data: any) => {
            return data;
        }));
    }
}