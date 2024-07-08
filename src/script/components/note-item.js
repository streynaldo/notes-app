class NoteItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _note = {
    id: null,
    title: null,
    body: null,
    createdAt: null,
    archived: false,
  };
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }
  set noteItem(noteItem) {
    this._note = noteItem;
    this.render();
  }
  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }

    .card {
    width: 150px;
    padding: 20px;
    background-color: #F6E6CB;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px;
  }


  .card-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  .card-body {
    font-size: 1rem;
    line-height: 1.4;
    color: #666;
  }

  @media screen and (max-width: 768px) {
    .card {
      width: 75%;
      margin: auto;
      margin-bottom: 10px;
      padding: 10px;
    }
    `;
  }
  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }
  get noteItem() {
    return this._noteItem;
  }
  render() {
    this._emptyContent();
    this._updateStyle();
    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
            <div class="card">
              <div class="card-title">${this._note.title}</div>
              <div class="card-body">
                ${this._note.body}
              </div>
            </div>
        `;
  }
}
customElements.define("note-item", NoteItem);
