import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
 super();
 this.title = "My card";
 this.image = "https://www.w3schools.com/bootstrap4/img_avatar1.png";
 this.alt = " card image ";
this.link = "https://hax.psu.edu"
this.fancy = false;
  }

  static get styles() {
    return css`
  :host {
    display: block;
    max-width: var(--mycard-max-width,400px);
  }
.card {
max-width:400px;
  border: 2px solid #ddd;
  padding: 16px;
  background-color: var(--my-card-fancy-bg, transparent);
}
.card-image{
  height: 200px;
  object-fit: cover;
}
:host([fancy]) {
display: inline-block;
  background-color: var(--my-card-fancy-bg, pink);
  border: 2px solid fuchsia;
  box-shadow: 10px 5px 5px red;
}
.details-button{
  color: red;
  background-color: black;
  border-radius: 20%;
  font-size: 25px;
  padding:20px;
   margin: 20px;
}
.details-button{
  display: inline-block;
}

@media (max-width: 800px) and (min-width: 501px) {
  .details-button {
    display: block;
  }
}
@media (max-width: 500px){
  .card {
    max-width: 300px;
    padding: 12px;
  }
  .card-image {
    height: 150px;
  }
}
    `;
  }

  openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

  render() {
    return html`
    <div class="card">
      <div class="class-header">
        <img class="card-image" src="${this.image}" alt="${this.alt}" />
        <h2>${this.title}</h2>
      </div>
    <details ?open="${this.fancy}" @toggle="${this.openChanged}">
    <summary> Description</summary>
    <div class="details-box">
      <slot> this is a simple card with a small image with it.</slot>
    </div>
    </details>
    <a class="details-button" href="${this.link}">details</a>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String },
      link: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
