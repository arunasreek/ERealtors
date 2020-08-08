import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IToken, ICommonResult } from '../models';
import { AppConfig, APP_CONFIG } from '../config/app.config.module';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    // login(username: string, password: string) {
    //     let body = `UserName=${username}&Password=${password}&grant_type=password`;
    //     let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //     return this.http.post<any>(`${this.config.apiEndpoint}/token`, body, { headers: headers })
    //         .pipe(map((user: IToken) => {
    //             // login successful if there's a jwt token in the response
    //             if (user && user.access_token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //                 this.currentUserSubject.next(user);
    //             }
    //             return user;
    //         }));
    // }
    login(username: string, password: string) {
        return this.http.post<any>(`${this.config.apiEndpoint}/ERealtors/Member/AuthUser`, {memberId:username,password:password})
                .pipe(map((data:any) => {
                        if(data.Result.length>0){
                            localStorage.setItem('currentUser', JSON.stringify(data.Result));
                            this.currentUserSubject.next(data.Result);
                            return "true";
                        }
                    return "false";
                }));
    }


    getOrgDetails(orgId: number) {
        return this.http.get<ICommonResult>(`${this.config.apiEndpoint}/Organisation/${orgId}`).pipe(map((data: any) => {
            return data;
        }));
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}