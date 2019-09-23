<template>
  <div class="home">
    <!-- <div class="home__title">Mike Adutskevich</div> -->

    <div class="home__description">
      <p>Front-end developer</p>
      <p>in Minsk, Belarus</p>
    </div>

    <div 
        class="home__links">

        <router-link    
            v-for="item in linkButtons" 
            class="home__links_link"
            :key="item.name"
            :to="item.link"
            @mouseover.native="hover = item.id"
            @mouseleave.native="hover = null"
            :class="{ 'home__links_link--active': hover === item.id }">
            {{ item.name }}  
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            hover: null,
        }
    },
    computed: {
        linkButtons(){
            return [
                {
                    link: '/about', 
                    name: 'About',
                    id: 1
                },
                {
                    link: '/works', 
                    name: 'Works',
                    id: 2
                },
                {
                    link: '/contact', 
                    name: 'Contact',
                    id: 3
                }
            ]
        }
    }
}
</script>





<style lang="scss" scoped>
    .home {
        position: absolute;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        &__description {
            width: 100%;
            max-width: 400px;
            font-family: "Roboto Condensed", sans-serif;
            font-style: italic;
            font-size: 16px;
            font-weight: 300;
            color: #acb1a1;
            margin-top: 70px;
            text-align: center;
        }

        &__links{
            position: absolute;
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 0;

            &_link{
                width: 70%;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                font-family: "Oswald", sans-serif;
                font-size: 70px;
                letter-spacing: normal;
                line-height: 100%;
                font-weight: bold;;
                transition: all .3s ease;
                color: #acb1a1;


                &:not(:first-child){
                    &:before{
                        content: "";
                        position: relative;
                        display: block;
                        width: 80%;
                        height: 1px;
                        background-color: #acb1a1;
                        margin: 25px 0;
                    }
                }

                &--active {
                    letter-spacing: .2rem;
                    transition: all .3s ease;
                }
            }
        }
    }
</style>