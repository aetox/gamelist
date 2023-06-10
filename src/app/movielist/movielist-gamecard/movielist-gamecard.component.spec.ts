import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistGamecardComponent } from './movielist-gamecard.component';

describe('MovielistGamecardComponent', () => {
  let component: MovielistGamecardComponent;
  let fixture: ComponentFixture<MovielistGamecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MovielistGamecardComponent]
    });
    fixture = TestBed.createComponent(MovielistGamecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
