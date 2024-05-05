<template>
  <ul class="nav-list" :class="{ burger__item : isBurgerMenu }">
    <li>
      <span @click="() => { $router.push('/'); closeMenu }">
        {{ $t(`${checkedLanguage}.portfolio`)  }}
      </span>
    </li>
    <li>
      <span @click="() => { $router.push('cms') ; closeMenu }">
        CMS
      </span>
    </li>
    <li>
      <span @click="() => { $router.push('react'); closeMenu }">
        React
      </span>
    </li>
    <li>
      <a :href="`./cv_${$i18next.language}.pdf`" target="_blank" @click="closeMenu">
        {{ $t(`${checkedLanguage}.cv`) }}
      </a>
    </li>
    <li>
      <a href="https://github.com/AnnaKhiz?tab=repositories" @click="closeMenu" target="_blank">
        GitHub
      </a>
    </li>
    <li>
      <span @click="() => { $router.push('edu'); closeMenu } ">
        {{ $t(`${checkedLanguage}.edu`) }}
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
    }
  },
}

</script>

<style scoped>

</style>