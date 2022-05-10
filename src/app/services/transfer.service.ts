import { Transfer } from './../models/transfer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

private transfersValues: any[];
private url = 'http://localhost:3000/transfer';

constructor(private httpClient: HttpClient) {
  this.transfersValues = [];
 }

 get transfers() {
   return this.transfersValues;
 }

 all(): Observable<Transfer[]> {
   return this.httpClient.get<Transfer[]>(this.url);
 }

 setTransfer(transfers: Transfer): Observable<Transfer> {
  this.hydrate(transfers)
  return this.httpClient.post<Transfer>(this.url, transfers);
 }

private hydrate(transfers: any) {
  transfers.date = new Date();
}

}
