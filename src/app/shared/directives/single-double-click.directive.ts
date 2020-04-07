import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[singleDoubleClick]'
})
export class SingleDoubleClickDirective {

  @Output()
  public onSingleClick: EventEmitter<void>;

  @Output()
  public onDoubleClick: EventEmitter<void>;

  private _singleClickTimeout;
  private _isDoubleClick: boolean;

  constructor() {
    this._isDoubleClick = false;
    this.onSingleClick = new EventEmitter<void>();
    this.onDoubleClick = new EventEmitter<void>();
  }

  @HostListener('click', ['$event'])
  private processClick(event) {
    event.stopPropagation();
    if (this._isDoubleClick === true) {
      clearTimeout(this._singleClickTimeout);
      this._isDoubleClick = false;
      this.onDoubleClick.next()
    } else {
      this._isDoubleClick = true;
      this._singleClickTimeout = setTimeout(() => {
        this.onSingleClick.next();
        this._isDoubleClick = false;
      }, 250);
    }
  }
}
