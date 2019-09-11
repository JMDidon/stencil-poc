import { Component, EventEmitter, Input, Output } from "@angular/core";

export type ComplexModalContents = {
  title: string,
  content: string,
  footer: string,
};

@Component({
  selector: 'm-complex-modal',
  styleUrls: ['m-complex-modal.scss'],
  template: `
      <dialog class="m-complex-modal" open="open">
        <div class="m-complex-modal__content">
          <h1>{{ contents?.title }}</h1>
          <p>{{ contents?.content }}</p>
          <footer>
            <p>{{ contents?.footer }}</p>
            <m-button (click)="close()">Close</m-button>
          </footer>
        </div>
      </dialog>
  `
})
export class MComplexModal {
  @Input() open: boolean = false;
  @Input() contents: ComplexModalContents = {
    title: '',
    content: '',
    footer: '',
  };
  @Output() dismiss: EventEmitter<boolean> = new EventEmitter();

  close() {
    this.dismiss.emit(false);
    this.open = false;
  }
}
