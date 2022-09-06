import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingsNewComponent } from './votings-new.component';

describe('ElementsNewComponent', () => {
  let component: VotingsNewComponent;
  let fixture: ComponentFixture<VotingsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VotingsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
