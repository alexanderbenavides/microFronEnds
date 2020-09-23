import { Component, Element, h, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'abc-lazy-loading',
  styleUrl: './abc-lazy-loading.css',
  shadow: true,
})
export class AbcLazyLoadingComponent {
  @Prop({ reflect: true, mutable: true }) multiple: string = '';
  @Prop({ reflect: true, mutable: true }) columns: number = 1;
  @Element() el: HTMLElement;
  @State() totalCards: number = 1;
  @State() cardHeigh: number = 388;

  _checkIfValidNumber() {
    if (isNaN(this.columns)) {
      this.columns = 1;
    } else {
      if (this.columns < 1) {
        this.columns = 1;
      }
      if (this.columns > 8) {
        this.columns = 8;
      }
    }
  }

  _renderTotalLazyLadings() {
    document.documentElement.style.setProperty('--total-columns', String(this.columns));
    const height = window.innerHeight;
    const width = window.innerWidth;
    this._totalCards(height, width);
  }

  @Listen('resize', { target: 'window' })
  onHeightOrWidth(event: any) {
    const height = event.target.innerHeight;
    const width = event.target.innerWidth;
    this._totalCards(height, width);
  }
  _totalCards(height: number, width: number) {
    if (width > 768) {
      this.totalCards = Math.ceil(height / this.cardHeigh) * this.columns;
    } else {
      this.totalCards = Math.ceil(height / this.cardHeigh) * 1;
    }
  }
  componentWillLoad() {
    const isMultiple = this.multiple === 'true';
    if (isMultiple) {
      this._checkIfValidNumber();
    } else {
      this.columns = 1;
    }
    this._renderTotalLazyLadings();
  }

  render() {
    return (
      <section id="loaderContainer">
        {[...Array(this.totalCards).keys()].map(number => {
          return (
            <div class="container" id={'_' + number}>
              <section class="card">
                <figure class="card-image loading"></figure>
                <div class="card-detail">
                  <h3 class="card-title loading"></h3>
                  <p class="card-description loading"></p>
                </div>
              </section>
            </div>
          );
        })}
      </section>
    );
  }
}
