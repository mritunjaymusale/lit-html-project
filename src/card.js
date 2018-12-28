import { html } from 'lit-html';

export const card = (card_colour,text_colour='white-text')=>html`<div class="row">
<div class="col s12 m6">
  <div class="card ${card_colour} darken-1">
    <div class="card-content ${text_colour}">
      <span class="card-title">Card Title</span>
      <p>I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</div>`;