import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'abc-paragraph',
  styleUrl: './abc-paragraph.css',
  shadow: true,
})
export class AbcParagraphComponent {
  @Prop() color: string;

  render() {
    const color = `abc-paragraph ${this.color ? this.color : ''}`;
    return (
      <p class={color}>
        <slot />
      </p>
    );
  }
}
