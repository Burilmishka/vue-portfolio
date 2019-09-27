<template>
  <div class="about">
    <div class="about__header">
      <div class="about__header_back">
        <router-link to="/" class="about__header_back-img"></router-link>
      </div>
      <div class="about__header_name">
        <p class="about__header_name-text">About</p>
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
          description: "- worked in LT as facade and metal structures designer"
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