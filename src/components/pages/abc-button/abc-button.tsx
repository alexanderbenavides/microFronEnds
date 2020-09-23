import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'abc-button',
  styleUrl: './abc-button.css',
  shadow: true,
})
export class AbcButtonComponent {
  @Prop() color: string;
  render() {
    // console.log(this.color, 'jdjjdjdjdj');
    return (
      <button type="button" class={this.color ? this.color : ''}>
        <slot />
      </button>
    );
  }
}
