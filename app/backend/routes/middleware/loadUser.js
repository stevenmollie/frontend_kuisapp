/**
 * Created by steve on 5/12/2016.
 */

function loadUser(req, res, next) {
    var user = req.user = users[req.params.name.toLowerCase()];
    if (!user) {
        res.send('Niet gevonden of onbestaande gebruiker',404)
        next();
    } else {
        next();
    }
}

module.exports = loadUser;