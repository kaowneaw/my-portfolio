<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto|Rubik:300,300i,400,400i,500,500i,700,700i,900,900i');
  body {
    font-family: 'Roboto', sans-serif;
  }
</style>
