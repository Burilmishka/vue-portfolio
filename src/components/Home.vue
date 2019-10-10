<template>
  <div class="home" @mousemove="cursorDecorator">
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
            :key="`home-link-${item.id}`"
            :to="item.link"
            @mouseover.native="changeVars(item)"
            @mouseleave.native="resetVars(item)"
            :class="{'home__links_link--active' : textClass == item.id}">
                <div class="home__links_link-line"></div>
                <div class="home__links_link-text">{{ item.name }}</div>
        </router-link>
    </div>
    <!-- <div class="cursor" :style="computedStyle"></div> -->
    <!-- <div>{{ x }}, {{ y }}</div> -->
  </div>
</template>

<script>

export default {
    data: () => {
        return {
            textClass: null,
            homeClass: null,
            x: 'no',
            y: 'no',
            computedStyle: '',
        }
    },
    methods: {
        changeVars(item){
            this.homeClass = item.class;
            this.textClass = item.id;
            this.$store.commit('updateBgClass', item.class);
        },
        resetVars(item){
            this.textClass = '';
            // this.homeClass = '';
            // this.$store.commit('updateBgClass', this.homeClass);
            // console.log('bgClass', this.$store.state.mainBgClass.bgClass);
        },
        cursorDecorator(event){
            // this.x = event.pageX;
            // this.y = event.pageY;
            // this.computedStyle = `top: ${this.y - 10}px;left: ${this.x - 10}px`;
        },
    },
    computed: {
        linkButtons(){
            return [
                {
                    link: '/about', 
                    name: 'About',
                    class: 'main--green',
                    id: 1
                },
                {
                    link: '/works', 
                    name: 'Works',
                    class: 'main--black',
                    id: 2
                },
                {
                    link: '/contact', 
                    name: 'Contact',
                    class: 'main--red',
                    id: 3
                }
            ]
        }
    },
    // mounted () {
    //     let cursorEl = document.querySelector('.cursor');
    //     this.cursorEl = cursorEl;
    //     // console.log(this.cursorEl);
    //     document.body.addEventListener('mousemove', this.cursorDecorator);
    // }
}
</script>