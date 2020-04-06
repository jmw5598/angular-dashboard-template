import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SidePanelState } from '../models/side-panel-state.enum';

@Injectable({
  providedIn: 'root'
})
export class SidePanelService {
  private _panelState: SidePanelState;
  private _panelStateSource: BehaviorSubject<SidePanelState>;
  public panelStateChanges: Observable<SidePanelState>;

  constructor() {
    this._panelState = SidePanelState.OPEN;
    this._panelStateSource = new BehaviorSubject<SidePanelState>(this._panelState);
    this.panelStateChanges = this._panelStateSource.asObservable();
  }

  public changeState(state: SidePanelState): void {
    this._panelState = state;
    this._panelStateSource.next(this._panelState);
  }
}
