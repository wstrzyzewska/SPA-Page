import { Component, OnInit } from '@angular/core';
import { Countries } from '../myclasses/countries';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  myCountries = 'My Favourite Countries'

  countries_tab = [
    new Countries('Poland', 312679),
    new Countries('Ukraine', 9842859),
    new Countries('Russia', 64353),
    new Countries('Spain', 312421),
    new Countries('France', 84952),
    new Countries('Portugal', 679),
    new Countries('Italy', 31),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getRandomColor(){
    const color = 'rgb(' + Math.round(Math.random()*255) + ',' + 
    Math.round(Math.random()*255) + ',' + 
    Math.round(Math.random()*255) + ')';
    return color
  }

}
