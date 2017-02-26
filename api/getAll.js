/**
 * Created by sapirlasry on 15/02/2017.
 */
const request = require('superagent');

module.exports = (req, res) => {

    /* Get user parameters and prepare it */
    let { limit = 50, offset = 0, sortBy = "installsAllTime", to="to"} = req.body.args;

    /* Prepare RapidAPI Object for response */
    let r = {
        callback        : "",
        contextWrites   : {}
    };



    /* Send request to backend server for getting all APIs */
    // TODO: change from localhost to rapidapi backend server
    request
        .get(`https://api.rapidapi.com/v2/public/all?limit=${limit}&offset=${offset}&sortBy=${sortBy}`)
        .set('Accept', 'application/json')
        .end((error, result) => {
            if(error){
                r.contextWrites[to] = "Didn't find any matching API.";
                r.callback = 'error';
            }
            else{
                r.contextWrites[to] = JSON.parse(result.text);
                r.callback = 'success';
            }
            res.status(200).send(r);
        });
};
