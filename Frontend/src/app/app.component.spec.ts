import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule, NgxUiLoaderModule],
    declarations: [AppComponent, HeaderComponent]
  });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

});

  it('Should Create The App', () => {
    expect(component).toBeTruthy();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Frontend');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   const contentElement = compiled.querySelector('.content span');
  //   expect(contentElement).toBeTruthy(); // Check if the element exists
  //   expect(contentElement?.textContent).toContain('Frontend app is running!');
  // });
  
});
