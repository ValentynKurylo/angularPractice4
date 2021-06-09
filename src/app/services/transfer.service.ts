import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  store: BehaviorSubject<string> = new BehaviorSubject<string>('anon')

  constructor() { }
}
