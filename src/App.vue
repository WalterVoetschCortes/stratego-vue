<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'primary' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="primary"
      >
        <v-tab
          v-for="link in links"
          :key="link.title"
          :to="link.to"
          class="v-tab"
        >
          {{ link.title }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="secondary"
        size="32"
      >
        <img
                src="../src/assets/images/icon2.png"
                alt="S"
        >
      </v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <router-view></router-view>

    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {title:'Home', to:'/'},
        {title:'About', to:'/about'},
        {title:'Gameplay', to:'/gameplay'},
        {title:'Menu', to:'/menu'},
        {title:'Game', to:'/game'},
      ],
    }),
  }
</script>

<style>
  @import './assets/styles/app.css';
</style>
<style>
  @import './assets/styles/home.css';
</style>
<style>
  @import './assets/styles/about.css';
</style>
<style>
  @import './assets/styles/gameplay.css';
</style>
