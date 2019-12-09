'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./server');
const { appConfig } = require('./config');

const mongoConnection = async () => {
    let client = await mongoose.connect(appConfig.mongoUrl,  {useUnifiedTopology: true, useNewUrlParser: true });
    if(client){
        console.log(`DB Connection established!`);
        server.listen(appConfig.port, () => {
            console.log(`Server running on port: ${appConfig.port}`);
        });
    }
    else {
        console.log(`The db connection couldn't be estabished!`);    
    }
}

mongoConnection();