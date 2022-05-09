import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFirstObservableComponent } from './create-first-observable.component';

describe('CreateFirstObservableComponent', () => {
  let component: CreateFirstObservableComponent;
  let fixture: ComponentFixture<CreateFirstObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFirstObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFirstObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
