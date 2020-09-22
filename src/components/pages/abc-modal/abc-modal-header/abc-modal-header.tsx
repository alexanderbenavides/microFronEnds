import { Component, h } from '@stencil/core';

@Component({
  tag: 'abc-modal-header',
  styleUrl: './abc-modal-header.css',
  shadow: true,
})
export class AbcModalHeaderComponent {
  render() {
    return (
      <header>
        <slot></slot>
      </header>
    );
  }
}
