import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomerServices {
    /**
     *
     */
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    getPrivileges() {
        return this.http.get<any[]>(`${this.config.apiEndpoint}/Privilege`).pipe(map((data: any) => {
            return data;
        }));
    }

    postRolesPrivileges(data: any) {
        return this.http.post<any>(`${this.config.apiEndpoint}/Role`, data).pipe(map((res: any) => {
            return res;
        }))
    }

    getPrivilegesByRoleId(id) {
        return this.http.get<any>(`${this.config.apiEndpoint}/Role/${id}/Previlege`).pipe(map((res: any) => {
            return res;
        }))
    }
}