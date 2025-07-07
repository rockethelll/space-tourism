import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopNavbar } from './desktop-navbar';

describe('DesktopNavbar', () => {
  let component: DesktopNavbar;
  let fixture: ComponentFixture<DesktopNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
