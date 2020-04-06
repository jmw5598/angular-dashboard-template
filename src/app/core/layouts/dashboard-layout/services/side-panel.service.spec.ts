import { TestBed } from '@angular/core/testing';

import { SidePanelService } from './side-panel.service';

describe('SidePanelService', () => {
  let service: SidePanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidePanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
