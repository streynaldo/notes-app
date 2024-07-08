class AppBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        

<nav class="bg-coklatMain flex border-gray-200">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">Notes-Ku</span>
    </a>
  </div>
</nav>
        `;
  }
}
customElements.define("app-bar", AppBar);
