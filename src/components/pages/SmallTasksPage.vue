<template>
	<div class="wrapper">
  <main class="main">
    <div class="container">
      <div class="main__gallery">

        <div
          class="main__gallery-item"
          v-for="item in tasksItems"
          :key="item.projectLink"
        >

          <div class="main__gallery-item-img">
            <img :src="require(`@/assets/img/${item.preview}`)" alt="preview image">
          </div>

          <div class="main__gallery-textBlock">
            <h3 class="main__gallery-textBlock-label">
              {{ $t(`${checkedLanguage}.${item.label}`) }}
            </h3>

            <p class="main__gallery-textBlock-info">
              {{ item.description }}
            </p>

            <a
              :href="`http://anna-khizhniak.site/portfolio/${item.projectLink}`"
              class="main__gallery-textBlock-button"
            >
              {{ $t(`${checkedLanguage}.openProject`) }}
            </a>
          </div>

          <div class="main__gallery-textBlock right">
            <a
              :href="`${item.github}`" target="_blank"
              class="main__gallery-textBlock-button right"
            >
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
    name: "ReactPage.vue",
    data() {
      return {
        tasksItems: [
          {
            preview: 'react-users.webp',
            label: 'smallUserListLabel',
            description: 'JavaScript, React, Redux, Rest API',
            projectLink: 'react-user-list',
            github: 'https://github.com/AnnaKhiz/Hillel-React-practice'
          },
          {
            preview: 'promo-generator.webp',
            label: 'smallPromoLabel',
            description: 'JavaScript, React, Redux',
            projectLink: 'react-promo',
            github: 'https://github.com/AnnaKhiz/promo-react'
          },
          {
            preview: 'react-currency.webp',
            label: 'smallExchangeLabel',
            description: 'JavaScript, React, Redux, RestAPI, SASS, HTML',
            projectLink: 'react-exchange',
            github: 'https://github.com/AnnaKhiz/react-currency-exchange'
          },
					{
						preview: 'spin-wheel.webp',
						label: 'smallSpinWheelLabel',
						description: 'Vanilla JavaScript, HTML, CSS',
						projectLink: 'spin-wheel',
						github: 'https://github.com/AnnaKhiz/spin_wheel'
					},
					{
						preview: 'deck-cards.png',
						label: 'smallDeckCardsLabel',
						description: 'Vanilla JavaScript, HTML, CSS',
						projectLink: 'cards-deck',
						github: 'https://github.com/AnnaKhiz/deck-of-cards'
					},
					{
						preview: 'dashboard.webp',
						label: 'smallDashboardLabel',
						description: 'Vanilla JavaScript, HTML, CSS, Bootstrap, Chart.js, Webpack',
						projectLink: 'dashboard',
						github: 'https://github.com/AnnaKhiz/mydigitalconstruct_final_project'
					},
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

<style scoped>

</style>
