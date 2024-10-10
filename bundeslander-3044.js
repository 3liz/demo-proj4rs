import Map from 'ol/Map.js';
import Projection from 'ol/proj/Projection.js';
import View from 'ol/View.js';
import {proj4} from 'proj4rs/proj4.js';
import {register} from 'ol/proj/proj4.js';
import {OSM, Vector} from "ol/source";
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {getCenter} from 'ol/extent.js';
import {createLoader} from "flatgeobuf/lib/mjs/ol";


proj4.defs(
  'EPSG:3044',
  '+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
);
register(proj4);

const projection = new Projection({
  code: 'EPSG:3044',
  extent: [-500148.9813, 5090138.2818, 1858594.5902, 6300956.2195],
});

const source = new Vector();
const loader = createLoader(source, '../fgb/axis_orientation_neu_3044.fgb', 'EPSG:3044');
source.setLoader(loader)

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    new VectorLayer({
      source
    })
  ],
  target: 'map',
  view: new View({
    projection: projection,
    center: getCenter(projection.getExtent()),
    zoom: 2,
    extent: projection.getExtent()
  })
});
