<template>
    <div class="gameplay">
        <v-container>
            <v-row>

                <v-col
                        cols="12"
                        sm="12"
                >
                    <v-sheet
                            min-height="70vh"
                            rounded="lg"
                            class="pa-6"
                    >
                        <h2 class="gameplay__subtitle">About the game</h2>
                        <p>
                            Stratego is a strategy board game for two players. Each player has 40 pieces representing different characters.
                        </p>
                        <p>
                            We modified the game a little bit so you can walk with all characters (except flag and bomb) just one field up, down, to the right or to the left. You also can attack the oppenents with your figures. To win the game you have to find and attack the flag of your enemy.
                        </p>
                        <h2 class="gameplay__subtitle">Rules</h2>
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
                                        <v-card>
                                            <v-row no-gutters>
                                                <v-col
                                                        cols="12"
                                                        sm="6"
                                                        md="8"
                                                >

                                                    <v-card-title>
                                                        <h2 class="gameplay__subtitle gameplay-figure-name">{{item.tab}}</h2>
                                                    </v-card-title>

                                                    <v-card-subtitle>
                                                        <p>Rank {{item.rank}}</p>
                                                    </v-card-subtitle>


                                                    <v-card-actions>
                                                        <v-btn
                                                                color="primary"
                                                                text
                                                        >
                                                            See more
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

                                                            <v-card-text><p>{{ item.content }}</p></v-card-text>

                                                            <v-card-actions>
                                                                <v-tooltip right>
                                                                    <template v-slot:activator="{ on, attrs}">
                                                                        <v-btn
                                                                                color="secondary"
                                                                                v-bind="attrs"
                                                                                v-on="on"
                                                                        >
                                                                            Moveable?
                                                                        </v-btn>
                                                                    </template>
                                                                    <span><i :class="item.move"></i></span>
                                                                </v-tooltip>
                                                            </v-card-actions>
                                                        </div>
                                                    </v-expand-transition>
                                                </v-col>
                                                <v-col
                                                        cols="6"
                                                        md="4"
                                                >
                                                    <img
                                                            :src="item.img"
                                                            height="300px"
                                                            class="gameplay-figure-img figure-svg"
                                                    >
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </v-tab-item>
                                </v-tabs-items>
                            </v-card>

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
                    { tab: 'Bomb', rank: 'B', img: require('../assets/svg/character-bomb.svg'), content: 'Bomb bla bla bla bla bla bla bla bla bla bla bla.', move: 'fas fa-thumbs-down' },
                    { tab: 'Marshal', rank: '10', img: require('../assets/svg/character-marshal.svg'), content: 'Marshal bla bla bla bla bla bla bla bla bla bla bla.', move: 'fas fa-thumbs-up' },
                    { tab: 'General', rank: '9', img: require('../assets/svg/character-general.svg'), content: 'General bla bla bla bla bla bla bla bla bla bla bla.', move: 'fas fa-thumbs-up' },
                    { tab: 'Colonel', rank: '8', img: require('../assets/svg/character-colonel.svg'), content: 'Colonel bla bla bla bla bla bla bla bla bla bla bla.', move: 'fas fa-thumbs-up' },
                    { tab: 'Major', rank: '7', img: require('../assets/svg/character-major.svg'), content: 'Major bla bla bla bla bla bla bla bla bla bla bla.', move: 'fas fa-thumbs-up' },
                    { tab: 'Captain', rank: '6', img: require('../assets/svg/character-captain.svg'), content: 'Captain bla bla bla bla bla bla bla bla bla bla bla.', move: 'fas fa-thumbs-up' },
                    { tab: 'Lieutenant', rank: '5', img: require('../assets/svg/character-lieutenant.svg'), content: 'Lieutenant bla bla bla bla bla bla bla bla bla bla bla.', move: 'fas fa-thumbs-up' },
                    { tab: 'Sergeant', rank: '4', img: require('../assets/svg/character-sergeant.svg'), content: 'Sergeant bla bla bla bla bla bla bla bla bla bla bla.', move: 'fas fa-thumbs-up' },
                    { tab: 'Miner', rank: '3', img: require('../assets/svg/character-miner.svg'), content: 'Miner bla bla bla bla bla bla bla bla bla bla bla.', move: 'fas fa-thumbs-up' },
                    { tab: 'Scout', rank: '2', img: require('../assets/svg/character-scout.svg'), content: 'Scout bla bla bla bla bla bla bla bla bla bla bla.', move: 'fas fa-thumbs-up' },
                    { tab: 'Spy', rank: '1', img: require('../assets/svg/character-spy.svg'), content: 'Spy bla bla bla bla bla bla bla bla bla bla bla.', move: 'fas fa-thumbs-up' },
                    { tab: 'Flag', rank: 'F', img: require('../assets/svg/character-flag.svg'), content: 'Flag bla bla bla bla bla bla bla bla bla bla bla.', move: 'fas fa-thumbs-down' },
                ],
            }
        },
    }
</script>
