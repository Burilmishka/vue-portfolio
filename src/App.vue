<template>
  <div class="main">
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
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active в версии ниже 2.1.8 */ {
    opacity: 0
  }
</style>