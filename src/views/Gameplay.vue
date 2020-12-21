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

                        <h2 class="gameplay__subtitle">Characters</h2>

                        <v-card>
                                <v-tabs
                                        v-model="tab"
                                        background-color="primary"
                                        dark
                                >
                                    <v-tab
                                            v-for="item in items"
                                            :key="item.tab"
                                    >
                                        {{ item.tab }}
                                    </v-tab>
                                </v-tabs>

                                <v-tabs-items v-model="tab">
                                    <v-tab-item
                                            v-for="item in items"
                                            :key="item.tab"
                                    >
                                        <v-card flat>
                                            <v-row no-gutters>
                                                <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="8"
                                                >

                                                    <v-card-title>
                                                        Top western road trips
                                                    </v-card-title>

                                                    <v-card-subtitle>
                                                        1,000 miles of wonder
                                                    </v-card-subtitle>

                                                    <v-card-actions>
                                                        <v-btn
                                                                color="orange lighten-2"
                                                                text
                                                        >
                                                            Explore
                                                        </v-btn>

                                                        <v-spacer></v-spacer>

                                                        <v-btn
                                                                icon
                                                                @click="show = !show"
                                                        >
                                                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                                        </v-btn>
                                                    </v-card-actions>

                                                    <v-expand-transition>
                                                        <div v-show="show">
                                                            <v-divider></v-divider>

                                                            <v-card-text>{{ item.content }}</v-card-text>
                                                        </div>
                                                    </v-expand-transition>
                                                </v-col>
                                                <v-col
                                                        cols="6"
                                                        md="4"
                                                >
                                                    <v-img
                                                            src="../assets/svg/character-bomb.svg"
                                                            width="200px"
                                                    ></v-img>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-tab-item>
                                </v-tabs-items>
                            </v-card>

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
<script>
    export default {
        data () {
            return {
                show: false,
                tab: null,
                items: [
                    { tab: 'Bomb', img: '../images/', content: 'Bomb bla bla bla bla bla bla bla bla bla bla bla.' },
                    { tab: 'Marshal', content: 'Tab 2 Content' },
                    { tab: 'General', content: 'Tab 3 Content' },
                    { tab: 'Colonel', content: 'Tab 4 Content' },
                    { tab: 'Major', content: 'Tab 5 Content' },
                    { tab: 'Captain', content: 'Tab 6 Content' },
                    { tab: 'Lieutenant', content: 'Tab 7 Content' },
                    { tab: 'Sergeant', content: 'Tab 8 Content' },
                    { tab: 'Miner', content: 'Tab 9 Content' },
                    { tab: 'Scout', content: 'Tab 10 Content' },
                    { tab: 'Spy', content: 'Tab 10 Content' },
                    { tab: 'Flag', content: 'Tab 10 Content' },
                ],
            }
        },
    }
</script>
