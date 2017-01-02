'use strict';
let massive = require('massive');

let connectionString =  process.env.PSQL_DB || 'postgres://ifotxrrk:A8ra9yF7ULFOgBYDMhuR7mF4lzz0Knxh@elmer.db.elephantsql.com:5432/ifotxrrk';
let massiveInstance = massive.connectSync({connectionString});
module.exports = massiveInstance;