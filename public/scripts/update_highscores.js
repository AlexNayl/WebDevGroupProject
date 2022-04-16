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
            let response = await fetch(url)
            if (response.ok){
                console.log(response);
            }else{
                throw "Invalid Response!";
            }
        }catch(e){
            console.error("Error fetching!\n", e);
        }
    },
}

function minesweeperHighScore(duration, boardSize, numBombs){
    console.log("duration", duration);
    console.log("boardSize", boardSize);
    console.log("numBombs", numBombs);
    const MAX_SCORE_DURATION = 1000; // Max duration after which score is not affected
    const SCORE_DURATION_COEFFICIENT = 1000;
    let score = Math.ceil(numBombs / boardSize * Math.max(1, (MAX_SCORE_DURATION - duration) * SCORE_DURATION_COEFFICIENT));
    console.log("Score", score);
    return score;
}