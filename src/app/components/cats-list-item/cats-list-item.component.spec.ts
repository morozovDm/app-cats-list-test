import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsListItemComponent } from './cats-list-item.component';

describe('CatsListItemComponent', () => {
  let component: CatsListItemComponent;
  let fixture: ComponentFixture<CatsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
