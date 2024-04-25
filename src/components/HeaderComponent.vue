<template>
	<div class="header">
		<div class="container">
			<div class="header__lang" >
				<button class="header__lang__item" v-for="language in lang" :key="language.text" :id="language.value" >
					<img :src="require(`../assets/img/${language.text}.svg`)" :alt="`${language.text} icon`" :data-id="language.value">
				</button>
			</div>
			<div class="header__flexbox">
				<div class="header__name">
					<p class="lng-name">
						Khizhniak Anna
					</p>
				</div>

				<nav class="header__navigation " id="header-nav">
					<ul class="nav-list">
						<li><span @click="$router.push('/')" class="lng-portfolio" data-nav-link="index">Portfolio</span></li>
						<li><span @click="$router.push('cms')" data-nav-link="cms">CMS</span></li>
						<li><span @click="$router.push('react')" data-nav-link="react">React</span></li>
						<li><span href="" target="_blank" class="lng-cv" data-nav-link="cv">CV</span></li>
						<li><span href="https://github.com/AnnaKhiz?tab=repositories" target="_blank" data-nav-link="github">GitHub</span></li>
						<li><span @click="$router.push('edu')" class="lng-edu" data-nav-link="education">Education/Experience</span></li>
					</ul>
				</nav>
			</div>

		</div>
		<wave-component />
	</div>



</template>

<script>
  import WaveComponent from "@/components/UI/WaveComponent";
  export default {
    name: "HeaderComponent.vue",
    components: {WaveComponent},
    data() {
      return {
        lang: [
					{ text: 'en', value: 'en'},
          { text: 'ru', value: 'ru'},
					{ text: 'ua', value: 'ua'},
				]
			}
		},
		computed: {
		}
  }
</script>

<style scoped>

</style>