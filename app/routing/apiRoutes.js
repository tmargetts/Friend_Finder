// Dependencies
var path = require('path');

// Import list of friends
var friends = require("../data/friends.js");

// API routes

module.exports = function(app) {

    // entire list of JSON friends
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // Submit new friends
    app.post('/api/friends', function(req, res) {
        var userInput = req.body;
        console.log('userInput = ' + JSON.stringify(userInput));

        var userResponses = userInput.scores;
        console.log('userResponses = ' + userResponses);

    // store friend variables
        var friendName = '';
        var friendPic = '';
        var totalDifference = 1000;

    // for loop to run through all the friends
        for (var i = 0; i < friends.length; i++) {
            console.log('friend = ' + JSON.stringify(friends[i]));

            // shout out to the internet for loop for determining difference
            // compare the difference between current user's scores against those from other users, question by question
            var diff = 0;
            for (var d = 0; d < userResponses.length; d++) {
            // Add up the differences to calculate the totalDifference
                diff += Math.abs(friends[i].scores[d] - userResponses[d]);
            }
            console.log('diff = ' + diff);

           // The closest match will be the user with the least amount of difference
            if (diff < totalDifference) {
                console.log('Closest match found  = ' + diff);
                console.log('Friend name = ' + friends[i].name);
                console.log('Friend pic = ' + friends[i].pic);

                totalDifference = diff;
                friendName = friends[i].name;
                friendPic = friends[i].pic;
            }
        }
            // Add new friend
            friends.push(userInput);

            // Response to user
            res.json({status: 'Your new best friend', friendName: friendName, friendPic: friendPic});
    });
};