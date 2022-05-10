import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferValues: any;
  destiny: number;

  transfer($event){
    this.transferValues = $event;
  }
}
