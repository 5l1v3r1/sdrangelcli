import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmModComponent } from './am-mod.component';
import { ChannelHeaderComponent } from '../channel-header/channel-header.component';
import { ChannelMonitorComponent } from '../channel-monitor/channel-monitor.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonComponentsModule } from '../../common-components/common-components.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { CwKeyerComponent } from '../cw-keyer/cw-keyer.component';

describe('AmModComponent', () => {
  let component: AmModComponent;
  let fixture: ComponentFixture<AmModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AmModComponent,
        ChannelHeaderComponent,
        ChannelMonitorComponent,
        CwKeyerComponent
      ],
      imports: [
        RouterModule,
        FormsModule,
        MatCardModule,
        MatSelectModule,
        MatOptionModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatProgressBarModule,
        HttpClientTestingModule,
        CommonComponentsModule,
        ColorPickerModule
      ],
      providers: [
        {provide: ActivatedRoute, useValue: { snapshot: {parent: {params: {dix: 0, cix: 0}}}}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
