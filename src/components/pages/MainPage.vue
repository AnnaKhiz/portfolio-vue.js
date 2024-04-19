<template>

	<div class="wrapper">
		<main class="main">
			<div class="container">
				<div class="main__gallery">
					<div class="main__gallery-item" v-for="project in projects" :key="project.text">
						<div class="main__gallery-item-img">
							<img :src="require(`../../assets/${project.previewLink}`)" alt="image">
						</div>
						<div class="main__gallery-textBlock">

							<h3 class="main__gallery-textBlock-label">
								{{ project.text }}
							</h3>
							<p class="main__gallery-textBlock-info lng-descProjectHobbyart" >
								{{ project.description }}
							</p>
							<a :href="project.projectLink" target="_blank" class="main__gallery-textBlock-button lng-openProject">
								Open project
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
			projects: [
				{
					text: 'Hobby Art',
					description: 'flexbox, grid, jquery, java script, swippers, switcher, mobile view, animation',
					value: 'hobbyart',
					previewLink: 'hobby-art.webp',
					gitHubLink: 'https://github.com/AnnaKhiz/HobbyArt-GULP',
					projectLink: ''
				},
        {
          text: 'Hillel',
					description: 'flexbox, jquery, swippers, switcher, mobile view',
					value: 'hillel',
          previewLink: 'final-hillel.webp',
          gitHubLink: 'https://github.com/AnnaKhiz/Hillel-final',
          projectLink: 'http://anna-khizhniak.site/portfolio/final-hillel/'
				},
        {
          text: 'Localize',
					description: 'flexbox, mobile view, jquery',
					value: 'localize',
					previewLink: 'localize.webp',
					gitHubLink: 'https://github.com/AnnaKhiz/Localize',
					projectLink: 'http://anna-khizhniak.site/portfolio/localize/'
				},
        {
          text: 'Meliorit',
					description: 'flexbox, jquery, swippers, mobile view',
					value: 'meliorit',
					previewLink: 'meliorit.webp',
					gitHubLink: 'https://github.com/AnnaKhiz/Meliorit',
					projectLink: 'http://anna-khizhniak.site/portfolio/meliorit/'
				},
        {
          text: 'Beauty',
					description: 'flexbox, jquery, modal, mobile view',
					value: 'beauty',
					previewLink: 'beauty.webp',
					gitHubLink: 'https://github.com/AnnaKhiz/Beauty-Site',
					projectLink: 'http://anna-khizhniak.site/portfolio/beauty/'
				},
        {
          text: 'FoxDigital',
					description: 'flexbox, jquery, java script, swippers, switcher for 2 color schemes, mobile view',
					value: 'foxdigital',
					previewLink: 'fox-digital.webp',
					gitHubLink: 'https://github.com/AnnaKhiz/FoxDigital-2-colors',
					projectLink: 'http://anna-khizhniak.site/portfolio/future-academy'
				},
        {
          text: 'Future academy',
          description: 'java script, flex, grid, bootstrap, swiper',
          value: 'futureacademy',
          previewLink: 'future-academy.webp',
          gitHubLink: 'https://github.com/AnnaKhiz/future-academy',
          projectLink: 'http://anna-khizhniak.site/portfolio/practice-FoxDigital'
        },
			]
		}
	}
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">


</style>
