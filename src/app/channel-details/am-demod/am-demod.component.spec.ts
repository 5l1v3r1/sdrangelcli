import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmDemodComponent } from './am-demod.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatTooltipModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AmDemodComponent', () => {
  let component: AmDemodComponent;
  let fixture: ComponentFixture<AmDemodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmDemodComponent ],
      imports: [
        RouterModule,
        FormsModule,
        MatCardModule,
        MatSelectModule,
        MatOptionModule,
        MatCheckboxModule,
        MatTooltipModule,
        HttpClientTestingModule
      ],      
      providers: [
        {provide: ActivatedRoute, useValue: { snapshot: {parent: {params: {dix: 0, cix: 0}}}}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmDemodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});