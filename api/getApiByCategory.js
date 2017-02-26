/**
 * Created by sapirlasry on 15/02/2017.
 */
const request = require('superagent');
const _ = require('../lib/functions');

module.exports = (req, res) => {

    /* Get user parameters and prepare it */
    let { limit = 50, offset = 0, sortBy = "installsAllTime", category , to="to"} = req.body.args;

    /* Prepare RapidAPI Object for response */
    let r = {
        callback        : "",
        contextWrites   : {}
    };

    if(!category) {
        _.echoBadEnd(r, to, res, 'category');
        return;
    }

    /* Sending request to backend server for APIs by category */
    // TODO: change from localhost to rapidapi backend server
    request
        .get("https://api.rapidapi.com/v2/public/getApiByCategory/" + category + "?limit=" + limit + "&offset=" + offset + "&sortBy=" + sortBy)
        .set('Accept', 'application/json')
        .end((error, result) => {
            if(error || Object.keys(result.body).length == 0){
                r.contextWrites[to] = "Didn't find any matching category.";
                r.callback = 'error';
            }
            else{
                r.contextWrites[to] = JSON.parse(result.text);
                r.callback = 'success';
            }
            res.status(200).send(r);
        });
};
