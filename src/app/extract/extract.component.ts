import { Transfer } from './../models/transfer.model';
import { TransferService } from './../services/transfer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  transfersValues: any[] = [];


  constructor(private service: TransferService) {};

  ngOnInit(): void {
    this.service.all().subscribe((transfersValues: Transfer[]) => {
      this.transfersValues = transfersValues;
    })
  }

}
