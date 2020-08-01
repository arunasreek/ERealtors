import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';

@Injectable()
export class SettingServices {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }
 
    getSettingList() {
        return this.http.get<any>(`${this.config.apiEndpoint}/ERealtors/Setting/GetSettingList`).pipe(map((res: any) => {
            return res;
        }))
    }

    postSetting(data :  any){
        return this.http.post<any>(`${this.config.apiEndpoint}/ERealtors/Setting/PostSetting`,data).pipe(map((res: any) => {
            return res;
        }))
    }

    postAutoPoolSetting(data :  any){
        return this.http.post<any>(`${this.config.apiEndpoint}/ERealtors/Setting/PostAutoSetting`,data).pipe(map((res: any) => {
            return res;
        }))
    }

}