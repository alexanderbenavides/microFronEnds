import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'abc-icon',
  styleUrl: './abc-icon.css',
  shadow: true,
})
export class AbcIconComponent {
  @Prop() icon: string;
  @Prop() position: string;
  render() {
    const iconClass = `abc-icon abc-icon-${this.position ? this.position : ''}`;

    return <i class={iconClass}>{this.icon}</i>;
  }
}
