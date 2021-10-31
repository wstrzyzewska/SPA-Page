import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  message = ""

  subscription!: Subscription;

  constructor(private messageService:MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(
      message=>{this.message = message;}
    )
   }

  ngOnInit(): void {
  }

}
