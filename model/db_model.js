const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./data/games.db", err => {
    if (err) {
        console.error("Failed to connect to sqlite3 database: ", err);
    } else {
        console.log("Successfully connected to database");
    }
})

// Automatically creates the required tables for the database
exports.init = function () {
    return new Promise((resolve, reject) => {
        db.run(`CREATE TABLE IF NOT EXISTS high_scores(
            user_id     VARCHAR(20) PRIMARY KEY,
            minesweeper INTEGER     DEFAULT 0,
            snake       INTEGER     DEFAULT 0)`,
            err => {
                if (err) {
                    console.error("Failed to create table high_scores: ", err);
                    reject(err);
                } else {
                    console.log("Created table high_scores");
                    resolve();
                }
            }
        );
    });
}

// Drops all tables, deleting all stored data
exports.reset = function() {
    return new Promise((resolve, reject) => {
        db.run("DROP TABLE high_scores",
            err => {
                if (err) {
                    console.error("Failed to drop table high_scores: ", err);
                    reject(err);
                } else {
                    console.log("Dropped table high_scores");
                    resolve();
                }
            }
        );
    });
}

// Adds a new user to the database, automatically filling tables with the necessary data for the user to function
exports.addUser = function(userId) {
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO high_scores (user_id) VALUES (?)", [userId.substring(0, Math.min(userId.length, 20))],
            err => {
                if (err) {
                    console.error("Failed to add user to table high_scores: ", err);
                    reject(err);
                } else {
                    console.log(`Added user ${userId} to the database`);
                    resolve();
                }
            }
        );
    });
}

// Returns the user's high score for a specific game, which must match a column name in the high_scores table
exports.getHighScore = function(userId, gameName) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT ${gameName} FROM high_scores WHERE user_id = ?`, [userId],
            (err, data) => {
                if (err) {
                    console.error(`Failed to get ${gameName} high score for ${userId}: ${err}`);
                    reject(err);
                } else {
                    resolve(data);
                }
            }
        );
    });
}

// Returns all of the user's high scores, via the entire row for that user in the high_scores table
exports.getHighScores = function(userId) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT * FROM high_scores WHERE user_id = ?`, [userId],
            (err, data) => {
                if (err) {
                    console.error(`Failed to get high scores for ${userId}: ${err}`);
                    reject(err);
                } else {
                    resolve(data);
                }
            }
        );
    });
}

// Sets the user's high score for a specific game to a new value
exports.setHighScore = function(userId, gameName, value) {
    return new Promise((resolve, reject) => {
        db.run(`UPDATE high_scores SET ${gameName} = ? WHERE user_id = ?`, [value, userId],
            err => {
                if (err) {
                    console.error(`Failed to update ${gameName} high score to ${value} for ${userId}`);
                    reject(err);
                } else {
                    resolve();
                }
            }
        );
    });
}

// Get all high scores
exports.getAllHighScores = function(){
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM high_scores', [],
        (err, data) => {
            if (err) {
                console.error('Failed to get all highscores!');
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
