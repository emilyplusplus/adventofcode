const BingoCard = require('./bingoCard.js');

class Bingo {
    play(input) {
        let numbers = input[0].split(',')
        input = input.splice(1,input.length).filter((board, i) => {
            return (i %= 6) != 0
        })

        let boards = []

        for(let i = 0; i < input.length; i += 5) {
            boards.push( new BingoCard( input.slice(i, i + 5) ) )
        }

        //console.log(numbers, boards)

        return 0
    }
}

module.exports = new Bingo()