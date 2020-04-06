import { SidePanelPosition } from './side-panel-position.enum';
import { SidePanelState } from './side-panel-state.enum';

export class DashboardLayoutConfiguration {
  constructor(
    public sidePanelPosition: SidePanelPosition,
    public initialSidePanelState: SidePanelState
  ) {}
}