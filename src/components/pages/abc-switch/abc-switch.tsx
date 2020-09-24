import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'abc-switch',
  styleUrl: './abc-switch.css',
  shadow: true,
})
export class AbcTitleComponent {
  @Prop({ reflect: true, mutable: true }) type: string = 'round';
  @Prop({ reflect: true, mutable: true }) value: number = 0;

  _changeValue() {
    if (this.value === 1) {
      this.value = 0;
    } else {
      this.value = 1;
    }
  }
  _isNotNmber() {
    if (isNaN(this.value)) {
      this.value = 0;
    }
  }

  @Watch('value')
  validateNumber(newValue: number, oldValue: number) {
    if (isNaN(newValue) || isNaN(oldValue)) {
      this._isNotNmber();
    }
  }
  componentWillLoad() {
    this._isNotNmber();
  }
  render() {
    const classes = `slider ${this.type === 'round' ? this.type : ''}`;
    return (
      <label class="switch" onChange={this._changeValue.bind(this)}>
        <input type="checkbox" checked={this.value === 1 ? true : false} />
        <span class={classes}></span>
      </label>
    );
  }
}
