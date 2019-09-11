import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'm-modal',
  styleUrls: ['m-modal.scss'],
  template: `
      <dialog class="m-modal" [open]="open">
        <div class="m-modal__content">
          <p>Da modal</p>
          <m-button (click)="close()">Close</m-button>
        </div>
      </dialog>
  `,
})
export class MModal {
  @Input() open: boolean = false;
  @Output() dismiss: EventEmitter<boolean> = new EventEmitter();

  close() {
    this.dismiss.emit(false);
    this.open = false;
  }
}
