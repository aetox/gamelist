import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistHeaderComponent } from './movielist-header.component';

describe('MovielistHeaderComponent', () => {
  let component: MovielistHeaderComponent;
  let fixture: ComponentFixture<MovielistHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MovielistHeaderComponent]
    });
    fixture = TestBed.createComponent(MovielistHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
