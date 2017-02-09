var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var fh = require('fh-mbaas-api');

function feedsRoute() {
    var feeds = new express.Router();
    feeds.use(cors());
    feeds.use(bodyParser());

    feeds.get('/', function (req, res) {

        fh.service({
            "guid": "uo5dkux7uuypsdh5jlqv2aen",
            "path": "/feeds",
            "method": "GET",
            "headers": {
                "Content-Type" : "application/json" 
            }
        }, function (serviceError, serviceBody, serviceResponse) {
            console.log('Response: ', res && res.statusCode);
            if (serviceError) {
                console.log('service call failed - err : ', serviceError);
                res.json({msg:"Service call failed", error: ser});
            } else {
                console.log('Got response from service - status body : ', serviceResponse.statusCode, serviceBody);                
                res.json({"data" : serviceBody});
            }
        });
    });

    return feeds;
}

module.exports = feedsRoute;
