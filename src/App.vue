<template>
  <div class="main">
    <div class="main__title">Mike Adutskevich</div>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">

  *{
    margin: 0;
    padding: 0;
  }

  .main{
    background-color: #f2efe8;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    &__title {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
      font-family: "cond-cond",sans-serif ;
      text-transform: uppercase;
      font-size: 16px;
      letter-spacing: 100%;
      font-weight: 700;
      color: #acb1a1;
      text-align: center;
      padding-top: 40px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active в версии ниже 2.1.8 */ {
    opacity: 0
  }
</style>