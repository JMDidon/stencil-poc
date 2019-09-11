import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'm-button',
  styleUrls: ['m-button.scss'],
  template: `
    <button class="m-button">
      <slot></slot>
    </button>
  `,
})
export class MButton {
  @Output() click: EventEmitter<UIEvent> = new EventEmitter();
}
