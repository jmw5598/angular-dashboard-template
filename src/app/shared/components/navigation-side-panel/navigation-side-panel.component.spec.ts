import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSidePanelComponent } from './navigation-side-panel.component';

describe('NavigationSidePanelComponent', () => {
  let component: NavigationSidePanelComponent;
  let fixture: ComponentFixture<NavigationSidePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationSidePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
