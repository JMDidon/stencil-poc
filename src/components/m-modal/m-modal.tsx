import { Component, Event, EventEmitter, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'm-modal',
  styleUrl: 'm-modal.scss',
  shadow: true
})
export class Modal {
  @Prop() open: boolean = false;
  @Watch('open') watchOpen() {}
  @Event() dismiss: EventEmitter;

  close() {
    this.dismiss.emit(false);
    this.open = false;
  }

  render() {
    return (
      <dialog class="m-modal" open={this.open}>
        <div class="m-modal__content">
          <p>Da modal</p>
          <m-button onClick={ () => this.close() }>Close</m-button>
        </div>
      </dialog>
    );
  }
}
