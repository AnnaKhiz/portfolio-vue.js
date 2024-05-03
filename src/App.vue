<template>
  <header-component/>
  <router-view />
  <footer-component/>
</template>

<script>

import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "@/components/FooterComponent";


export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="sass">
  @import "./sass/style.sass"

</style>
