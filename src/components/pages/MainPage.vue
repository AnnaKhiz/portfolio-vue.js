<template>
	<div class="wrapper">
		<main class="main">
			<div class="container">
				<div class="main__gallery">
					<div class="main__gallery-item" v-for="project in projects" :key="project.text">
						<div class="main__gallery-item-img">
							<img :src="require(`../../assets/img/${project.previewLink}`)" alt="image">
						</div>
						<div class="main__gallery-textBlock">

							<h3 class="main__gallery-textBlock-label">
								{{ project.text }}
							</h3>
							<p class="main__gallery-textBlock-info" >
								{{ project.description }}
							</p>
							<a :href="project.projectLink" target="_blank" class="main__gallery-textBlock-button">
								{{ $t(`${this.checkedLanguage}.openProject`) }}
							</a>
						</div>
						<div class="main__gallery-textBlock right">
							<a :href="project.gitHubLink" target="_blank" class="main__gallery-textBlock-button right">
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>

</template>

<script>

export default {
  name: 'MainPage',
  components: {},
	data() {
    return {
      link: 'hobby-art.webp',
		}
	},
	computed: {
		checkedLanguage() {
				return this.$i18next.language
		},
		projects() {
			return [
				{
					text: 'Hobby Art',
					description: this.$t(`${this.checkedLanguage}.descProjectHobbyart`),
					value: 'hobbyart',
					previewLink: 'hobby-art.webp',
					gitHubLink: 'https://github.com/AnnaKhiz/HobbyArt-GULP',
					projectLink: 'http://anna-khizhniak.site/portfolio/store-HobbyArt'
				},
        {
          text: 'Hillel',
					description: this.$t(`${this.checkedLanguage}.descProjectHillel`),
					value: 'hillel',
          previewLink: 'final-hillel.webp',
          gitHubLink: 'https://github.com/AnnaKhiz/Hillel-final',
          projectLink: 'http://anna-khizhniak.site/portfolio/final-hillel/'
				},
        {
          text: 'Localize',
					description: this.$t(`${this.checkedLanguage}.descProjectLocalize`),
					value: 'localize',
					previewLink: 'localize.webp',
					gitHubLink: 'https://github.com/AnnaKhiz/Localize',
					projectLink: 'http://anna-khizhniak.site/portfolio/localize/'
				},
        {
          text: 'Meliorit',
					description: this.$t(`${this.checkedLanguage}.descProjectMeliorit`),
					value: 'meliorit',
					previewLink: 'meliorit.webp',
					gitHubLink: 'https://github.com/AnnaKhiz/Meliorit',
					projectLink: 'http://anna-khizhniak.site/portfolio/meliorit/'
				},
        {
          text: 'Beauty',
					description: this.$t(`${this.checkedLanguage}.descProjectBeauty`),
					value: 'beauty',
					previewLink: 'beauty.webp',
					gitHubLink: 'https://github.com/AnnaKhiz/Beauty-Site',
					projectLink: 'http://anna-khizhniak.site/portfolio/beauty/'
				},
        {
          text: 'FoxDigital',
					description: this.$t(`${this.checkedLanguage}.descProjectFoxDigital`),
					value: 'foxdigital',
					previewLink: 'fox-digital.webp',
					gitHubLink: 'https://github.com/AnnaKhiz/FoxDigital-2-colors',
					projectLink: 'http://anna-khizhniak.site/portfolio/practice-FoxDigital'
				},
        {
          text: 'Future academy',
          description: this.$t(`${this.checkedLanguage}.descProjectFutureAcademy`),
          value: 'futureacademy',
          previewLink: 'future-academy.webp',
          gitHubLink: 'https://github.com/AnnaKhiz/future-academy',
          projectLink: 'http://anna-khizhniak.site/portfolio/future-academy'
        },
			]
		}
	}

}
</script>

<style scoped lang="sass">

</style>
