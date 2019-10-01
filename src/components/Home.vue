<template>
  <div  class="home"
        :class="homeClass">
    <!-- <div class="home__title">Mike Adutskevich</div> -->
    <div class="home__title">Mike Adutskevich</div>
    <div class="home__description">
      <p>Front-end developer</p>
      <p>in Minsk, Belarus</p>
    </div>

    <div class="home__links">
        <router-link    
            v-for="item in linkButtons" 
            class="home__links_link"
            :key="item.id"
            :to="item.link"
            @mouseover.native="changeVars(item)"
            @mouseleave.native="textClass = null"
            :class="{'home__links_link--active' : textClass == item.id}">
            
            {{ item.name }}  
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            textClass: null,
            homeClass: null,
        }
    },
    methods: {
        changeVars: function(item){
            this.homeClass = item.class;
            this.textClass = item.id;
        }
    },
    computed: {
        linkButtons(){
            return [
                {
                    link: '/about', 
                    name: 'About',
                    class: 'home--green',
                    id: 1
                },
                {
                    link: '/works', 
                    name: 'Works',
                    class: 'home--black',
                    id: 2
                },
                {
                    link: '/contact', 
                    name: 'Contact',
                    class: 'home--red',
                    id: 3
                }
            ]
        }
    }
}
</script>