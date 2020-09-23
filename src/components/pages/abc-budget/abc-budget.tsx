import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'abc-budget',
  styleUrl: './abc-budget.css',
  shadow: true,
})
export class AbcBudgetComponent {
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
