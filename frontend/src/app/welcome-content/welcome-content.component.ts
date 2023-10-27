import { Component } from '@angular/core';

import { Message } from '../message';
import { MyHttpService } from '../my-http.service';

@Component({
  selector: 'app-welcome-content',
  templateUrl: './welcome-content.component.html',
  styleUrls: ['./welcome-content.component.css']
})
export class WelcomeContentComponent {

  content: string = "";

  constructor(private http: MyHttpService) {}

  ngOnInit(): void {
    this.http.get("/public/messages").subscribe((data: Message) => this.content = data.message);
  }

}
