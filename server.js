var express = require('express');
var app = express();
var PORT = process.env.PORT || 3003;
app.listen(PORT, function () { return console.log("Server started on " + PORT); });
