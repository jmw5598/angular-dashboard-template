import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NavigationSidePanelComponent } from './components/navigation-side-panel/navigation-side-panel.component';
import { SingleDoubleClickDirective } from './directives/single-double-click.directive';

@NgModule({
  declarations: [
    NavigationBarComponent, 
    NavigationSidePanelComponent, 
    SingleDoubleClickDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationBarComponent, 
    NavigationSidePanelComponent, 
    SingleDoubleClickDirective
  ]
})
export class SharedModule { }
