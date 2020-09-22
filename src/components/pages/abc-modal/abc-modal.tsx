import { Component, h, Method, Prop } from '@stencil/core';

@Component({
  tag: 'abc-modal',
  styleUrl: './abc-modal.css',
  shadow: true,
})
export class AbcModalComponent {
  @Prop({ reflect: true, mutable: true }) opened: boolean;

  @Method()
  open() {
    this.opened = true;
  }

  @Method()
  close() {
    this.opened = false;
  }
  render() {
    // const color = `abc-paragraph ${this.color}`;
    return [
      <div id="backdrop" onClick={this.close.bind(this)}></div>,
      <div id="modal">
        <slot />
      </div>,
    ];
  }
}
