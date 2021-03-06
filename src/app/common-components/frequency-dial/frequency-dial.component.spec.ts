import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyDialComponent } from './frequency-dial.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('FrequencyDialComponent', () => {
  let component: FrequencyDialComponent;
  let fixture: ComponentFixture<FrequencyDialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequencyDialComponent ],
      imports: [
        FormsModule,
        MatSelectModule,
        MatTooltipModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencyDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
