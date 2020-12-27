class TennisGame {
    constructor(gameSets, playerOne = 0, playerTwo = 0, ranking = 0, setsWon = 0, setsLost = 0, gamesWon = 0, gamesLost = 0) {
        this.gameSets = gameSets;
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
    }

    get winner() {
        return this.determineWinner();
    }

    get playerOneScore() {
        return this.playerOne;
    }

    get randomOp() {
        return this.randomExpression();
    }

    determineWinner() {
        for (this.gameSets = 1; this.gameSets < 6; this.gameSets++) {
            let randomValue = this.randomOp;
            if (randomValue === true) {
                this.playerOne++;
            } else if (randomValue === false) {
                this.playerTwo++;
            }
        }
        console.log(`Player 1 Score: ${this.playerOne}`);
        console.log(`Player 2 Score: ${this.playerTwo}`);

        if (this.playerOne > this.playerTwo) {

            console.log("Player 1 is the winner of this Tennis Game!");
            return this.playerOne;

        } else if (this.playerTwo > this.playerOne) {
            console.log("Player 2 is the winner of this Tennis Game!");
            return this.playerTwo;

        }
    }

    randomExpression() {
        let random_boolean = Math.random() >= 0.5;
        return random_boolean;
    }

}

class TennisPlayer extends TennisGame {
    constructor(gameSets, playerOne, playerTwo, ranking = 0, setsWon = 0, setsLost = 0, gamesWon = 0, gamesLost = 0) {
        super(playerOne, playerTwo, ranking);
        this.ranking = ranking;
        this.setsWon = setsWon;
        this.setsLost = setsLost;
        this.gamesWon = gamesWon;
        this.gamesLost = gamesLost;


    }

    get p1SetsWon() {
        return this.setP1SetsWon();
    }

    get p2SetsWon() {
        return this.setP2SetsWon();
    }

    setP1SetsWon() {
        this.setsWon = document.getElementById("displayP1Score").value;
        let totalSetsWon = this.setsWon;
        return totalSetsWon;
    }

    setP2SetsWon() {
        this.setsWon = document.getElementById("displayP2Score").value;
        let totalSetsWon = this.setsWon;
        return totalSetsWon;
    }

    determineRanking() {

    }
}

function gameWinner() {
    const game1 = new TennisGame();
    // @ts-ignore
    let winner = game1.winner;
    let scoreOfPlayer1 = game1.playerOne;
    let scoreOfPlayer2 = game1.playerTwo;
    let p1GamesWon = 0;

    if (scoreOfPlayer1 > scoreOfPlayer2) {
        document.getElementById("displayWinner").innerHTML = "Player 1 is the Winner of this game!";

    } else if (scoreOfPlayer2 > scoreOfPlayer1) {
        document.getElementById("displayWinner").innerHTML = "Player 2 is the Winner of this game!";


    }
    // @ts-ignore
    document.getElementById("displayP1Score").innerHTML = scoreOfPlayer1;
    // @ts-ignore
    document.getElementById("displayP2Score").innerHTML = scoreOfPlayer2;


}

function playerOneStats() {
    const player1 = new TennisPlayer();
    let scoreOfPlayer1 = player1.p1SetsWon;
    // @ts-ignore
    document.getElementById("p1SetsWon").innerHTML = scoreOfPlayer1;

}

function playerTwoStats() {
    const player2 = new TennisPlayer();
    let playerTotalSetsWon = player2.p2SetsWon;
    // @ts-ignore
    document.getElementById("p2SetsWon").innerHTML = playerTotalSetsWon;
}
console.log(playerOneStats());
//let game1 = new TennisGame();
//console.log(game1.winner);
