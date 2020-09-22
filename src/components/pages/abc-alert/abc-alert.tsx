import { Component, Prop, h, Element, Method } from '@stencil/core';

@Component({
  tag: 'abc-alert',
  styleUrl: './abc-alert.css',
  shadow: true,
})
export class AbcAlertComponent {
  @Element() notification: HTMLElement;
  @Prop() title: string;
  @Prop() content: string;
  @Prop() type: string;
  @Prop({ reflect: true, mutable: true }) opened: boolean;
  // closeButton() {
  //   const notification = this.notification.shadowRoot.querySelector('.abc-alert') as HTMLElement;
  //   notification.style.display = 'none';
  // }

  @Method()
  open() {
    this.opened = true;
  }
  _close() {
    this.opened = false;
  }

  render() {
    const classes = `abc-alert ${this.type ? this.type : ''}`;
    return (
      <div class={classes}>
        <slot />
        <abc-title color="dark">{this.title}</abc-title>
        <abc-paragraph color="white">{this.content}</abc-paragraph>
        <abc-icon icon="×" position="absolute" onClick={this._close.bind(this)}></abc-icon>
      </div>
    );
  }
}
