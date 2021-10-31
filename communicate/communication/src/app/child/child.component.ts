import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  infoFromParent!: string;

  //może być też infoFromParent=""
  constructor() { }

  ngOnInit(): void {
  }

}
