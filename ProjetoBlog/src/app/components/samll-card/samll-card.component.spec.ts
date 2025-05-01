import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamllCardComponent } from './samll-card.component';

describe('SamllCardComponent', () => {
  let component: SamllCardComponent;
  let fixture: ComponentFixture<SamllCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamllCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamllCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
