<template>
    <div class="game">
        <v-container>
            <v-row>

                <v-col
                        cols="12"
                        sm="12"
                >
                    <v-sheet
                            min-height="70vh"
                            rounded="lg"
                    >
                        <!-- ===== Game ===== -->
                        <section class="home bd-grid" id="home">
                            <div class="game__container" id="stratego-game">
                                <StrategoField/>
                                <StrategoInfo/>
                            </div>
                        </section>

                        <!--  -->
                    </v-sheet>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>

<script>
    // @ is an alias to /src
    import StrategoField from '@/components/StrategoField.vue'
    import StrategoInfo from '@/components/StrategoInfo.vue'
    import axios from "axios";

    export default {
        name: 'Game',
        components: {
            StrategoField,
            StrategoInfo
        },
        data: function () {
            return{
                connection: null,
                fields: [],
                currentPlayerIndex: 0,
                cpi: 30,
                size: 10,
                colA: 0,
                rowA: 0,
                dir: "d",
                clientPlayerIndex: ""
            }
        },
        methods:{
            sendMessage:function (message) {
                console.log(this.connection);
                this.connection.send(message);
            },
            updateView:function () {
                let num = 0
                for(let row = 0; row < this.size; row++) {
                    for(let col = 0; col < this.size; col++) {
                        if(this.fields[num].colour === 0) {
                            let td = document.getElementById("row"+ row + "col" + col)
                            let img = $("." + "row"+ row + "col" + col)
                            img
                                .attr('src',"")
                                .attr('alt',"")
                            td.className = "cell cells_blue"
                            if(this.clientPlayerIndex === "0") {
                                switch (this.fields[num].figName) {
                                    case 'F':
                                        img
                                            .attr('src',require('../assets/svg/character-flag.svg'))
                                            .attr('alt',"F")
                                        break;
                                    case 'B':
                                        img
                                            .attr('src', require("../assets/svg/character-bomb.svg"))
                                            .attr('alt',"B")
                                        break;
                                    case 'M':
                                        img
                                            .attr('src', require("../assets/svg/character-marshal.svg"))
                                            .attr('alt',"M")
                                        break;
                                    case '1':
                                        img
                                            .attr('src', require("../assets/svg/character-spy.svg"))
                                            .attr('alt',"1")
                                        break;
                                    case '2':
                                        img
                                            .attr('src', require("../assets/svg/character-scout.svg"))
                                            .attr('alt',"2")
                                        break;
                                    case '3':
                                        img
                                            .attr('src', require("../assets/svg/character-miner.svg"))
                                            .attr('alt',"3")
                                        break;
                                    case '4':
                                        img
                                            .attr('src', require("../assets/svg/character-sergeant.svg"))
                                            .attr('alt',"4")
                                        break;
                                    case '5':
                                        img
                                            .attr('src', require("../assets/svg/character-lieutenant.svg"))
                                            .attr('alt',"5")
                                        break;
                                    case '6':
                                        img
                                            .attr('src', require("../assets/svg/character-captain.svg"))
                                            .attr('alt',"6")
                                        break;
                                    case '7':
                                        img
                                            .attr('src', require("../assets/svg/character-major.svg"))
                                            .attr('alt',"7")
                                        break;
                                    case "8":
                                        img
                                            .attr('src', require("../assets/svg/character-colonel.svg"))
                                            .attr('alt',"8")
                                        break;
                                    case "9":
                                        img
                                            .attr('src', require("../assets/svg/character-general.svg"))
                                            .attr('alt',"9")
                                        break;
                                }
                            }

                        } else if (this.fields[num].colour === 1) {
                            let td = document.getElementById("row"+ row + "col" + col)
                            let img = $("." + "row"+ row + "col" + col)
                            img
                                .attr('src',"")
                                .attr('alt',"")
                            td.className = "cell cells_red"
                            if(this.clientPlayerIndex === "1"){
                                switch (this.fields[num].figName) {
                                    case 'F':
                                        img
                                            .attr('src',require('../assets/svg/character-flag.svg'))
                                            .attr('alt',"F")
                                        break;
                                    case 'B':
                                        img
                                            .attr('src', require("../assets/svg/character-bomb.svg"))
                                            .attr('alt',"B")
                                        break;
                                    case 'M':
                                        img
                                            .attr('src', require("../assets/svg/character-marshal.svg"))
                                            .attr('alt',"M")
                                        break;
                                    case '1':
                                        img
                                            .attr('src', require("../assets/svg/character-spy.svg"))
                                            .attr('alt',"1")
                                        break;
                                    case '2':
                                        img
                                            .attr('src', require("../assets/svg/character-scout.svg"))
                                            .attr('alt',"2")
                                        break;
                                    case '3':
                                        img
                                            .attr('src', require("../assets/svg/character-miner.svg"))
                                            .attr('alt',"3")
                                        break;
                                    case '4':
                                        img
                                            .attr('src', require("../assets/svg/character-sergeant.svg"))
                                            .attr('alt',"4")
                                        break;
                                    case '5':
                                        img
                                            .attr('src', require("../assets/svg/character-lieutenant.svg"))
                                            .attr('alt',"5")
                                        break;
                                    case '6':
                                        img
                                            .attr('src', require("../assets/svg/character-captain.svg"))
                                            .attr('alt',"6")
                                        break;
                                    case '7':
                                        img
                                            .attr('src', require("../assets/svg/character-major.svg"))
                                            .attr('alt',"7")
                                        break;
                                    case "8":
                                        img
                                            .attr('src', require("../assets/svg/character-colonel.svg"))
                                            .attr('alt',"8")
                                        break;
                                    case "9":
                                        img
                                            .attr('src', require("../assets/svg/character-general.svg"))
                                            .attr('alt',"9")
                                        break;
                                }
                            }

                        } else {
                            let td = document.getElementById("row"+ row + "col" + col)
                            td.className = "cell cells__green" //empty cell
                            $("." + "row"+ row + "col" + col)
                                .attr('src',"")
                                .attr('alt',"")
                        }
                        num++;
                    }
                }
            },
            move: async function (dir, row, col) {
                let json = JSON.stringify({
                    "row": row,
                    "col": col,
                    "dir": dir
                })
                let options = {
                    headers: { 'Content-Type': 'application/json' }
                    , url: 'http://localhost:9000/move'
                    , method: 'post'
                    , data: json
                }
                console.log(json)
                let result = await axios(options);
                const {matchField, currentPlayer, currentPlayerIndex} = result
                this.updateMatchField(matchField)
                this.updateView()
                this.updateCurrentPlayer(currentPlayer, currentPlayerIndex)
            },
            updateMatchField: function (newFields) {
                this.fields = newFields
            },
            updateCurrentPlayer(currentPlayer, currentPlayerIndex){
                console.log("updateCurrentPlayer: " + currentPlayer)
                this.currentPlayerIndex = currentPlayerIndex
                if(parseInt(this.clientPlayerIndex) === this.currentPlayerIndex){
                    document.getElementById("infoPlayer").innerHTML = currentPlayer + ", it's your turn!"
                }else {
                    document.getElementById("infoPlayer").innerHTML = "Wait, it's " + currentPlayer + "s turn!"
                }
            }

        },
        created: function () {

            console.log("clientPlayerIndex of this client is: " + sessionStorage.clientPlayerIndex)

            var ref = this;
            console.log("Starting connection to Stratego WebSocket Server")
            this.connection = new WebSocket("ws://localhost:9000/websocket")

            this.connection.onopen = function (event) {
                //console.log(event)
                console.log("Successfully connected to Stratego Websocket Server")
            }
            this.connection.onclose = function () {
                console.log("Successfully closed connection to Stratego Websocket Server")
            }
            this.connection.onerror = function (error) {
                console.log("Error occured in Stratego Websocket Server: " + error)
            }
            this.connection.onmessage = function (e) {
                console.log("message")
                if (typeof e.data === "string") {
                    let json = JSON.parse(e.data);
                    let fields = json.matchField;
                    let currentPlayerIndex = json.currentPlayerIndex;
                    let currentPlayer = json.currentPlayer;
                    //console.log("all data: " + e.data)
                    console.log("fields: " + fields)
                    console.log("playerIndex: " + currentPlayerIndex)
                    console.log("player: " + currentPlayer)

                    ref.updateMatchField(fields);
                    ref.updateView();
                    ref.updateCurrentPlayer(currentPlayer, currentPlayerIndex)


                }
            }
        },
        mounted: function () {

            if(sessionStorage.clientPlayerIndex){
                this.clientPlayerIndex = sessionStorage.clientPlayerIndex
            }

            this.$nextTick(function () {
                // Code that will run only after the
                // entire view has been rendered

                var ref = this;

                axios.get("http://localhost:9000/json")
                .then(response => {
                    //console.log(JSON.stringify(response.data));
                    this.updateMatchField(response.data.matchField);
                    this.updateView()
                    this.updateCurrentPlayer(JSON.stringify(response.data.currentPlayer),response.data.currentPlayerIndex)
                })


                $(document).on('click', '.cells_blue',(function () {
                    if(ref.clientPlayerIndex === "0"){
                        ref.colA = this.parentElement.rowIndex
                        ref.rowA = this.cellIndex

                        console.log(ref.colA + " " + ref.rowA)
                        // changes background color of selected cell:
                        if(ref.currentPlayerIndex === 0){
                            $(".cell").removeClass('selectedCell');
                            $(this).addClass('selectedCell');
                        }
                    }

                }))

                $(document).on('click', '.cells_red',(function () {
                    if(ref.clientPlayerIndex === "1"){
                        ref.colA = this.parentElement.rowIndex
                        ref.rowA = this.cellIndex

                        // changes background color of selected cell:
                        if(ref.currentPlayerIndex === 1){
                            $(".cell").removeClass('selectedCell');
                            $(this).addClass('selectedCell');
                        }
                    }

                }))

                $(document).keydown(function(event){
                    var key = event.which;
                    switch(key) {
                        case 37:
                            ref.dir = "l"
                            console.log("left")
                            // Key left.
                            break;
                        case 38:
                            ref.dir = "u"
                            console.log("up")
                            // Key up.
                            break;
                        case 39:
                            ref.dir = "r"
                            console.log("right")
                            // Key right.
                            break;
                        case 40:
                            ref.dir = "d"
                            console.log("down")
                            // Key down.
                            break;
                    }
                    ref.move(ref.dir, ref.rowA, ref.colA)
                });

            })
        }

    }
</script>
