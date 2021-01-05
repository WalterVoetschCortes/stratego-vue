export default class MatchField {

    constructor() {
        this.fields = []
        this.currentPlayerIndex = 0
    }

    updateView() {
        let num = 0
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                if (this.fields[num].colour === 0) {
                    let td = document.getElementById("row" + row + "col" + col)
                    let img = $("." + "row" + row + "col" + col)
                    td.className = "cell cells_blue"
                    switch (this.fields[num].figName) {
                        case 'F':
                            img
                                .attr('src', "/assets/images/character-flag.svg")
                                .attr('alt', "F")
                            break;
                        case 'B':
                            img
                                .attr('src', "/assets/images/character-bomb.svg")
                                .attr('alt', "B")
                            break;
                        case 'M':
                            img
                                .attr('src', "/assets/images/character-marshal.svg")
                                .attr('alt', "M")
                            break;
                        case '1':
                            img
                                .attr('src', "/assets/images/character-spy.svg")
                                .attr('alt', "1")
                            break;
                        case '2':
                            img
                                .attr('src', "/assets/images/character-scout.svg")
                                .attr('alt', "2")
                            break;
                        case '3':
                            img
                                .attr('src', "/assets/images/character-miner.svg")
                                .attr('alt', "3")
                            break;
                        case '4':
                            img
                                .attr('src', "/assets/images/character-sergeant.svg")
                                .attr('alt', "4")
                            break;
                        case '5':
                            img
                                .attr('src', "/assets/images/character-lieutenant.svg")
                                .attr('alt', "5")
                            break;
                        case '6':
                            img
                                .attr('src', "/assets/images/character-captain.svg")
                                .attr('alt', "6")
                            break;
                        case '7':
                            img
                                .attr('src', "/assets/images/character-major.svg")
                                .attr('alt', "7")
                            break;
                        case "8":
                            img
                                .attr('src', "/assets/images/character-colonel.svg")
                                .attr('alt', "8")
                            break;
                        case "9":
                            img
                                .attr('src', "/assets/images/character-general.svg")
                                .attr('alt', "9")
                            break;
                    }
                } else if (this.fields[num].colour === 1) {
                    let td = document.getElementById("row" + row + "col" + col)
                    let img = $("." + "row" + row + "col" + col)
                    td.className = "cell cells_red"
                    switch (this.fields[num].figName) {
                        case 'F':
                            img
                                .attr('src', "/assets/images/character-flag.svg")
                                .attr('alt', "F")
                            break;
                        case 'B':
                            img
                                .attr('src', "/assets/images/character-bomb.svg")
                                .attr('alt', "B")
                            break;
                        case 'M':
                            img
                                .attr('src', "/assets/images/character-marshal.svg")
                                .attr('alt', "M")
                            break;
                        case '1':
                            img
                                .attr('src', "/assets/images/character-spy.svg")
                                .attr('alt', "1")
                            break;
                        case '2':
                            img
                                .attr('src', "/assets/images/character-scout.svg")
                                .attr('alt', "2")
                            break;
                        case '3':
                            img
                                .attr('src', "/assets/images/character-miner.svg")
                                .attr('alt', "3")
                            break;
                        case '4':
                            img
                                .attr('src', "/assets/images/character-sergeant.svg")
                                .attr('alt', "4")
                            break;
                        case '5':
                            img
                                .attr('src', "/assets/images/character-lieutenant.svg")
                                .attr('alt', "5")
                            break;
                        case '6':
                            img
                                .attr('src', "/assets/images/character-captain.svg")
                                .attr('alt', "6")
                            break;
                        case '7':
                            img
                                .attr('src', "/assets/images/character-major.svg")
                                .attr('alt', "7")
                            break;
                        case "8":
                            img
                                .attr('src', "/assets/images/character-colonel.svg")
                                .attr('alt', "8")
                            break;
                        case "9":
                            img
                                .attr('src', "/assets/images/character-general.svg")
                                .attr('alt', "9")
                            break;
                    }
                } else {
                    let td = document.getElementById("row" + row + "col" + col)
                    td.className = "cell cells__green" //empty cell
                    $("." + "row" + row + "col" + col)
                        .attr('src', "")
                        .attr('alt', "")
                }
                num++;
            }
        }
    }

    move(dir, row, col) {
        $.ajax({
            method: "POST",
            url: "/move",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                "row": row,
                "col": col,
                "dir": dir
            }),

            success: (result) => {
                const {matchField, currentPlayer, currentPlayerIndex} = result
                this.updateMatchField(matchField)
                this.updateView()
                this.updateCurrentPlayer(currentPlayer, currentPlayerIndex)
            }
        });
    }

    updateMatchField(newFields) {
        this.fields = newFields
    }

    updateCurrentPlayer(currentPlayer, currentPlayerIndex){
        this.currentPlayerIndex = currentPlayerIndex
        document.getElementById("infoPlayer").innerHTML = currentPlayer + ", it's your turn!"
    }
}
