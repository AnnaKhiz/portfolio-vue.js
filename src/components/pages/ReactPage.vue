<template>
	<div class="wrapper">
  <main class="main">
    <div class="container">
      <div class="main__gallery">

        <div 
          class="main__gallery-item" 
          v-for="item in reactItems" 
          :key="item.projectLink"
        >

          <div class="main__gallery-item-img">
            <img :src="require(`@/assets/img/${item.preview}`)" alt="preview image">
          </div>

          <div class="main__gallery-textBlock">
            <h3 class="main__gallery-textBlock-label">
              React & Redux <br>
              <span class="lng-reactUserListLabel">{{ $t(`${checkedLanguage}.${item.subtitle}`) }}</span>
            </h3>

            <p class="main__gallery-textBlock-info lng-descProjecReactUsers">
              {{ item.description }}
            </p>

            <a 
              :href="`http://anna-khizhniak.site/portfolio/${item.projectLink}`" 
              class="main__gallery-textBlock-button lng-openProject"
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
        reactItems: [
          { 
            label: 'React & Redux', 
            preview: 'react-users.webp', 
            subtitle: 'reactUserListLabel',
            description: 'java script, React, Redux, Rest API', 
            projectLink: 'react-user-list',
            github: 'https://github.com/AnnaKhiz/Hillel-React-practice' 
          },
          { 
            label: 'React & Redux', 
            preview: 'promo-generator.webp', 
            subtitle: 'reactPromoLabel',
            description: 'JavaScript, React, Redux', 
            projectLink: 'react-promo',
            github: 'https://github.com/AnnaKhiz/promo-react' 
          },
          { 
            label: 'React & Redux', 
            preview: 'react-currency.webp', 
            subtitle: 'reactExchangeLabel',
            description: 'JavaScript, React, Redux, RestAPI, SASS, HTML', 
            projectLink: 'react-exchange',
            github: 'https://github.com/AnnaKhiz/react-currency-exchange' 
          }
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