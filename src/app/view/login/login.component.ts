import { Component, OnInit } from '@angular/core';
import { CommonServices } from 'src/app/services';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string;
  passWord:string;
  constructor(public authenticationService:AuthenticationService,
        public toaster:ToastrService,
        public myapp: AppComponent,
        private router: Router
  ) { }

  ngOnInit(): void {

  }

  login(){
    this.authenticationService.login(this.userName, this.passWord)
    .pipe(first())
    .subscribe(
        (data:any) => {
          if(data === 'true'){
            this.myapp.isNavbarShow = true;
            this.router.navigate([`/dashboard`]);
            this.toaster.success('success');
            this.myapp.isNavbarShow = true;
          }else{
            this.toaster.error('Username or password is incorrect','Unsuccess');
          }
        },
        error => {
            this.toaster.error('Username or password is incorrect','Unsuccess');
        });
  }

}
