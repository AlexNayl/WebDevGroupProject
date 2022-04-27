export default {
    async updateHighscoresMinesweeper(duration, boardSize, numBombs, username){
        // Temporary will change from fetch to a submission and whatever later
        console.log("Update Highscores:");
        console.log('dur, user', duration, ",", username);
        let url = new URL("http://localhost:4500/addhighscore");
        url.searchParams.append("username", username);
        url.searchParams.append("game", "minesweeper");
        url.searchParams.append("score", minesweeperHighScore(duration, boardSize, numBombs));
        try{
            let response = await fetch(url);
            if (response.ok){
                console.log(response);
            }else{
                throw response;
            }
        }catch(e){
            console.error("Error fetching!\n", e);
        }
	},
	
	async updateHighscoresSnake(score, username) {
		let url = new URL("http://localhost:4500/addhighscore");
        url.searchParams.append("username", username);
        url.searchParams.append("game", "snake");
        url.searchParams.append("score", score);
        try{
            let response = await fetch(url);
            if (response.ok){
                console.log(response);
            }else{
                throw response;
            }
        }catch(e){
            console.error("Error fetching!\n", e);
        }
	},

	async updateHighscoresStacker(score, username) {
		let url = new URL("http://localhost:4500/addhighscore");
        url.searchParams.append("username", username);
        url.searchParams.append("game", "stacker");
        url.searchParams.append("score", score);
        try{
            let response = await fetch(url);
            if (response.ok){
                console.log(response);
            }else{
                throw response;
            }
        }catch(e){
            console.error("Error fetching!\n", e);
        }
	},

    async getHighScores(){
        try{
            let response = await fetch("http://localhost:4500/gethighscores");
            if (response.ok){
                console.log("Got Highscores!");
                return (await response.json()).sort((hs1, hs2) => hs1["user_id"] < hs2["user_id"]);
            }else{
                throw response;
            }
        }catch(e){
            console.error("Error fetching!\n", e);
            return [];
        }
    },
    async getTopHighScores(game, limit){
        let hs = await this.getHighScores();
        // if errror or empty
        if (hs == []){
            return hs; 
        }
        // sort by game highscores
        hs.sort((hs1, hs2) => hs1[game] < hs2[game]);

        while(hs.length > limit){
            hs.pop();
        }

        return hs;
    },
    // Needed to solve 'accessHighscores' is defined but never used
    async doNothing(){
        console.log("Nothing")
    }
}

function minesweeperHighScore(duration, boardSize, numBombs){
    const MAX_SCORE_DURATION = 1000; // Max duration after which score is not affected
    const SCORE_DURATION_COEFFICIENT = 1000;
    let score = Math.ceil(numBombs / boardSize * Math.max(1, (MAX_SCORE_DURATION - duration) * SCORE_DURATION_COEFFICIENT));
    return score;
}