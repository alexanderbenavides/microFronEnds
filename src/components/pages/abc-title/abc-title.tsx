import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'abc-title',
  styleUrl: './abc-title.css',
  shadow: true,
})
export class AbcTitleComponent {
  @Prop() color: string;
  render() {
    const color = `abc-title ${this.color ? this.color : ''}`;

    return (
      <p class={color}>
        <slot />
      </p>
    );
  }
}
