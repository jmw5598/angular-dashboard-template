import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GridContainerComponent } from './components/grid/grid-container/grid-container.component';
import { GridCellDirective } from './components/grid/grid-cell/grid-cell.directive';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NavigationSidePanelComponent } from './components/navigation-side-panel/navigation-side-panel.component';
import { SingleDoubleClickDirective } from './directives/single-double-click.directive';

@NgModule({
  declarations: [
    GridCellDirective,
    GridContainerComponent,
    NavigationBarComponent, 
    NavigationSidePanelComponent, 
    SingleDoubleClickDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    GridCellDirective,
    GridContainerComponent,
    NavigationBarComponent, 
    NavigationSidePanelComponent, 
    SingleDoubleClickDirective
  ]
})
export class SharedModule { }
