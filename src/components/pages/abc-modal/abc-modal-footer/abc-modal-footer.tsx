import { Component, h } from '@stencil/core';

@Component({
  tag: 'abc-modal-footer',
  styleUrl: './abc-modal-footer.css',
  shadow: true,
})
export class AbcModalFooterComponent {
  render() {
    // const color = `abc-paragraph ${this.color}`;
    return (
      <section id="actions">
        <slot />
      </section>
    );
  }
}
