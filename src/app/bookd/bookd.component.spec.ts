import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdComponent } from './bookd.component';

describe('BookdComponent', () => {
  let component: BookdComponent;
  let fixture: ComponentFixture<BookdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
