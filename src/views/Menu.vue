<template>
    <div class="menu">
        <v-container>
            <v-row>

                <v-col
                        cols="12"
                        sm="12"
                >
                    <v-sheet
                            min-height="70vh"
                            rounded="lg"
                            class = "transparent"
                    >
                        <!-- ===== Menu ===== -->
                        <div class="menu" id="menu">
                            <div class="form-newGame">

                                <img class="menuLogo" src="../assets/images/logo.png" alt="Logo">

                                <div class="nameWrapper">
                                    <input type="text" id="inputPlayer1" class="nameInput form-control" placeholder="Your name" />
                                </div>

                                <v-btn class="menuButton newGameButton ">Play</v-btn>

                                <p class="or" id ="playersInfoMenu"></p>

                                <p class="mt-5 mb-3 copy">&#169; 2021 by Walter Voetsch Cortes and Axel Schwarz</p>
                            </div>
                        </div>

                        <!--  -->
                    </v-sheet>
                </v-col>

            </v-row>
        </v-container>
    </div>
</template>

<script>
    // @ is an alias to /src
    import axios from "axios";

    export default {
        name: 'Menu',
        components: {
        },
        data: function () {
            return{
            }
        },
        methods:{
            setPlayer: async function (playerName) {
                let json = JSON.stringify({
                    "playerName": playerName
                })
                let options = {
                    headers: { 'Content-Type': 'application/json' }
                    , url: 'http://localhost:9000/setPlayer'
                    , method: 'post'
                    , data: json
                }
                console.log(json)
                let result = await axios(options);
                const {clientPlayerIndex} = result.data
                sessionStorage.clientPlayerIndex = clientPlayerIndex
                console.log("result " + clientPlayerIndex)
                console.log("set player in localStorage in Menu.vue: " + sessionStorage.clientPlayerIndex)
                if(clientPlayerIndex === 0){
                    localStorage.firstPlayer = playerName
                    localStorage.secondPlayer = "unknown"
                }else {
                    localStorage.secondPlayer = playerName
                }
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                // Code that will run only after the
                // entire view has been rendered

                var ref = this;


                $(document).on('click', '.newGameButton',(function () {
                    let playerName = document.getElementById('inputPlayer1').value;

                    if( playerName !== ""){
                        ref.setPlayer(playerName);
                        location.href = '#/game'
                    }
                }))

                if (typeof localStorage.firstPlayer === 'undefined' || localStorage.firstPlayer === null){
                    document.getElementById('playersInfoMenu').innerHTML = "There is nobody in the game."
                } else if(localStorage.secondPlayer === "unknown")  {
                    document.getElementById('playersInfoMenu').innerHTML = "Just " + localStorage.firstPlayer + " is in the game. Enter your name and play with him!"
                } else{
                    document.getElementById('playersInfoMenu').innerHTML = localStorage.firstPlayer + " and " + localStorage.secondPlayer + " are in the game."
                }

                window.onstorage = () => {
                    // When local storage changes...
                    if (typeof localStorage.firstPlayer !== 'undefined' && localStorage.firstPlayer !== null){
                        document.getElementById('playersInfoMenu').innerHTML = "There is nobody in the game."
                    } else if(localStorage.secondPlayer === "unknown")  {
                        document.getElementById('playersInfoMenu').innerHTML = "Just " + localStorage.firstPlayer + " is in the game. Enter your name and play with him!"
                    } else{
                        document.getElementById('playersInfoMenu').innerHTML = localStorage.firstPlayer + " and " + localStorage.secondPlayer + " are in the game."
                    }
                }

            })
        }

    }
</script>
