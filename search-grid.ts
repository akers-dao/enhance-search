import { LitElement, html, customElement, css } from "lit-element";
import { repeat } from "lit-html/directives/repeat.js";
import "@material/mwc-list";
import "@material/mwc-list/mwc-list-item.js";
import "@material/mwc-icon";

@customElement("search-grid")
export class SearchGrid extends LitElement {
  static styles = css`
    .container {

      --mdc-list-side-padding: 30px;
    }
    [mwc-list-item]:not([twoline]) {
      height: 40px;
    }
    [mwc-list-item][twoline] {
      height: 60px;
    }
    .heading {
      color: #ccc;
    }
    .header-icon {
      --mdc-icon-size: 16px;
    }
  `;

  apps = [
    { name: "Create New Contract", icon: "create" },
    { name: "Open Contract", icon: "launch" },
    { name: "Copy Contract", icon: "file_copy" }
  ];

  recents = [{ name: "CBS", icon: "search" }, { name: "NBC", icon: "search" }];

  items = [
    { name: "2 Oceans", icon: "search", secondary: "No# 37845 10/1/2012 Active" },
    { name: "Universal City", icon: "search", secondary: "No# 37463 10/1/2012 Inactive" }
  ];

  searchApps = () => {
    return html`
      <div class="ml1 mt2 heading flex items-center">
        <mwc-icon class="header-icon pr1">apps</mwc-icon>
        <span>Apps</span>
      </div>
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

  searchItems = () => {
    return html`
      <div class="ml1 mt2 heading flex items-center">
        <mwc-icon class="header-icon pr1">subject</mwc-icon>
        <span>Contracts</span>
      </div>
      <mwc-list>
        ${repeat(
          this.items,
          item => item,
          item =>
            html`
              <mwc-list-item graphic="icon" twoline>
                <slot>${item.name}</slot>
                <span slot="secondary">${item.secondary}</span>
                <mwc-icon slot="graphic">${item.icon}</mwc-icon>
              </mwc-list-item>
            `
        )}
        <li divider padded role="separator"></li>
      </mwc-list>
    `;
  };

  searchRecents = () => {
    return html`
      <div class="ml1 mt2 heading">Recent Searches</div>
      <mwc-list>
        ${repeat(
          this.recents,
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
        ${this.searchApps()} ${this.searchItems()} ${this.searchRecents()}
      </div>
    `;
  }
}
