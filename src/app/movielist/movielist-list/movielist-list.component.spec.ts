import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistListComponent } from './movielist-list.component';

describe('MovielistListComponent', () => {
  let component: MovielistListComponent;
  let fixture: ComponentFixture<MovielistListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MovielistListComponent]
    });
    fixture = TestBed.createComponent(MovielistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
