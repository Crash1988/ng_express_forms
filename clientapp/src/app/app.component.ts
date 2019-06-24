import { Component } from '@angular/core';
import { ApiCallsService } from './_services/api-calls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clientapp';
  constructor(public apiCallsService: ApiCallsService){}

  testServer() {
    this.apiCallsService.testServer().subscribe(res => {
      console.log(res);
    });
  }
}
