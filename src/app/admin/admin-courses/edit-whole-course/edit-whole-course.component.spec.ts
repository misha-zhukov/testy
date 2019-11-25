import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWholeCourseComponent } from './edit-whole-course.component';

describe('EditWholeCourseComponent', () => {
  let component: EditWholeCourseComponent;
  let fixture: ComponentFixture<EditWholeCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWholeCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWholeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
