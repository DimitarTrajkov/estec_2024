import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZemljevidComponent } from './zemljevid.component';

describe('ZemljevidComponent', () => {
  let component: ZemljevidComponent;
  let fixture: ComponentFixture<ZemljevidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZemljevidComponent]
    });
    fixture = TestBed.createComponent(ZemljevidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
