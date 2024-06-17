import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAuthorFormComponent } from './control-author-form.component';

describe('ControlAuthorFormComponent', () => {
  let component: ControlAuthorFormComponent;
  let fixture: ComponentFixture<ControlAuthorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlAuthorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlAuthorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
