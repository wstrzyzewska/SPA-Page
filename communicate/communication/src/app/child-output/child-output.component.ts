import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {

  @Output()
  childMessage = new EventEmitter<string>()

  msg = ""

  constructor() { }

  ngOnInit(): void {
  }

  public btnOnClick(){
    this.childMessage.emit('Info from child: ' + this.msg)
  }
}
