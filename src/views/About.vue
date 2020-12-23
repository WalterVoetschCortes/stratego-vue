<template>
  <div class="about">
    <v-container>
            <v-row>

              <v-col
                      cols="12"
                      sm="12"
              >
                <v-sheet
                        min-height="40vh"
                        rounded="lg"
                        class="pa-6"
                >
                  <h2 class="about__subtitle">About the project</h2>
                  <p class="about__text">
                    A little info about the game STRATEGO. This game is part of our project for our class Web Technologies at the
                    University of Applied Science HTWG Konstanz and is a continuation of the project in software engineering.
                  </p>

                  <p class="development__text">
                    Here are some tools and technologies we use for the development of this web game:
                  </p>
                  <div class="container-fluid padding">
                    <div class="row text-center padding">
                      <div class="col-xs-12 col-sm-6 col-md-4">
                        <i class="fas fa-code"></i>
                        <h3>HTML5</h3>
                        <p class="development__description">Built with the latest version of HTML, HTML5.</p>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-4">
                        <i class="fab fa-vuejs"></i>
                        <h3>VUE.JS</h3>
                        <p class="development__description">Built with the latest version of Vue.js, Vue 2.</p>
                      </div>
                      <div class="col-sm-12 col-md-4">
                        <i class="fab fa-css3"></i>
                        <h3>CSS3</h3>
                        <p class="development__description">Built with the latest version of CSS, CSS3.</p>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                </v-sheet>
              </v-col>

            </v-row>

      <v-row>
        <v-col
                cols="12"
                sm="6"
        >
          <v-sheet
                  rounded="lg"
                  height="300"
                  color="blue"
          >
            <div class="gameplay-parent-img">
              <img
                      src="../assets/images/team-blue.png"
                      class="gameplay-rb-img"
              >
            </div>
            <!--  -->

          </v-sheet>
        </v-col>

        <v-col
                cols="12"
                sm="6"
        >
          <v-sheet
                  rounded="lg"
                  height="300"
                  color="red"
          >
            <div class="gameplay-parent-img">
              <img
                      src="../assets/images/team-red.png"
                      class="gameplay-rb-img"
              >
            </div>

            <!--  -->
          </v-sheet>
        </v-col>
      </v-row>
          </v-container>
  </div>
</template>
