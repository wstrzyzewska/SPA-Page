import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bind-component',
  templateUrl: './my-bind-component.component.html',
  styleUrls: ['./my-bind-component.component.css']
})
export class MyBindComponentComponent implements OnInit {

  sourceMessage = "hello world"
  color = "pink"

  number = 0
  sum = 0

  username = ""
  lblInfo = ""

  constructor() { }

  ngOnInit(): void {
  }

  public btnOnClick(){
    this.sum = this.sum + Number(this.number)
  }

  validate(str:string){
    const regexp = new RegExp('[1-9]');
    return regexp.test(str)
  }

  public valueChange(){
    if(this.validate(this.username) == true){
      this.lblInfo="login contains number"
    }
    else{
      this.lblInfo="login ok"
    }
  }

}
