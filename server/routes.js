/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/citys', require('./api/city'));
  app.use('/api/participants', require('./api/participant'));
  app.use('/api/users', require('./api/user'));
    app.use('/api/uploads', require('./api/upload'));

  app.use('/auth', require('./auth').default);
  app.use(require('connect-livereload')({ignore: ['.pdf']}));   //to ignore pdfs so it doesn't get corrupted when sendfile is used on them
  app.get('/file/:url', function (req, res) {
    if(req.params.url === "Noname")
    {
      res.send("No File Uploaded  ");
    }
    res.sendFile(path.resolve('./client/assets/uploads/' + req.params.url));
});

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
    });
}
