import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureFeeComponent } from './configure-fee.component';

describe('ConfigureFeeComponent', () => {
  let component: ConfigureFeeComponent;
  let fixture: ComponentFixture<ConfigureFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
