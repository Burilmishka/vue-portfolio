<template>
  <div class="about">
    <div class="header">
      <div class="header__back">
        <router-link to="/" class="header__back_img">
          <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 37L27 17.8L31.62 22.42C32.014 22.814 32.484 23 33 23C33.984 23 35 22.187 35 21C35 20.469 34.807 20.006 34.42 19.62L26.462 11.662C26.134 11.334 25.729 11 25 11C24.271 11 23.92 11.279 23.553 11.646L15.58 19.62C15.193 20.006 15 20.469 15 21C15 22.188 16.016 23 17 23C17.516 23 17.986 22.814 18.38 22.42L23 17.8L23 37C23 38.104 23.896 39 25 39C26.104 39 27 38.104 27 37Z" fill="#f2efe8"/>
            <circle cx="25" cy="25" r="24.5" stroke="#f2efe8"/>
          </svg>
        </router-link>
      </div>
      <div class="header__name">
        <p class="header__name_text">About</p>
      </div>
    </div>

    <div class="about__content">
      <h1 class="about__main-title">I'm Mike Adutskevich. A Front-end developer </h1>
      <h1 class="about__main-title">focused on reactive technologies & new experiences</h1>

      <div class="about__experience">
        <div class="about__experience_title">Experience:</div>

        <div class="about__experience_items">
          <div class="about__experience_item" v-for="item in experiences" :key="item.id">
            <div class="about__experience_item-main">
              <div class="about__experience_item-main-year">{{ item.year }}</div>
              <div class="about__experience_item-main-name">{{ item.name }}</div>
            </div>
            <div class="about__experience_item-description">{{ item.description }}</div>
          </div>
        </div>
      </div>




      <div class="about__courses">
        <div class="about__courses_title">Courses:</div>
        
        <div class="about__courses_items">
          <div class="about__courses_item" v-for="item in courses" :key="item.id">
            <!-- <div class="about__courses_item-main"> -->
              <div class="about__courses_item-year">{{ item.year }}</div>
              <div class="about__courses_item-name">{{ item.name }}</div>
            <!-- </div> -->
          </div>
        </div>
      </div>

      <div class="about__skills">
        <div class="about__skills_title">Skills:</div>

        <div class="about__skills_container">
          <div class="about__skills_container-col">
            <div class="about__skills_item" v-for="item in skillsOne" :key="item.id">
              <div>&ndash;&nbsp;</div>
              <div class="about__skills_item-name">{{ item }}</div>
            </div>
          </div>

          <div class="about__skills_container-col">
            <div class="about__skills_item" v-for="item in skillsTwo" :key="item.id">
              <div>&ndash;&nbsp;</div>
              <div class="about__skills_item-name">{{ item }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="about__education">
        <div class="about__education_title">Education:</div>
        <div class="about__education_name">Bachelor of Civil Engineering</div>
        <div class="about__education_description">
          <div class="about__education_description-university">
            <div class="about__education_description-university-first">2010-2015</div>
            <div class="about__education_description-university-name">Belarusian National Technical University</div>
          </div>
          <div class="about__education_description-faculty">
            <div class="about__education_description-faculty-first">Faculty:</div>
            <div class="about__education_description-university-name">Industrial and civil engineering</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../css/main.scss'

export default {
  data() {
    return{
      experiences: [
        {
          year: "2019-present",
          name: "BelHard Development LLC - Richbrains",
          description: "- my starting point in IT as Front-end developer"
        },
        {
          year: "2016-2018",
          name: 'UAB "KG Constructions"',
          description: "- worked in LT as al and metal structures designer"
        },
        {
          year: "2015-2016",
          name: "served in the Armed Forces of the Republic of Belarus",
          description: "- yes yes, I'm the one who visited that place"
        },
        {
          year: "2015",
          name: '"Bel Proekt Stal Konstruktsiya" LLC',
          description: "- I used to be a designer of metal structures"
        }
      ],
      courses: [
        {
          year: '2019',
          name: 'conference «The Rolling Scopes Conf 2019», open space «OK16», Minsk'
        },
        {
          year: '2018',
          name: 'conference «New Adventures in Front-End», bussiness-incubator HTP, Minsk'
        },
        {
          year: '2018',
          name: '«Front-End» course, IT-school «MyFreedom»'
        },
        {
          year: '2018',
          name: '«PreFront-End» course, Oblast Rasvitia Ltd'
        },
        {
          year: '2018',
          name: '«Javascript/FrontEnd» course, The Rolling Scopes School'
        },
      ],
      skillsOne: [
        'Html5, CSS3, Bootstrap',
        'Less, Sass(Scss)',
        'js, jquery, ajax(junior)',
        'Vue, React(junior)',
        'twig, pug',
        'gulp, webpack',
        'sulu-cms, umbraco-cms, rich-cms'
      ],
      skillsTwo: [
        'amp',
        'svg',
        'docker',
        'git',
        'seo(junior)',
        'Photoshop/ Lightroom, figma'
      ]
    }
  }
  
};
</script>