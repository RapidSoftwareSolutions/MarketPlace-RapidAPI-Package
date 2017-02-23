/**
 * Created by sapirlasry on 15/02/2017.
 */
const request = require('superagent');
const _ = require('../lib/functions');

module.exports = (req, res) => {

    /* Get user parameters and prepare it */
    let { packageName , to="to"} = req.body.args;

    /* Prepare RapidAPI Object for response */
    var r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!packageName) {
        _.echoBadEnd(r, to, res, 'packageName');
        return;
    }

    /* Sending request to backend server for APIs by name */
    // TODO: change from localhost to rapidapi backend server
    request
        .get("http://localhost:8081/v2/public/getApiByName/" +packageName)
        .set('Accept', 'application/json')
        .end((error, result) => {
            if(error || Object.keys(result.body).length == 0){
                r.contextWrites[to] = { message : "Didn't find any match API."};
                r.callback = 'error';
            }
            else{
                r.contextWrites[to] = JSON.parse(result.text);
                r.callback = 'success';
            }
            res.status(200).send(r);
        });
};
