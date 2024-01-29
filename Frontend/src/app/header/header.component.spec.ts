import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it('should have a navbar-brand with text "Guess Me"', () => {
    const brandElement = fixture.nativeElement.querySelector('.navbar-brand');
    expect(brandElement).toBeTruthy();
    expect(brandElement.textContent).toContain('Guess Me'); // it is checking the guess me word
  });

  it("Should have Admin in the class form-inline", () => {
    const adminElement = fixture.nativeElement.querySelector('#admin-tag');
    expect(adminElement).toBeTruthy();
    expect(adminElement.textContent).toContain('Admin');    // checked for admin
  })

});
