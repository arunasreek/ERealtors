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

}