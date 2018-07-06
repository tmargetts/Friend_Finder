// Dependencies
var path = require('path');

module.exports = function(app) {

    // route for home.html
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    // route for survey.html
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};