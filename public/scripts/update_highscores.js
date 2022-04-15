export default {
    async updateHighscores(duration, username){
        // Temporary will change from fetch to a submission and whatever later
        console.log("Update Highscores:");
        console.log('dur, user', duration, ",", username);
        try{
            let response = await fetch("http://localhost:4500/highscores")
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