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
            @mouseover.native="changeVars(item.class, item.id)"
            @mouseleave.native="textClass = null"
            >
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
        // changeClass(className){

        // },
        changeVars(homeCl, textCl){
            this.data.homeClass = homeCl;
            this.data.textClass = textCl;
            console.log(textClass);

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