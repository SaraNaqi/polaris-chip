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
  }

  static get styles() {
    return css`
      .card {
  max-width:400px;
  border: 2px solid #ddd;
  padding: 16px;
}
.card-image{
  height: 200px;
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
.fancy {
    background-color: blue;
    border-color: black;
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

  render() {
    return html`<div>
<h1>Card changing controls</h1>
<h2>Controls</h2>
<div class="control-wrapper">
  <button class="duplicate">Clone Card</button>
  <button class="title">Change title</button>
  <button class="img-change">Change image</button>
  <button id="bg-change">Change background</button>
  <button id="delete">Delete card</button>
</div>

<div class = "card-list">
<div class = "card">
  <div class ="class-header">
  <img
       class = "card-image"
       src = "https://www.w3schools.com/bootstrap4/img_avatar1.png"
       alt = "card-image"
       />
    <h2> Sara Naqi's Card</h2>
  </div>
  <div class ="card-body">
    <div class ="section">
  <p> this is a card that has a header and details </p>
    </div>
    
    <div>
    <a class = "details-button" href="https://hax.psu.edu">
      details
    </a>
  </div>
  </div>
<h1>Card changing controls</h1>
<h2>Controls</h2>
<div class="control-wrapper">
  <button class="duplicate">Clone Card</button>
  <button class="title">Change title</button>
  <button class="img-change">Change image</button>
  <button id="bg-change">Change background</button>
  <button id="delete">Delete card</button>
</div>

<div class = "card-list">
<div class = "card">
  <div class ="class-header">
  <img
       class = "card-image"
       src = "https://www.w3schools.com/bootstrap4/img_avatar1.png"
       alt = "card-image"
       />
    <h2> Sara Naqi's Card</h2>
  </div>
  <div class ="card-body">
    <div class ="section">
  <p> this is a card that has a header and details </p>
    </div>
    
    <div>
    <a class = "details-button" href="https://hax.psu.edu">
      details
    </a>
  </div>
  </div>
<h1>Card changing controls</h1>
<h2>Controls</h2>
<div class="control-wrapper">
  <button class="duplicate">Clone Card</button>
  <button class="title">Change title</button>
  <button class="img-change">Change image</button>
  <button id="bg-change">Change background</button>
  <button id="delete">Delete card</button>
</div>

<div class = "card-list">
<div class = "card">
  <div class ="class-header">
  <img
       class = "card-image"
       src = "https://www.w3schools.com/bootstrap4/img_avatar1.png"
       alt = "card-image"
       />
    <h2> Sara Naqi's Card</h2>
  </div>
  <div class ="card-body">
    <div class ="section">
  <p> this is a card that has a header and details </p>
    </div>
    
    <div>
    <a class = "details-button" href="https://hax.psu.edu">
      details
    </a>
  </div>
  </div>
<h1>Card changing controls</h1>
<h2>Controls</h2>
<div class="control-wrapper">
  <button class="duplicate">Clone Card</button>
  <button class="title">Change title</button>
  <button class="img-change">Change image</button>
  <button id="bg-change">Change background</button>
  <button id="delete">Delete card</button>
</div>

<div class = "card-list">
<div class = "card">
  <div class ="class-header">
  <img
       class = "card-image"
       src = "https://www.w3schools.com/bootstrap4/img_avatar1.png"
       alt = "card-image"
       />
    <h2> Sara Naqi's Card</h2>
  </div>
  <div class ="card-body">
    <div class ="section">
  <p> this is a card that has a header and details </p>
    </div>
    
    <div>
    <a class = "details-button" href="https://hax.psu.edu">
      details
    </a>
  </div>
  </div>
<h1>Card changing controls</h1>
<h2>Controls</h2>
<div class="control-wrapper">
  <button class="duplicate">Clone Card</button>
  <button class="title">Change title</button>
  <button class="img-change">Change image</button>
  <button id="bg-change">Change background</button>
  <button id="delete">Delete card</button>
</div>

<div class = "card-list">
<div class = "card">
  <div class ="class-header">
  <img
       class = "card-image"
       src = "https://www.w3schools.com/bootstrap4/img_avatar1.png"
       alt = "card-image"
       />
    <h2> Sara Naqi's Card</h2>
  </div>
  <div class ="card-body">
    <div class ="section">
  <p> this is a card that has a header and details </p>
    </div>
    
    <div>
    <a class = "details-button" href="https://hax.psu.edu">
      details
    </a>
  </div>
  </div></div>`;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
