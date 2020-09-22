import { Component, h } from '@stencil/core';

@Component({
  tag: 'abc-modal-body',
  styleUrl: './abc-modal-body.css',
  shadow: true,
})
export class AbcModalBodyComponent {
  render() {
    return (
      <section id="main">
        <slot></slot>
      </section>
    );
  }
}
