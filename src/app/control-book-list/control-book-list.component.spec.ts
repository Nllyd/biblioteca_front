import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlBookListComponent } from './control-book-list.component';

describe('ControlBookListComponent', () => {
  let component: ControlBookListComponent;
  let fixture: ComponentFixture<ControlBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlBookListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
