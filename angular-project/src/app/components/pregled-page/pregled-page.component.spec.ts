import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledPageComponent } from './pregled-page.component';

describe('PregledPageComponent', () => {
  let component: PregledPageComponent;
  let fixture: ComponentFixture<PregledPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PregledPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PregledPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
