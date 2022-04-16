let express = require('express');
let app = express();
app.set('port', process.env.PORT || 4500);
app.use(express.static('public'));

// Database
let dbModel = require("./model/db_model");
dbModel.init(); // Create if not already setup
/*
dbModel.reset()
	.then(() => dbModel.init())
	.then(() => dbModel.addUser("test"))
	.then(() => dbModel.setHighScore("test", "minesweeper", 10))
	.then(() => dbModel.getHighScore("test", "minesweeper"))
	.then((data) => console.log(data)); // Should print { minesweeper: 10 }*/

app.listen(app.get('port'), function(){
    console.log(`NodeJS Server running at ${app.get('port')}`)
});

app.get("/highscores", function(request, response){
    response.set('Access-Control-Allow-Origin', 'http://localhost:8080'); // neccessary for allow GET
    console.log("recieved GET to /highscores", request.query);
    response.send(newHighscore(request.query));
});

function newHighscore(query){
    console.log(query);
    return "GET RECEIVED";
}