let express = require('express');
let app = express();
app.set('port', process.env.PORT || 4500);
app.use(express.static('public'));

app.listen(app.get('port'), function(){
    console.log(`NodeJS Server running at ${app.get('port')}`)
});

app.get("/highscores", function(request, response){
    response.set('Access-Control-Allow-Origin', 'http://localhost:8080')
    console.log("recieved GET to /highscores", request.query);
    response.send("GET received!");
});