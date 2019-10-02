<template>
  <div class="works">
    <div class="header">
      <div class="header__back">
        <router-link to="/" class="header__back_img">
          <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 37L27 17.8L31.62 22.42C32.014 22.814 32.484 23 33 23C33.984 23 35 22.187 35 21C35 20.469 34.807 20.006 34.42 19.62L26.462 11.662C26.134 11.334 25.729 11 25 11C24.271 11 23.92 11.279 23.553 11.646L15.58 19.62C15.193 20.006 15 20.469 15 21C15 22.188 16.016 23 17 23C17.516 23 17.986 22.814 18.38 22.42L23 17.8L23 37C23 38.104 23.896 39 25 39C26.104 39 27 38.104 27 37Z" fill="#f94444"/>
            <circle cx="25" cy="25" r="24.5" stroke="#f94444"/>
          </svg>
        </router-link>
      </div>
      <div class="header__name">
        <p class="header__name_text">Works</p>
      </div>
    </div>

    <div class="works__content">
      <div class="works__links">
        <router-link    
            v-for="item in worksItems" 
            class="works__links_link"
            :key="`work-${item.id}`"
            :to="item.link">
            {{ item.name }}  
        </router-link>
      </div>

      <div class="works__description">
        I'm very curious person. So I'm often trying something new. 
        New technologies, libraries, effects and else to become more competent 
        and open-minded.
      </div>
    </div>

    

  </div>
</template>

<script>
  export default {
    data() {
      return {
        blocks: ['works__description'],
        offsets: [],
      }
    }, 
    computed: {
      worksItems() {
        return [
          {
            link: '/works/flo',
            name: 'Flo',
          },
          {
            link: '/works/flo-pt1',
            name: 'Flo Pt.2',
          },
          {
            link: '/works/flo-pt1',
            name: 'Flo Pt.3',
          },
          {
            link: '/works/dhge',
            name: 'DHGE',
          },
          {
            link: '/works/studyonline',
            name: 'ULAW',
          },
          {
            link: '/works/lsbf-global',
            name: 'Global LSBF',
          },
          {
            link: '/works/lsbf',
            name: 'LSBF',
          },
          {
            link: '/works/times',
            name: 'Times Academy',
          }
        ]
      }
    },
    methods: {
      scrollTransition(event){
        let winScrollY = window.pageYOffset + window.innerHeight;
        let transitionEl;

        for(let i=0; i < this.offsets.length; i++){
          if(winScrollY > this.offsets[i]){
            transitionEl = document.querySelector(`.${this.blocks[i]}`);
            transitionEl.classList.add('works--transition');
          }
        }
      },
    },
    mounted () {
      window.addEventListener('scroll', this.scrollTransition);

      for(let i=0; i < this.blocks.length; i++){
        let el = document.querySelector(`.${this.blocks[i]}`);
        let elOffset = el.offsetTop;
        this.offsets.push(elOffset);
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollTransition);
    }
  };
</script>