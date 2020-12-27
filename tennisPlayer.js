/*class TennisPlayer {
    constructor(ranking, setsWon, setsLost, gamesWon, gamesLost)
    {
        
        this.ranking = ranking;
        this.setsWon = setsWon;
        this.setsLost = setsLost;
        this.gamesWon = gamesWon;
        this.gamesLost = gamesLost;

    }

    get p1SetsWon(){
        return this.valueForP1W();
    }

    get p2SetsWon(){
        return this.valueForP2W();
    }

    valueForP1W(){
        this.setsWon = document.getElementById("displayP1Score").value;
        return this.setsWon;
    }

    valueForP2W(){
        this.setsWon = document.getElementById("displayP2Score").value;
        return this.setsWon;
    }

    determineRanking(){
        if(this.p1SetsWon > this.p2SetsWon){

        }
    }
}

function playerOneStats(){
    const player1 = new TennisPlayer();
    let playerTotalSetsWon = player1.p1SetsWon;
    document.getElementById("p1SetsWon").innerHTML = playerTotalSetsWon;
    
}

function playerTwoStats(){
    const player2 = new TennisPlayer();
    let playerTotalSetsWon = player2.p2SetsWon;
    document.getElementById("p2SetsWon").innerHTML = playerTotalSetsWon;
}*/