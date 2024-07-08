class FooterBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
            <footer class="bg-coklatMain flex border-gray-200">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <p class="text-center text-white">© 2024 Notes-Ku</p>
                </div>
            </footer>
        `;
  }
}
customElements.define("footer-bar", FooterBar);
