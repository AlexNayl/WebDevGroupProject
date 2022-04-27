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
        
        // create high_scores table
        db.run(`CREATE TABLE IF NOT EXISTS high_scores(
            user_id     VARCHAR(20) PRIMARY KEY,
            minesweeper INTEGER     DEFAULT 0,
            snake       INTEGER     DEFAULT 0,
			word_search	INTEGER		DEFAULT 0,
			stacker		INTEGER		DEFAULT 0)`,
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
        
        // create score_history table
        db.run(`CREATE TABLE IF NOT EXISTS score_history (
			user_id    VARCHAR(20)  PRIMARY KEY,
			game       VARCHAR(20)  DEFAULT none,
			record_no  INTEGER(2)   DEFAULT 1,
			score      INTEGER      DEFAULT 0)`,
			err => {
				if (err) {
					console.error("Failed to create table score_history: ", err);
					reject (err);
				} else {
					console.log("Created table score_history");
					resolve();
				}
			}
		);
        
    });
}

// Drops all tables, deleting all stored data
exports.reset = function() {
    return new Promise((resolve, reject) => {
        
        // drop high_scores table
        // drop high_scores table
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
        
        // drop score_history table
		db.run("DROP TABLE score_history",
			err => {
				if (err) {
					console.error("Failed to drop table score_history: ", err);
					reject(err);
				} else {
					console.log("Dropped table score_history");
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

// returns the user's score history for a specific game number
exports.getScoreHistory = function(userId, gameName) {
	return new Promise((resolve, reject) => {
		db.get(`SELECT $(gameName) FROM score_history WHERE user_id = ?`, [userId],
			(err, data) => {
				if (err) {
					console.error(`Failed to get $(gameName) score history for $(userId): $(err)`);
					reject(err);
				} else {
					resolve(data);
				}
			}
			
		);
	
	});

}

// returns all of the user's score history
exports.getScoreHistories = function(userId) {
	return new Promise((resolve, reject) => {
		db.get(`SELECT * FROM score_history WHERE user_id = ?`, [userId],
			(err, data) => {
				if (err) {
					console.error(`Failed to get score history for $(userId): $(err)`);
					reject(err);
				} else {
					resolve();
				}
			}
		);
	});
}

// record a user's score when they don't have 10 games played
exports.recordScoreWithoutOverwrite = function (userId, gameName, gameNo, value) {
	return new Promise((resolve, reject) => {
		db.run(`INSERT INTO score_history (userId, game, record_no, score) VALUES (userId, gameName, gameNo, value)`,
			err => {
				if (err) {
					console.error(`Failed to set $(gameName) score history to $(value) for $(userId): $(err)`);
					reject(err);
				} else {
					resolve();
				}
			}
		);
	});
}

// record a user's score when they do have 10 games played
exports.recordScoreWithOverwrite = function (userId, gameName, gameNo, value) {	
	return new Promise((resolve, reject) => {
		db.run(`UPDATE score_history SET score = ? WHERE game = ? AND $(gameNo) = ? AND $(userId) = ?`, [value, gameName, gameNo, userId],
			err => {
				if (err) {
					console.error(`Failed to update $(gameName) score history to $(value) for slot $(gameNo) for user $(userId)`);
					reject(err);
				} else {
					resolve();
				}
			}
		);
	});
}
