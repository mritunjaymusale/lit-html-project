import { html } from 'lit-html';

const sidenav=html`
<ul id="slide-out" class="sidenav">
   
    
  </ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class=" white material-icons">menu</i></a>
`;

export const navbar=(color,title,links) => html`
<nav>
<div class="nav-wrapper ${color}">
  <a href="${title.href}" class="brand-logo ${title.location}">${title.text}</a>
  <ul id="nav-mobile" class="right hide-on-med-and-down">
  ${links.map((item) => html` <li><a href="${item.link}">${item.text}</a></li>`)}
</ul>
</div>
</nav> 
${sidenav}
`;
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});