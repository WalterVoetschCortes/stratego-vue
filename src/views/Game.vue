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
    import Matchfield from '@/assets/javascripts/matchfield.js'

    export default {
        name: 'Game',
        components: {
            StrategoField,
            StrategoInfo
        },
        data: function () {
            return{
                connection: null
            }
        },
        methods:{
            sendMessage:function (message) {
                console.log(this.connection);
                this.connection.send(message);
            }
        },
        created: function () {
            console.log("Starting connection to Stratego WebSocket Server")
            this.connection = new WebSocket("ws://localhost:9000/websocket")

            this.connection.onopen = function (event) {
                console.log(event)
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
                    console.log("fields: " + fields)
                    console.log("playerIndex: " + currentPlayerIndex)

                    var matchfield = new Matchfield()
                    matchField.updateMatchField(fields);
                    matchField.updateView();
                    matchField.updateCurrentPlayer(currentPlayer, currentPlayerIndex)
                }
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                // Code that will run only after the
                // entire view has been rendered
                axios.get("http://localhost:9000/json")
                .then(response => console.log("ajax response: " + (JSON.stringify(response.data))))
            })
        }

    }
</script>
