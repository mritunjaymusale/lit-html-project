import { html, render } from 'lit-html';
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import { navbar } from './nav-bar'
import {card} from './card'

var navbarContents = {
  color:"black",
  title: {
    href: '/',
    text: 'nav-bar',
    location: 'center'
  },
  links: [{
    text: 'link1',
    link: "/link1"
  }, {
    text: 'link2',
    link: "/link2"
  }, {
    text: 'link3',
    link: "/link3"
  },]
}
var cardContents ={
  card_colour:'white',
  text_colour:'black-text'
}
// Declare a template
const page = html`
        ${navbar(navbarContents.color,navbarContents.title, navbarContents.links)}
        ${card(cardContents.card_colour,cardContents.text_colour)}
        `

// Render the template
render(page, document.body);