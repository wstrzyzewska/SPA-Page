import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  msg = ""

  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
  }

  public btnOnClick(){
    this.messageService.sendMessage("info from component1: " + this.msg)
  }

}
