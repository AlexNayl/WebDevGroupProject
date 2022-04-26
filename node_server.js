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

async function newHighscore(query){
    if (!query){ return; }
    let username = query.username;
    username = username.toLowerCase();
    if (!username){ return; }
    let game = query.game;
    if (!game){ return; }
    let score = parseInt(query.score);
    if (!score){ return; }
    
    if (!await userExists(username)){
        console.log("Adding:", username);
        await dbModel.addUser(username);
    }

    // Now user exists
    let currentScore = (await dbModel.getHighScore(username, game))[game];
    if (currentScore > score){
        return;
    }

    // New high score

    dbModel.setHighScore(username, game, score);
}

async function userExists(username){
    let result = await dbModel.getHighScores(username);
    return !!result; // if result is defined
}

async function sendHighScores(response){
    let result = await dbModel.getAllHighScores();
    response.send(result);
}
