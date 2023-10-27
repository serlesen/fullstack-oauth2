import { Component } from '@angular/core';

import { MyHttpService } from '../my-http.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  url: string = "";

  constructor(private http: MyHttpService) {}

  ngOnInit(): void {
     this.http.get("/auth/url").subscribe((data: any) => this.url = data.authURL);
  }

}
