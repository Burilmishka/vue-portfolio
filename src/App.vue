<template>
  <div class="main">
    <router-view />
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>