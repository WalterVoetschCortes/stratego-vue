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
    <v-footer
            color="secondary"
            padless
    >
      <v-card
              flat
              tile
              class="secondary white--text text-center"
              width="100%"

      >
        <img src="../src/assets/images/logo-rev.png" alt="StrategoLogo">

        <div class="footer__social">
          <a href="https://github.com/BenjaminMannsdoerfer/Stratego" target="_blank" class="footer__icon"><i class="fab fa-github"></i>Desktop-App</a>
          <a href="https://github.com/WalterVoetschCortes/de.htwg.wt.StrategoInScala" target="_blank" class="footer__icon"><i class="fab fa-github"></i>Web-App</a>
        </div>

        <v-card-text class="white--text">
          <strong>&#169;</strong> {{ new Date().getFullYear() }} by<strong> Walter Voetsch Cortes </strong>and<strong> Axel Schwarz</strong>
        </v-card-text>
      </v-card>
    </v-footer>
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
