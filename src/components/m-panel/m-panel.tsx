import { Component, Event, EventEmitter, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'm-panel',
  styleUrl: 'm-panel.scss',
  shadow: true
})
export class Panel {
  @Prop() open: boolean = false;
  @Event() dismiss: EventEmitter;
  @Watch('open') watchOpen(newVal) {
    this.open = newVal;
  }

  close() {
    this.dismiss.emit(false);
    this.open = false;
  }

  render() {
    return (
      <aside class={ this.open ? 'm-panel m-panel--open' : 'm-panel' }>
        <aside class="m-panel__overlay" onClick={ () => this.close() }></aside>
        <section class="m-panel__content">
          <div class="m-panel__main">
            <slot name="content"></slot>
          </div>
          <footer class="m-panel__footer">
            <m-button onClick={ () => this.close() }>Close !</m-button>
          </footer>
        </section>
      </aside>
    );
  }
}
