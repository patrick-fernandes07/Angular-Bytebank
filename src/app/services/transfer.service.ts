import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

private transfersValues: any[];

constructor() {
  this.transfersValues = [];
 }


 get transfers() {
   return this.transfersValues;
 }

 setTransfer(transfers: any) {
  this.hydrate(transfers)
  this.transfersValues.push(transfers);
 }

private hydrate(transfers: any) {
  transfers.date = new Date();
}

}
