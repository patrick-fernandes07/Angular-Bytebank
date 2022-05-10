import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector:'app-new-transfer',
    templateUrl:'./new-transfer.component.html',
    styleUrls:['./new-transfer.component.scss']
})
export class NewTransferComponent {

  @Output() whenTransferring = new EventEmitter<any>();

  value: number;
  destiny: number;

  transfer() {
    const valueEmit = { value: this.value, destiny: this.destiny };
    this.whenTransferring.emit(valueEmit);
    this.clearInputs();

  }

  clearInputs() {
    this.value = 0;
    this.destiny = 0;
  }

}

