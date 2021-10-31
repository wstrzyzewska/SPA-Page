import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<any>();

  constructor() { }

  sendMessage(message:string){
    this.subject.next(message);
  }

  getMessage():Observable<any>{
    return this.subject.asObservable();
  }
}
