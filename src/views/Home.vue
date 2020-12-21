<template>
<div class="home">
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
                    <v-img alt="Vue logo" src="../assets/images/stratego.jpg" width="100%"> </v-img>
                    <v-card
                            class="d-flex justify-center"
                            flat
                            tile
                    >
                        <v-btn class="button" to="/about">
                            Play
                        </v-btn>
                    </v-card>
                  <!--  -->
                </v-sheet>
              </v-col>

            </v-row>
          </v-container>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
