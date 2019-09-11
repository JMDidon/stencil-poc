import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'm-panel',
  styleUrls: ['m-panel.scss'],
  template: `
      <aside class="{{ this.open ? 'm-panel m-panel--open' : 'm-panel' }}">
        <aside class="m-panel__overlay" (click)="close()"></aside>
        <section class="m-panel__content">
          <div class="m-panel__main">
            <slot name="content"></slot>
          </div>
          <footer class="m-panel__footer">
            <m-button (click)="close()">Close !</m-button>
          </footer>
        </section>
      </aside>`,
})
export class MPanel {
  @Input() open: boolean = false;
  @Output() dismiss: EventEmitter<boolean> = new EventEmitter();

  close() {
    this.dismiss.emit(false);
    this.open = false;
  }
}
