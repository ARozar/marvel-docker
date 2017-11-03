import "babel-polyfill";
import express from 'express';

import * as api from 'marvel-api';
import dbConfig from './dbConfig';
import routes from './Characters';

const appStart = () => {
  
      const app = express();
      //setup our features (of which there is one)
      routes(app);
      //start the app
      app.listen('3002', () => console.log('Server listening on port 3002'));
  }

dbConfig(appStart);  
