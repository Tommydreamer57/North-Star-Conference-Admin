'use strict';
let massive = require('massive');

let connectionString =  process.env.PSQL_DB;
let massiveInstance = massive.connectSync({connectionString});
module.exports = massiveInstance;