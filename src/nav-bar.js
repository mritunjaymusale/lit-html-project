import { html } from 'lit-html';


export const navbar=(title,links) => html`
<nav>
<div class="nav-wrapper ">
  <a href="${title.href}" class="brand-logo ${title.location}">${title.text}</a>
  <ul id="nav-mobile" class="right  deep-orange hide-on-med-and-down">
  ${links.map((item) => html` <li><a href="${item.link}">${item.text}</a></li>`)
  }
</ul>
</div>
</nav> 
`;