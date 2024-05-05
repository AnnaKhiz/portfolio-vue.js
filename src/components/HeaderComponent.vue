<template>
	<div class="header">
		<div class="container">
			<div class="header__lang" >
				<button 
					class="header__lang__item" 
					v-for="language in lang" 
					:key="language.text" 
					:id="language.value" 
					@click="$i18next.changeLanguage(language.value)"
					>
					<img :src="require(`../assets/img/${language.text}.svg`)" :alt="`${language.text} icon`" :data-id="language.value">
				</button>
			</div>
			<div class="header__flexbox">
				<div class="header__name">
					<p> {{ $t(`${checkedLanguage}.name`) }} </p>
				</div>

				<nav class="header__navigation">
          <ui-nav-list />
				</nav>
			</div>

		</div>
		<ui-wave-animation />
	</div>

</template>

<script>

  import UiNavList from "@/components/UI/uiNavList.vue";
  import UiWaveAnimation from "@/components/UI/uiWaveAnimation.vue";


  export default {
    name: "HeaderComponent.vue",
    components: {UiWaveAnimation, UiNavList },
		
    data() {
      return {
        lang: [
					{ text: 'en', value: 'en'},
					{ text: 'ru', value: 'ru'},
					{ text: 'uk', value: 'uk'},
				]
			}
		},
		computed: {
			checkedLanguage() {
				return this.$i18next.language
			}
		},

		watch: {
			checkedLanguage() {
				location.href = `${location.pathname}#${this.checkedLanguage}`;
			}
		},
		
  }
</script>

<style scoped>

</style>