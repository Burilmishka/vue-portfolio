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

        <div class="about__experience_item about__experience_item--highlighted">
          <div class="about__experience_item-main">
            <span>2019-nowadays</span>
            <span>&ndash; BelHard Development LLC - Richbrains</span>
          </div>
          <div
            class="about__experience_item-description"
          >My starting point in IT as Front-end developer. A lot of experience got there.</div>
        </div>

        <div class="about__experience_item">
          <div class="about__experience_item-main">
            <span>2016 - 2018</span>
            <span>&ndash; UAB «KG Constructions»</span>
          </div>
          <div
            class="about__experience_item-description"
          >Worked in Lithuania as facade and metal structures designer</div>
        </div>

        <div class="about__experience_item">
          <div class="about__experience_item-main">
            <span>2015 - 2016</span>
            <span>&ndash; served in the Armed Forces of the Republic of Belarus.</span>
          </div>
          <div
            class="about__experience_item-description"
          >yes yes, I'm the one who visited that place</div>
        </div>

        <div class="about__experience_item">
          <div class="about__experience_item-main">
            <span>2015</span>
            <span>&ndash; LLC "Belproektstalkonstruktsiya"</span>
          </div>
          <div
            class="about__experience_item-description"
          >I used to be a designer of metal structures</div>
        </div>
      </div>

      <div class="about__education">
        <div class="about__education_title">Bachelor of Civil Engineering</div>
        <div class="about__education_description">
          <div class="about__education_description-university">
            <span>2010 - 2015</span>
            <span>&ndash; Belarusian National Technical University</span>
          </div>
          <div class="about__education_description-faculty">
            <span>Faculty:</span>
            <span>Industrial and civil engineering</span>
          </div>
        </div>
      </div>

      <div class="about__courses">
        <div class="about__courses_title">Courses:</div>

        <div class="about__courses_item">
          <div class="about__courses_item-main">
            <span>2019</span>
            <span>&ndash; conference «The Rolling Scopes Conf 2019», open space «OK16», Minsk</span>
          </div>
        </div>

        <div class="about__courses_item">
          <div class="about__courses_item-main">
            <span>2018</span>
            <span>&ndash; conference «New Adventures in Front-End», bussiness-incubator HTP, Minsk</span>
          </div>
        </div>

        <div class="about__courses_item">
          <div class="about__courses_item-main">
            <span>2018</span>
            <span>&ndash; «Front-End» course, IT-school «MyFreedom»</span>
          </div>
        </div>

        <div class="about__courses_item">
          <div class="about__courses_item-main">
            <span>2018</span>
            <span>&ndash; «PreFront-End» course, Oblast Rasvitia Ltd</span>
          </div>
        </div>

        <div class="about__courses_item">
          <div class="about__courses_item-main">
            <span>2018</span>
            <span>&ndash; «Javascript/FrontEnd» course, The Rolling Scopes School</span>
          </div>
        </div>
      </div>

      <div class="about__skills">
        <div class="about__skills_title">Skills:</div>

        <div class="about__skills_container">
          <div class="about__skills_container-col">
            <div class="about__skills_item-main">
              <span>- Html5, CSS3, Bootstrap</span>
            </div>
            <div class="about__skills_item-main">
              <span>- Less, Sass(Scss)</span>
            </div>
            <div class="about__skills_item-main">
              <span>- js, jquery, ajax(junior)</span>
            </div>
            <div class="about__skills_item-main">
              <span>- Vue, React(junior)</span>
            </div>
            <div class="about__skills_item-main">
              <span>- twig, pug</span>
            </div>
            <div class="about__skills_item-main">
              <span>- gulp, webpack</span>
            </div>
            <div class="about__skills_item-main">
              <span>- sulu-cms, umbraco-cms, rich-cms</span>
            </div>
          </div>

          <div class="about__skills_container-col">
            <div class="about__skills_item-main">
              <span>- amp</span>
            </div>
            <div class="about__skills_item-main">
              <span>- svg</span>
            </div>
            <div class="about__skills_item-main">
              <span>- docker</span>
            </div>
            <div class="about__skills_item-main">
              <span>- git</span>
            </div>
            <div class="about__skills_item-main">
              <span>- seo</span>
            </div>
            <div class="about__skills_item-main">
              <span>- Photoshop/ Lightroom, figma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'AppMedium'
};
</script>

<style lang="scss" scoped>
.about {
  position: absolute;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &__header {
    &_back {
      position: absolute;
      top: 0;
      left: 0;
      padding: 35px 0 0 20px;

      &-img {
        display: block;
        width: 35px;
        height: 35px;
        background-image: url("/src/img/icons/back-button.png");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
    }

    &_name {
      position: absolute;
      top: 0;
      right: 0;
      padding: 40px 20px 0 0;

      &-text {
        font-family: "cond-cond",sans-serif;
        text-transform: uppercase;
        font-size: 16px;
        letter-spacing: 100%;
        font-weight: 700;
        color: #c2c3b7;
        // color: #acb1a1;
      }
    }
  }

  &__content {
    background-color: #929786;
    // background-color: #f2efe8;
    padding: 140px 15vw 0;
  }

  &__main-title {
    color: #c2c3b7;
    font-size: 10vw;
    font-family: "cond-cond",sans-serif ;
    text-transform: uppercase;
    font-weight: 400;
    line-height: 10vw;

    &:nth-child(2){
      color: #f2efe8;   
    }
  }

  &__experience {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 40px;

    &_title {
      color: #f2efe8;
      font-family: "cond-cond",sans-serif ;
      font-size: 24px;
      line-height: 30px;
    }

    &_item {
      padding-top: 10px;

      &-main{
        span{
          font-family: 'Roboto Condensed', sans-serif;
          font-size: 16px;
          color: #c2c3b7;
          line-height: 26px;
        }
      }

      &-description{
        padding-top: 4px;
        color: #7a816a;
        font-size: 12px;
        line-height: 16px;
        padding-left: 40px;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 200;
      }

      &--highlighted{
        .about__experience_item{
          &-main{
            color: #f2efe8;

            span{
              color: #f2efe8;
            }
          }

          &-description{
            color: #f2efe8;
          }
        }
      }

      // &:nth-child(2){
      //   background-color: red;
      //   // .about__experience_item-main{
      //   //   color: red;
      //   // }
      // }
    }
  }

  &__education{
    &_title{
      color: #7a816a;
      font-size: 36px;
      font-family: "Oswald", sans-serif;
      line-height: 46px;
    }

    &_description{
      color: #7a816a;
      font-size: 22px;
      font-family: "Oswald", sans-serif;
      line-height: 26px;
    }
  }

  &__courses{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &_title{
      color: #7a816a;
      font-size: 22px;
      font-family: "Oswald", sans-serif;
      line-height: 26px;
    }

    &_item{
      color: #7a816a;
      font-size: 16px;
      font-family: "Oswald", sans-serif;
      line-height: 20px;
    }
  }

  &__skills{
    &_title{
      color: #7a816a;
      font-size: 22px;
      font-family: "Oswald", sans-serif;
      line-height: 26px;
    }

    &_container{
      // width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;

      &-col{
        // width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
    }

    &_item{
      &-main{
        color: #7a816a;
        font-size: 16px;
        font-family: "Oswald", sans-serif;
        line-height: 20px;
      }
    }
  }
}
</style>