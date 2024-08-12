<template>
  <div :class="{ show : showMenu }" class="menu__btn" @click="callBurger">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div class="burger"  :class="{ show : showMenu , active : showMenu } ">
    <div class="burger__container" v-if="showMenu" :class="{ scroll : showMenu }">
      <ui-nav-list
        :is-burger-menu="isBurgerMenu"
        @edit-menu-visibility="editMenuVisibility"
      />
    </div>
  </div>
</template>


<script>
import UiNavList from "@/components/UI/uiNavList.vue";

export default {
  name: "BurgerComponent.vue",
  components: { UiNavList },
  data() {
    return {
      isBurgerMenu: false,
      showMenu: false,
      scroll: false,
    }
  },
  methods: {
    editMenuVisibility(value) {
      this.showMenu = value
    },
    callBurger() {
      this.showMenu = !this.showMenu;
      this.isBurgerMenu = true;
    }
  },
  watch: {
    showMenu() {
      const bodyElem = document.querySelector('body');
      this.showMenu ? bodyElem.classList.add('fixed') : bodyElem.classList.remove('fixed');
    }
  }
}

</script>

<style scoped lang="sass">


</style>