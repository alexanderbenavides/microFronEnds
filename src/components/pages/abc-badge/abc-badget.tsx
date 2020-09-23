import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'abc-badget',
  styleUrl: './abc-badget.css',
  shadow: true,
})
export class AbcBadgeComponent {
  @Prop({ reflect: true, mutable: true }) number: number = 0;

  _isNotNmber() {
    if (isNaN(this.number)) {
      this.number = 0;
    }
  }
  componentWillLoad() {
    this._isNotNmber();
  }

  @Watch('number')
  validateNumber(newValue: number, oldValue: number) {
    if (isNaN(newValue) || isNaN(oldValue)) {
      this._isNotNmber();
    }
  }

  render() {
    // console.log(this.color, 'jdjjdjdjdj');
    return <div> {this.number} </div>;
  }
}
