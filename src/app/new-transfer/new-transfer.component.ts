import { Transfer } from './../models/transfer.model';
import { TransferService } from './../services/transfer.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector:'app-new-transfer',
    templateUrl:'./new-transfer.component.html',
    styleUrls:['./new-transfer.component.scss']
})
export class NewTransferComponent {

  @Output() whenTransferring = new EventEmitter<any>();

  value: number;
  destiny: number;

  constructor(private service: TransferService, private router: Router) {}

  transfer() {
    const valueEmit: Transfer = { value: this.value, destiny: this.destiny };

    this.service.setTransfer(valueEmit).subscribe(result => {

    this.router.navigateByUrl('extract');
  }, (error) => console.error(error));

  }


}

