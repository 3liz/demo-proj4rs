/**
 * Class used to create a navbar to navigate between demo pages
 * @extends HTMLElement
 */
export class NavBar extends HTMLElement {
  constructor() {
    super();

    const pathname =  window.location.pathname.split("/");
    const page = pathname[pathname.length - 1];

    this.innerHTML = ``;

    const demoPages = {
      "../index.html": "Home",
      "wms-image-custom-proj.html": "Single Image WMS",
      "reprojection-image.html": "Image reprojection",
      "reprojection.html": "Raster reprojection",
      "sphere-mollweide.html": "Sphere Mollweide",
      "vector-projections.html": "Vector projections",
      "bundeslander-3044.html": "Bundeslander EPSG:3044"
    };

    let i = 0;

    for (const [key, value] of Object.entries(demoPages)) {

      let tag = `<a `;
      if (page === key) {
        tag += `id="navLabelActive"`;
      }

      tag += ` class="navLabel" href="${key}">${value}</a>${i === Object.keys(demoPages).length - 1 ? `` : `<br>`}`;
      this.innerHTML += tag;

      i++;
    }
  }
}

customElements.define("nav-bar", NavBar);
