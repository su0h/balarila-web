import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarCheckPageComponent } from './grammar-check-page.component';

describe('GrammarCheckPageComponent', () => {
  let component: GrammarCheckPageComponent;
  let fixture: ComponentFixture<GrammarCheckPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrammarCheckPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrammarCheckPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
