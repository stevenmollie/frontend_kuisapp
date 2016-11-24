var express = require("express");
var app = express();

var gcmtest = require("./backend/controllers/gcmtestcontroller");

app.use("/gcmtest", gcmtest);

app.listen(process.env.PORT || 3000, function(){
    console.log("Listening on port 3000");
});