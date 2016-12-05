/**
 * Created by steve on 5/12/2016.
 */
function loadHousehold(req, res, next) {
    var household = req.household = households[req.params.name.toLowerCase()];
    if (!household) {
        res.send('Niet gevonden of onbestaande gebruiker',404)
        next();
    } else {
        next();
    }
}

module.exports = loadHousehold;