<template>
  <div>
    <div id="app" class="container">
      <router-view/>
    </div>
    <footer class="footer">
      Copyright @ by PanyaBas 2018
    </footer>
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
  @import "assets/styles/timeline.css";
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #F4F7F6 !important;
    -webkit-font-smoothing: antialiased;
  }
  .footer {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3D4351;
    height: 52px;
    font-size: 12px;
    color: white;
  }
</style>
