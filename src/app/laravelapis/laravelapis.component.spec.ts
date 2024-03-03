import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaravelapisComponent } from './laravelapis.component';

describe('LaravelapisComponent', () => {
  let component: LaravelapisComponent;
  let fixture: ComponentFixture<LaravelapisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaravelapisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaravelapisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
