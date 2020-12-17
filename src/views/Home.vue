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
                                          <img alt="Vue logo" src="../assets/images/logo.png">
                                          <HelloWorld msg="Welcome to Your Vue.js App"/>
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
