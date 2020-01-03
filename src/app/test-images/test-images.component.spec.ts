import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestImagesComponent } from './test-images.component';

describe('TestImagesComponent', () => {
  let component: TestImagesComponent;
  let fixture: ComponentFixture<TestImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
