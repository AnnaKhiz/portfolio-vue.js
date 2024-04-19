<template>
	<div class="footer">
		<div class="container">
			<div class="footer__flexBlock">
				<div class="footer__contacts">
					<div class="footer__contacts-item" v-for="contact in contacts" :key="contact.value">
						<svg-icon type="mdi" :path="contact.icon" :size="50" />
						<a :href="`${contact.value}:${contact.text}`">{{ contact.text }}</a>
					</div>
				</div>
				<div class="footer__social">
					<a v-for="link in social" :key="link.text" :href="link.value" target="_blank" >
						<svg-icon type="mdi" :path="link.icon" :size="50" />
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiFacebook, mdiLinkedin, mdiInstagram, mdiPhone, mdiEmailOutline  } from '@mdi/js'

  export default {
    name: "HeadComponent.vue",
		components: {SvgIcon},
		data() {
      return {
        contacts: [
					{ text: '+380639596624', value: 'tel', icon: mdiPhone },
          { text: 'khizhniak.work@gmail.com', value: 'mailto', icon: mdiEmailOutline },
				],
				social: [
          { text: 'facebook', value: 'https://www.facebook.com/anyta.kukurika', icon: mdiFacebook },
          { text: 'instagram', value: 'https://www.instagram.com/nyta_knitting/', icon: mdiInstagram  },
          { text: 'linkedin', value: 'https://www.linkedin.com/in/anna-khizhniak-089960249/', icon: mdiLinkedin }
				]
			}
		}
  }
</script>

<style scoped>

</style>