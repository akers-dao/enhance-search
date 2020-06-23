// Import stylesheets
import "./style.css";
import { html, render } from "lit-html";
import { fromEvent } from "rxjs";
import { tap } from "rxjs/operators";
import { repeat } from "lit-html/directives/repeat.js";
import "@material/mwc-button";
import "@material/mwc-textfield";
import "@material/mwc-icon";
import "@material/mwc-list";
import "@material/mwc-list/mwc-list-item.js";
import "@material/mwc-menu";
import "./search-grid";

const names = ["React", "Angular", "Vue"];

let text = "FAST";

let cssClass = "";

const list = () =>
  names.map(
    name => html`
      <li>${name}</li>
    `
  );

const menu = (id: string) => {
  return html`
    <mwc-menu id=${id.toLowerCase()}>
      <mwc-list-item>Item 0</mwc-list-item>
      <mwc-list-item>Item 1</mwc-list-item>
      <mwc-list-item>Item 2</mwc-list-item>
      <mwc-list-item>Item 3</mwc-list-item>
    </mwc-menu>
  `;
};

const showMenu = name => {
  const menu = document.getElementById(name.toLowerCase()) as any;
  console.log(menu);
  menu.show();
};

const onChange = (e: any) => {
  text = e.target.value;
  renderView();
};

// Write TypeScript code!
const appdev = () => html`
  <div class="container">
    <mwc-textfield
      .value=${text}
      @input=${onChange}
      placeholder="Search"
      icon="search"
      
      type="text"
      fullwidth
    ></mwc-textfield>

    <search-grid></search-grid>
  </div>
`;

function changeName() {
  const index = Math.floor(Math.random() * Math.floor(3));
  text = names.find((v, i) => i === index);
  renderView();
}

const renderView = () => {
  render(appdev(), document.body);

  // for (const name of names) {
  //   const menu = document.getElementById(name.toLowerCase()) as any;
  //   const list = document.getElementById(name.toLowerCase() + "list") as any;
  //   menu.anchor = list;
  // }
};

renderView();
