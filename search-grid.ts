import { LitElement, html, customElement, css } from "lit-element";
import { repeat } from "lit-html/directives/repeat.js";
import "@material/mwc-list";
import "@material/mwc-list/mwc-list-item.js";
import "@material/mwc-icon";

@customElement("search-grid")
export class SearchGrid extends LitElement {
  static styles = css`
    .container {
      color: green;
      border: 1px #b3b3b3 solid;
      height: 200px;
      border-top: 0px;
      border-radius: 4px;
    }
  `;

  apps = [
    { name: "Create Title", icon: "create" },
    { name: "Open Title", icon: "launch" }
  ];

  searchApps = () => {
    return html`
      <mwc-list>
        ${repeat(
          this.apps,
          item => item,
          item =>
            html`
              <mwc-list-item graphic="icon">
                <slot>${item.name}</slot>
                <mwc-icon slot="graphic">${item.icon}</mwc-icon>
              </mwc-list-item>
            `
        )}
        <li divider padded role="separator"></li>
      </mwc-list>
    `;
  };

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://unpkg.com/basscss@8.0.2/css/basscss.min.css"
      />
      <div class="container p1">
        ${this.searchApps()}
      </div>
    `;
  }
}
