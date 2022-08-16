import { home } from './components/home/home.js';
import { partners } from './components/partners/partners.js';
import { solidarityzone } from './components/solidarityzone/solidarityzone.js';
import { tips } from './components/tips/tips.js';

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
}

const routes = {
  404: {
    'html': "/components/404/404.html"
  },
  "/": {
    'html': "/components/home/home.html",
    'js': home
  },
  "/ongsparceiras": {
    'html': "/components/partners/partners.html",
    'js': partners
  },
  "/zonasolidaria": {
    'html': "/components/solidarityzone/solidarityzone.html",
    'js': solidarityzone
  },
  "/dicas": {
    'html': "/components/tips/tips.html",
    'js': tips
  },
  "/sobrenos": {
    'html': "/components/about/about.html"
  }
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path].html || routes[404].html;
  const html = await fetch(route).then((data)=>data.text());
  document.getElementById('root').innerHTML = html;
  routes[path].js ? loadJS(routes[path].js) : ''
};

const loadJS = (path) => {
  path = new path()
  path.init()
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
