"use strict";

/** IMPORTS **/
const express       = require('express'),
    bodyParser      = require('body-parser');

/** SET UP **/
//If ran in production - use enviroment PORT. In development, default to 8080
const PORT = process.env.PORT || 8080;

//The package name
global.PACKAGE_NAME = "RapidAPI";

//Initialize web server
const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));

/** ENDPOINT **/

//A metadata endpoint at GET /api/PACKAGE_NAME should return package metadata
app.get(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);

//For each block, a POST /api/PACKAGE_NAME/BLOCK_NAME should execute the block
app.post(`/api/${PACKAGE_NAME}/getAll`, require('./api/getAll'));
app.post(`/api/${PACKAGE_NAME}/getApiByCategory`, require('./api/getApiByCategory.js'));
app.post(`/api/${PACKAGE_NAME}/getApiByName`, require('./api/getApiByName.js'));

/** START LISTENING **/
app.listen(PORT);
console.log('UP');
