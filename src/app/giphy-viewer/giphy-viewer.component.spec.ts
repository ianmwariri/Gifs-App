import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyViewerComponent } from './giphy-viewer.component';

describe('GiphyViewerComponent', () => {
  let component: GiphyViewerComponent;
  let fixture: ComponentFixture<GiphyViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
