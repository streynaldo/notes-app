class NoteList extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');

    this.render();
  }
  set noteList(noteList) {
    this._noteList = noteList;
    this.render();
  }
  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }
  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }
      
      .list {
        display: grid;
        grid-template-columns: ${'repeat(3, 1fr)'};
      }

      @media screen and (max-width: 768px) {
        .list {
          grid-template-columns: ${'repeat(1, 1fr)'};
          margin: auto;
        }
      }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
    <div class='list'>
      <slot></slot>
    </div>
    `;
  }
}
customElements.define('note-list', NoteList);
