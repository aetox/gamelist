import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistAddFormComponent } from './movielist-add-form.component';

describe('MovielistAddFormComponent', () => {
  let component: MovielistAddFormComponent;
  let fixture: ComponentFixture<MovielistAddFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MovielistAddFormComponent]
    });
    fixture = TestBed.createComponent(MovielistAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
