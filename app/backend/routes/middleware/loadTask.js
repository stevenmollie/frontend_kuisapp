/**
 * Created by steve on 5/12/2016.
 */

function loadTask(req, res, next) {
    var user = req.task = tasks[req.params.name.toLowerCase()];
    if (!user) {
        res.send('Niet gevonden of onbestaande gebruiker',404)
        next();
    } else {
        next();
    }
}

module.exports = loadTask;