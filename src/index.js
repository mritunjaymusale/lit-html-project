import { html, render } from 'lit-html';
import './materialize/materialize.js'
import './materialize/materialize.css'
import { navbar} from './nav-bar'
var navbarContents = {
 title : {
  href: '/',
  text: 'nav-bar',
  location :'center'
},
 links : [{
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
// Declare a template
const page = html` 
        ${navbar(navbarContents.title,navbarContents.links)}
      `

// Render the template
render(page, document.body);