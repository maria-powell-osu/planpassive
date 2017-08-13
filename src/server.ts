// the polyfills must be one of the first things imported in node.js.
// The only modules to be imported higher - node modules with es6-promise 3.x or other Promise polyfill dependency
// (rule of thumb: do it if you have zone.js exception that it has been overwritten)
// if you are including modules that modify Promise, such as NewRelic,, you must include them before polyfills
import 'angular2-universal-polyfills';
import 'ts-helpers';
import './__workaround.node'; // temporary until 2.1.1 things are patched in Core

import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';
import * as compression from 'compression';

// Angular 2
import { enableProdMode } from '@angular/core';
// Angular 2 Universal
import { createEngine } from 'angular2-express-engine';

// App
import { MainModule } from './node.module';

// Routes
import { routes } from './server.routes';

// enable prod for faster renders
enableProdMode();

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

// Express View
app.engine('.html', createEngine({
  ngModule: MainModule,
  providers: [
    // use only if you have shared state between users
    // { provide: 'LRU', useFactory: () => new LRU(10) }

    // stateless providers only since it's shared
  ]
}));
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname);
app.set('view engine', 'html');
app.set('json spaces', 2);

app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());
app.use(compression());

app.use(morgan('dev'));

function cacheControl(req, res, next) {
  // instruct browser to revalidate in 60 seconds
  res.header('Cache-Control', 'max-age=60');
  next();
}
// Serve static files
app.use('/assets', cacheControl, express.static(path.join(__dirname, 'assets'), {maxAge: 30}));
app.use(cacheControl, express.static(path.join(ROOT, 'dist/client'), {index: false}));

//
/////////////////////////
// ** REST API
// Notice API should be in aseparate process
import { createNewCommentEmailNotification } from './backend/api';
// Our API for demos only
// app.get('/data.json', serverApi);
app.use('/api', createNewCommentEmailNotification());

process.on('uncaughtException', function (err) { 
  console.error('Catching uncaught errors to avoid process crash', err);
});

function ngApp(req, res) {

  function onHandleError(parentZoneDelegate, currentZone, targetZone, error)  {
    console.warn('Error in SSR, serving for direct CSR');
    res.sendFile('index.html', {root: './src'});
    return false;
  }

  Zone.current.fork({ name: 'CSR fallback', onHandleError }).run(() => {
    res.render('index', {
      req,
      res,
      // time: true, // use this to determine what part of your app is slow only in development
      preboot: false,
      baseUrl: '/',
      requestUrl: req.originalUrl,
      originUrl: `http://localhost:${ app.get('port') }`
    });
  });

}
function generate_xml_sitemap() {
    // this is the source of the URLs on your site, in this case we use a simple array, actually it could come from the database
    //var urls = ['about.html', 'javascript.html', 'css.html', 'html5.html'];
    var urls = ['home', 'blogs', 
    'blogs/the-top-10-passive-income-investments',
    'blogs/use-a-routine-maintenance-checklist-to-make-your-rental-property-more-passive',
    'blogs/have-some-self-respect:-place-a-dollar-value-on-your-time',
    'blogs/the-3-essential-ingredients-of-a-great-investment',
    'blogs/pay-off-debt-or-invest:-6-questions-you-should-consider',
    'blogs/ideal-passive-income-composition-by-life-stage',
    'blogs/best-kept-secret-of-the-wealthy:-use-leverage-or-fall-behind',
    'investment-calculators',
    'rental-property-calculator',
    'investment-return-calculator']
    // the root of your website - the protocol and the domain name with a trailing slash
    var root_path = 'http://www.planpassive.com/';
    // XML sitemap generation starts here
    var priority = 0.5;
    var freq = 'monthly';
    var xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    urls.forEach(route => {
        xml += '<url>';
        xml += '<loc>'+ root_path + route + '</loc>';
        xml += '<changefreq>'+ freq +'</changefreq>';
        xml += '<priority>'+ priority +'</priority>';
        xml += '</url>';
    });
    xml += '</urlset>';
    return xml;
}

/**
 * use universal for specific routes
 */
app.get('/', ngApp);
routes.forEach(route => {
  app.get(`/${route}`, ngApp);
  app.get(`/${route}/*`, ngApp);
});

/*
 * Sitemap used for search engines
 */
app.get('/sitemap.xml', function(req, res) {
    var sitemap = generate_xml_sitemap(); // get the dynamically generated XML sitemap
    res.header('Content-Type', 'text/xml');
    res.send(sitemap);     
});

/*
 * Robots.txt for SEO
 * most engine look at the robots text to 
 * see where the sitemap is located
 */ 
app.get('/robots.txt', function(req, res) {
    var sitemap = generate_xml_sitemap(); // get the dynamically generated XML sitemap
    res.header('Content-Type', 'text/plain');
    res.send("Sitemap: http://planpassive.com/sitemap");     
});

app.get('*', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var pojo = { status: 404, message: 'No Content' };
  var json = JSON.stringify(pojo, null, 2);
  res.status(404).send(json);
});

// Server
let server = app.listen(app.get('port'), () => {
  console.log(`Listening on: http://localhost:${server.address().port}`);
});

