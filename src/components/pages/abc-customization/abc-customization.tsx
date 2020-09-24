import { Component, Fragment, h, Prop } from '@stencil/core';

@Component({
  tag: 'abc-customization',
  shadow: true,
})
export class AbcIconComponent {
  @Prop({ reflect: true, mutable: true }) values: any;

  componentWillLoad() {
    if (typeof this.values === 'object') {
      const valuesSize = Object.keys(this.values).length;
      if (valuesSize !== 22) return;
      console.log(valuesSize);

      Object.entries(this.values).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, String(value));
      });
    }
  }

  render() {
    return <Fragment></Fragment>;
  }
}
