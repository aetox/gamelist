import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistComponent } from './movielist.component';

describe('MovielistComponent', () => {
  let component: MovielistComponent;
  let fixture: ComponentFixture<MovielistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MovielistComponent]
    });
    fixture = TestBed.createComponent(MovielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
