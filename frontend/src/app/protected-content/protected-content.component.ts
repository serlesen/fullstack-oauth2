import { Component } from '@angular/core';

import { Message } from '../message';
import { MyHttpService } from '../my-http.service';

@Component({
  selector: 'app-protected-content',
  templateUrl: './protected-content.component.html',
  styleUrls: ['./protected-content.component.css']
})
export class ProtectedContentComponent {

  content: string = "";

  constructor(private http: MyHttpService) {}

  ngOnInit(): void {
    this.http.getPrivate("/messages").subscribe((data: Message) => this.content = data.message);
  }
}
