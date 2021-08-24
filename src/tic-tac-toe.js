class TicTacToe {
    constructor(field = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]) {
        this.field = field;
        this.currentPlayerSymbol = 'x';
        this.winner = null;
        this.draw = false;
        this.noTurn = false;


    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(row, col) {
        if (this.field[row][col] != 'x' && this.field[row][col] != 'o') {
            this.field[row][col] = this.currentPlayerSymbol;
            this.currentPlayerSymbol == 'x' ? this.currentPlayerSymbol = 'o' : this.currentPlayerSymbol = 'x';
        }

    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        }
        return false;
    }

    getWinner() {
        if ((this.field[0][0] == this.field[0][1] && this.field[0][0] == this.field[0][2] && this.field[0][0] == 'x') ||
            (this.field[1][0] == this.field[1][1] && this.field[1][0] == this.field[1][2] && this.field[1][0] == 'x') ||
            (this.field[2][0] == this.field[2][1] && this.field[2][0] == this.field[2][2] && this.field[2][0] == 'x') ||
            (this.field[0][0] == this.field[1][0] && this.field[0][0] == this.field[2][0] && this.field[0][0] == 'x') ||
            (this.field[0][1] == this.field[1][1] && this.field[0][1] == this.field[2][1] && this.field[0][1] == 'x') ||
            (this.field[0][2] == this.field[1][2] && this.field[0][2] == this.field[2][2] && this.field[0][2] == 'x') ||
            (this.field[0][0] == this.field[1][1] && this.field[0][0] == this.field[2][2] && this.field[0][0] == 'x') ||
            (this.field[2][0] == this.field[1][1] && this.field[2][0] == this.field[0][2] && this.field[2][0] == 'x')) {
            this.winner = 'x';
            return this.winner;
        }
        else if ((this.field[0][0] == this.field[0][1] && this.field[0][0] == this.field[0][2] && this.field[0][0] == 'o') ||
            (this.field[1][0] == this.field[1][1] && this.field[1][0] == this.field[1][2] && this.field[1][0] == 'o') ||
            (this.field[2][0] == this.field[2][1] && this.field[2][0] == this.field[2][2] && this.field[2][0] == 'o') ||
            (this.field[0][0] == this.field[1][0] && this.field[0][0] == this.field[2][0] && this.field[0][0] == 'o') ||
            (this.field[0][1] == this.field[1][1] && this.field[0][1] == this.field[2][1] && this.field[0][1] == 'o') ||
            (this.field[0][2] == this.field[1][2] && this.field[0][2] == this.field[2][2] && this.field[0][2] == 'o') ||
            (this.field[0][0] == this.field[1][1] && this.field[0][0] == this.field[2][2] && this.field[0][0] == 'o') ||
            (this.field[2][0] == this.field[1][1] && this.field[2][0] == this.field[0][2] && this.field[2][0] == 'o')) {
            this.winner = 'o';
            return this.winner;
        }
        this.winner = null;
        return this.winner;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.field[i][j] != 'x' && this.field[i][j] != 'o') {
                    this.noTurn = false;
                    return this.noTurn;
                }
            }
        }
        this.noTurn = true;
        return this.noTurn;
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) {
            this.draw = true;
            return this.draw;
        }
        this.draw = false;
        return this.draw;
    }

    getFieldValue(row, col) {
        if (this.field[row][col] == '') {
            return null;
        }
        return this.field[row][col];
    }
}
module.exports = TicTacToe;
