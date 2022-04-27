export default {
    /**
     * Name: updateHighscores
     * Description: Sends a get request to the server, sending a new highscore
     * Return: None
    */
    async updateHighscores(score, username, game){
        // Create the URL based on information about the new highscore
        let url = new URL("http://localhost:4500/addhighscore");
        url.searchParams.append("username", username);
        url.searchParams.append("game", game);
        url.searchParams.append("score", score);
        try{
            let response = await fetch(url);
            if (!response.ok){
                throw response;
            }
        }catch(e){
            console.error("Error sending highscore!\n", e);
        }
    },

    /*
     * Name: getHighScores
     * Description: Gets HighScores from server
     * Return: Array of user data
    */
    async getHighScores(){
        // Try getting highscores else throw error
        try{
            let response = await fetch("http://localhost:4500/gethighscores");
            if (response.ok){
                return (await response.json()).sort((hs1, hs2) => hs1["user_id"] < hs2["user_id"]);
            }else{
                throw response;
            }
        }catch(e){
            console.error("Error getting highscores!\n", e);
            return [];
        }
    },
    /*
     * Name: getTopHighScores
     * Description: Gets all high scores and then filters down to a set limit. Used for making the graphs
     * Return: Array of highscore data
    */
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
    }
}