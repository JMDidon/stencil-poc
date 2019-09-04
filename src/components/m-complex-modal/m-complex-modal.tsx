import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

export type ComplexModalContents = {
  title: string,
  content: string,
  footer: string,
};

@Component({
  tag: 'm-complex-modal',
  styleUrl: 'm-complex-modal.scss',
  shadow: true
})
export class ComplexModal {
  @Prop({ reflect: true }) open: boolean = false;
  @Prop({ reflect: true }) contents: ComplexModalContents = {
    title: '',
    content: '',
    footer: '',
  };
  @Event() dismiss: EventEmitter;

  close() {
    this.dismiss.emit(false);
    this.open = false;
  }

  render() {
    return (
      <dialog class="m-complex-modal" open={this.open}>
        <div class="m-complex-modal__content">
          <h1>{this.contents.title}</h1>
          <p>{this.contents.content}</p>
          <footer>
            <p>{this.contents.footer}</p>
            <m-button onClick={ () => this.close() }>Close</m-button>
          </footer>
        </div>
      </dialog>
    );
  }
}
