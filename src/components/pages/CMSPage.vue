<template>
	<div class="wrapper">
        <main class="main">
            <div class="container">
                <div class="main__gallery">
                    <div class="main__gallery-item">
                      <div class="main__gallery-item-img">
                          <img :src="require('@/assets/img/meliorit.webp')" alt="preview image">
                      </div>
                      <div class="main__gallery-textBlock">

                          <h3 class="main__gallery-textBlock-label">
                              -- WordPress --
                          </h3>
                          <p class="main__gallery-textBlock-info">
                            {{ $t(`${this.checkedLanguage}.descProjectWPMeliorit`) }}
                          </p>
                          <a href="https://anna-khizhniak.site/wp/" class="main__gallery-textBlock-button">
                            {{ $t(`${this.checkedLanguage}.openProject`) }}
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
    name: "CMSPage.vue",
    computed: {
      checkedLanguage() {
				return this.$i18next.language
		},
    }
  }
</script>

<style scoped>

</style>