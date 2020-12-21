<template>
    <div class="gameplay">
        <v-container>
            <v-row>
                <v-col
                        cols="12"
                        sm="2"
                >
                    <v-sheet
                            rounded="lg"
                            min-height="268"
                    >
                        <!--  -->

                    </v-sheet>
                </v-col>

                <v-col
                        cols="12"
                        sm="8"
                >
                    <v-sheet
                            min-height="70vh"
                            rounded="lg"
                            class="pa-6"
                    >
                        <p>
                            Stratego is a strategy board game for two players. Each player has 40 pieces representing different characters.
                        </p>
                        <p>
                            We modified the game a little bit so you can walk with all characters (except flag and bomb) just one field up, down, to the right or to the left. You also can attack the oppenents with your figures. To win the game you have to find and attack the flag of your enemy.
                        </p>
                        <p>
                            Important rules:
                        </p>
                        <ul>
                            <li>Flag is the most important figure</li>
                            <li>Miner and Bomb: only the miner can defuse the Bomb</li>
                            <li>Every other figure loses against the Bomb</li>
                            <li>Spy and Marshal: only Spy can beat the Marshal except the bomb</li>
                            <li>Flag and Bomb can't be moved</li>
                        </ul>

                        <!--  -->
                    </v-sheet>
                </v-col>

                <v-col
                        cols="12"
                        sm="2"
                >
                    <v-sheet
                            rounded="lg"
                            min-height="268"
                    >
                        <!--  -->
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
