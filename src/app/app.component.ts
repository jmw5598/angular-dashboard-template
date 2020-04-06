import { Component } from '@angular/core';
import { SidePanelState, DashboardLayoutConfiguration, SidePanelPosition } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public configuration: DashboardLayoutConfiguration;
  
  constructor() {
    this.configuration = new DashboardLayoutConfiguration(
      SidePanelPosition.LEFT, 
      SidePanelState.OPEN
    );
  }
}
