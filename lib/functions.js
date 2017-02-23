/**
 * Created by sapirlasry on 16/02/2017.
 */
module.exports.echoBadEnd = (r, to, res, feild) => {
    r.contextWrites[to] = {
        status_code: 'REQUIRED_FIELDS',
        status_msg: 'Please, check and fill in required fields',
        fields: feild
    };
    r.callback = 'error';

    res.status(200).send(r);
};