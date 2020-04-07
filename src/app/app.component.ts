import { Component } from '@angular/core';
import { SidePanelState, DashboardLayoutConfiguration, SidePanelPosition } from './core';
import { NavigationLink } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public configuration: DashboardLayoutConfiguration;
  public links: NavigationLink[];
  
  constructor() {
    this.configuration = new DashboardLayoutConfiguration(
      SidePanelPosition.LEFT, 
      SidePanelState.OPEN
    );
    this.createLinks();
  }

  private createLinks() {
    this.links = [
      new NavigationLink("Home", ['home'], "fas fa-home"),
      new NavigationLink("Dashboard", ['dashbaord'], "fas fa-tachometer-alt"),
      new NavigationLink("Account Info", ['account'], "fas fa-user-circle")
    ]
  }
}
