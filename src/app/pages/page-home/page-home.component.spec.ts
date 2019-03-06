import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeComponent } from './page-home.component';

describe('PageHomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.debugElement.nativeElement.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add simple numbers', () => {
    expect(component.addNumbers(2,2)).toEqual(4);
    expect(component.addNumbers(2,4)).toEqual(6);
    expect(component.addNumbers(12,42)).toEqual(54);
    expect(component.addNumbers(2,21)).toEqual(23);
    expect(component.addNumbers(-2,2)).toEqual(0);

    expect(component.addNumbers('jan', 'kowalski')).toEqual(null);
  });
});
