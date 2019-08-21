import { Component, h } from '@stencil/core';

@Component({
  tag: 'm-button',
  styleUrl: 'm-button.scss',
  shadow: true
})
export class MyComponent {
  render() {
    return (
      <button class="m-button">
        <slot />
      </button>
    );
  }
}
