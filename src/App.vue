<template>
  <burger-component />
  <header-component/>
  <router-view />
  <footer-component/>
</template>

<script>

import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "@/components/FooterComponent";
import BurgerComponent from "@/components/BurgerComponent.vue";


export default {
  name: 'App',
  components: {
    BurgerComponent,
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="sass">
  @import "./sass/style.sass"

</style>
