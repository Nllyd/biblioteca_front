import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlBookFormComponent } from './control-book-form.component';

describe('ControlBookFormComponent', () => {
  let component: ControlBookFormComponent;
  let fixture: ComponentFixture<ControlBookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlBookFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
