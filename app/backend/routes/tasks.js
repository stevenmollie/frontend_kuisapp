/**
 * Created by steve on 5/12/2016.
 */

var express = require('express');
var router = express.Router();
var tasks = require('../data/users.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    console.log(tasks);
    res.render('tasks/index', { title: "Tasks overview", tasks: tasks });
});

//NEW
router.get('/new', function(req, res, next){
    res.render('tasks/new', { title: "Create task" });
});

router.post('/new', function(req, res){
    if (tasks[req.body.username]) {
        res.send('Conflict', 409);
    } else {
        tasks[req.body.username] = req.body;
        res.redirect('/users');
    }
});

// DETAIL
router.get('/:taskId', function(req, res, next){
    var task = tasks[req.params.taskId];
    if (task){
        res.render('tasks/details', { title: "Details " + task.taskName, tasks: task });
    }
    else{
        next();
    }
});

//EDIT
router.get('/edit/:taskId', function(req, res, next){
    var task = tasks[req.params.taskId];
    if(task){
        res.render('users/edit', { title: "Update user", user: user });
        console.log(users);
    }
    else{
        next(new Error("Gebruiker niet gevonden."));
    }
});

router.post('/:task', function(req, res, next){
    var task = users[req.params.username];
    console.log(task);
    if (task) {
        console.log(task);
        task.profession = req.body.profession;
        task.name = req.body.name;
        res.redirect('/users');
    } else {
        next(new Error("Gebruiker is niet aangepast."));
    }
});

//DELETE
router.delete('/:task', function(req, res, next){
    var task = tasks[req.params.taskId];
});

module.exports = router;