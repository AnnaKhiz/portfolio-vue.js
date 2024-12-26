<template>
  <ul class="nav-list" :class="{ burger__item : isBurgerMenu }">
    <li v-for="link in navigationLinks" :key="link.value">
      <a v-if="link.value === 'github'" :href="link.url" @click="closeMenu" target="_blank">
        {{ link.text }}
      </a>
      <a v-else-if="link.value === 'cv'" :href="`./cv_${$i18next.language}.pdf`" target="_blank" @click="closeMenu">
        {{ $t(`${checkedLanguage}.cv`) }}
      </a>
      <span v-else @click="openMenu(link.url)">
        {{ link.value === 'portfolio' || link.value === 'edu' || link.value === 'small' ? $t(`${checkedLanguage}.${link.value}`) : link.text }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "uiNavList.vue",
  props: {
    editMenuVisibility: {
      type: Function
    },
    isBurgerMenu: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    closeMenu() {
      return this.$emit('editMenuVisibility', false)
    },
    checkedLanguage() {
      return this.$i18next.language
    },
    navigationLinks() {
      return [
        { text: 'Portfolio', value: 'portfolio', url: '/' },
        { text: 'Small tasks', value: 'small', url: '/small' },
        { text: 'CV', value: 'cv', url: '/cv' },
        { text: 'GitHub', value: 'github', url: 'https://github.com/AnnaKhiz?tab=repositories' },
        { text: 'Education/Experience', value: 'edu', url: '/edu' },
      ]
    }
  },
  methods: {
    openMenu(link) {
      this.$router.push(`${link}`);
      this.closeMenu;
    }
  }
}

</script>

<style scoped>

</style>
