<template>
	<div class="wrapper">
		<main class="main">
			<div class="container">
				<h2 class="main__education-title">{{ $t(`${this.checkedLanguage}.educationLabel`) }}</h2>
				<div class="main__education-block">
					<div
						v-for="(sertificate, index) in sertificats"
						:key="index"
						class="main__education-item"
						:class="{ diploma : sertificate.additionalImage }"

					>
						<img
							:src="require(`../../assets/img/${ sertificate.image }`)"
							alt="sertificat"
							:class="{ front : sertificate.additionalImage }"
						>
						<img
							v-if="sertificate.additionalImage"
							:src="require(`../../assets/img/${ sertificate.additionalImage }`)"
							alt="diploma"
							class="back"
						>
						<div
							v-if="sertificate.details"
							class="main__education-item-bg"
						>
							<a class="main__education-item-button" :href="sertificate.link" target="_blank">
								{{ $t(`${this.checkedLanguage}.viewDetails`) }}
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
    name: "EduPAge.vue",
		data() {
      return {
        sertificats: [
					{ link: '', image: 'sertificat-5.png', additionalImage: '', details: false },
					{ link: '', image: 'js.jpg', additionalImage: '', details: false },
					{ link: 'https://certificate.ithillel.ua/view/29949260', image: 'sertificat-1.png', additionalImage: '', details: true },
          { link: 'https://certificate.ithillel.ua/view/49351811', image: 'sertificat-2.png', additionalImage: '', details: true },
          { link: 'https://certificate.ithillel.ua/view/62913226', image: 'sertificat-3.png', additionalImage: '', details: true },
          { link: 'https://certificate.ithillel.ua/view/26941795', image: 'sertificat-4.png', additionalImage: '', details: true },
          { link: '', image: 'diploma-bac-1.jpg', additionalImage: 'diploma-bac-2.jpg', details: false },
          { link: '', image: 'diploma-spec-1.jpg', additionalImage: 'diploma-spec-2.jpg', details: false },
				]
			}
		},
		computed: {
			checkedLanguage() {
				return this.$i18next.language
		},
		}
  }
</script>

<style scoped lang="sass">

</style>
