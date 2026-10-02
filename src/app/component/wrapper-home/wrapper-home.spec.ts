import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WrapperHome } from './wrapper-home';

describe('WrapperHome', () => {
  let component: WrapperHome;
  let fixture: ComponentFixture<WrapperHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapperHome],
    }).compileComponents();

    fixture = TestBed.createComponent(WrapperHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
