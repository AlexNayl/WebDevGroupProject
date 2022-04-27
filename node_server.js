let express = require('express');
let app = express();
app.set('port', process.env.PORT || 4500);
app.use(express.static('public'));

// Database
let dbModel = require("./model/db_model");
dbModel.init(); // Create if not already setup

app.listen(app.get('port'), function(){
    console.log(`NodeJS Server running at ${app.get('port')}`)
});

app.get("/addhighscore", function(request, response){
    response.set('Access-Control-Allow-Origin', 'http://localhost:8080'); // neccessary for allow GET
    console.log("recieved GET to /addhighscore", request.query);
    response.send("GET RECEIVED");
    newHighscore(request.query)
});

app.get("/gethighscores", function(request, response){
    response.set('Access-Control-Allow-Origin', 'http://localhost:8080'); // neccessary for allow GET
    console.log("recieved GET to /gethighscores", request.query);
    sendHighScores(response);
});
/*
 * Name: newHighscore
 * Description: Adds a new highscore to database
 * Return: None
*/
async function newHighscore(query){
    // Get info from query
    if (!query){ return; }
    let username = query.username;
    if (!username){ return; }
    let game = query.game;
    if (!game){ return; }
    let score = parseInt(query.score);
    if (!score){ return; }
    
    // Make sure user exists
    if (!await userExists(username)){
        await dbModel.addUser(username);
    }
    // User definitely exists

    // Get current score for user
    let currentScore = (await dbModel.getHighScore(username, game))[game];
    
    // If current score is better than new score do nothing
    if (currentScore > score){
        return;
    }

    // Add new highscore to database
    dbModel.setHighScore(username, game, score);
}

/*
 * Name: userExists
 * Description: Checks if a user exists
 * Return: True if exists, else false
*/
async function userExists(username){
    let result = await dbModel.getHighScores(username);
    return !!result; // if result is defined
}
/*
 * Name: sendHighScores
 * Description: Sends the highscores from the database
 * Return: None
*/
async function sendHighScores(response){
    let result = await dbModel.getAllHighScores();
    response.send(result);
}
