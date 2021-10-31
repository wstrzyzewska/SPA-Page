import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBindComponentComponent } from './my-bind-component.component';

describe('MyBindComponentComponent', () => {
  let component: MyBindComponentComponent;
  let fixture: ComponentFixture<MyBindComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBindComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBindComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
