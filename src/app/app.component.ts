import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transfersValues: any[] = [];

  transfer($event){
    const transfer = {...$event, date: new Date()};
    this.transfersValues.push(transfer);
    console.log(this.transfersValues);
  }
}
