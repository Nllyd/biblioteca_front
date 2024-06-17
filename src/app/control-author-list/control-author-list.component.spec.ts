import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAuthorListComponent } from './control-author-list.component';

describe('ControlAuthorListComponent', () => {
  let component: ControlAuthorListComponent;
  let fixture: ComponentFixture<ControlAuthorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlAuthorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlAuthorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
