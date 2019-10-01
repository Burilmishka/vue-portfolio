<template>
  <div class="contact">
    <div class="header">
      <div class="header__back">
        <router-link to="/" class="header__back_img">
          <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27 37L27 17.8L31.62 22.42C32.014 22.814 32.484 23 33 23C33.984 23 35 22.187 35 21C35 20.469 34.807 20.006 34.42 19.62L26.462 11.662C26.134 11.334 25.729 11 25 11C24.271 11 23.92 11.279 23.553 11.646L15.58 19.62C15.193 20.006 15 20.469 15 21C15 22.188 16.016 23 17 23C17.516 23 17.986 22.814 18.38 22.42L23 17.8L23 37C23 38.104 23.896 39 25 39C26.104 39 27 38.104 27 37Z" fill="#ffffff"/>
            <circle cx="25" cy="25" r="24.5" stroke="#ffffff"/>
          </svg>
        </router-link>
      </div>
      <div class="header__name">
        <p class="header__name_text">Contact</p>
      </div>
    </div>

    <div class="contact__content">
      <h1 class="contact__main-title">Let's collaborate</h1>

      <a class="contact__email" href="mailto:m.adutskevich@gmail.com">m.adutskevich@gmail.com</a>

      <div class="contact__descriptions">
        Briefly describe your project, budget and 
        timeline and I will try to help you
      </div>

      <div class="contact__sign">
        <div class="contact__sign_text">With respect,</div>
        <div class="contact__sign_name">Mike</div>
      </div>

    </div>
 

  </div>
</template>

<script>
export default {
    name: 'AppMedium'
};
</script>

<style lang="scss" scoped>
    .title {
        h1 {
            color: red;
        }
    }
</style>