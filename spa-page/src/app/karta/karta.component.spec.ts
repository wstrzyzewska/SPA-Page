import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KartaComponent } from './karta.component';

import {Component} from '@angular/core';

describe('KartaComponent', () => {
  let component: KartaComponent;
  let fixture: ComponentFixture<KartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KartaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'card-fancy-example',
  templateUrl: 'card-fancy-example.html',
  styleUrls: ['card-fancy-example.css'],
})
export class CardFancyExample {}
