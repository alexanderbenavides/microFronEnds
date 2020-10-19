import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'abc-input',
  styleUrl: './abc-input.css',
  shadow: true,
})
export class AbcIconComponent {
  @Prop() icon: string;
  @Prop() position: string;
  render() {
    return <input type="text" />;
  }
}
