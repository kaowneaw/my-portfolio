<template>
  <div>
    <div class="row wrapper-head">
      <div class="bg"></div>
      <div class="col-md-4">
        <div class="img-profile mx-auto"></div>
      </div>
      <div class="col-md-8">
        <div class="content-profile">
          <h1 class="form-group bold text-center">MR. PANYA NOIPRAM</h1>
          <section class="line form-group"></section>
          <h2 class="text-center form-group">I'm Developer</h2>
          <div class="info">
            <div class="item-info">
              <img src="../assets/education.png" width="32px" height="32px" class="float-left">
              <div>
                Silpakorn University <br>
                Faculty of infomation and communication Technology
              </div>
            </div>
            <div class="item-info">
              <img src="../assets/phone.png" width="32px" height="32px" class="float-left">
              <div>
                092-9986349
              </div>
            </div>
            <div class="item-info">
              <img src="../assets/email.png" width="32px" height="32px" class="float-left">
              <div>
                th.panya.bas@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-portfolio">
      <h1 class="text-center title-head">My Portfolio</h1>
      <div class="row">
        <div class="col-md-4">
          <div class="card form-group">
            <img class="card-img-top" src="../assets/nb-iot.png" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card form-group">
            <img class="card-img-top" src="../assets/nb-iot.png" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card form-group">
            <img class="card-img-top" src="../assets/nb-iot.png" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg {
    background-image: url("../assets/bg.jpg");
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 500px;
    width: 100%;
    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -o-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin-bottom: 10px;
  }

  .img-profile {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-image: url("../assets/profile.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .wrapper-head {
    padding-top: 65px;
    height: 500px;
  }

  .content-profile {
    color: white;
  }

  .line {
    height: 5px;
    width: 100%;
    background-color: rgb(237, 125, 49);
  }

  .content-profile h1 {
    font-size: 3.5rem;
  }

  .info div:first-child {
    margin-top: 80px;
  }

  .item-info {
    overflow: hidden;
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }

  .item-info div {
    float: left;
    padding-left: 10px;
  }

  .content-portfolio {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .title-head {
    padding: 30px;
    font-weight: bold;
  }

  .bold {
    font-weight: bold;
  }

  @media screen and (max-width: 1200px) {
    .info div:first-child {
      margin-top: 45px;
    }
  }

  @media (max-width: 992px) {
    .img-profile {
      width: 220px;
      height: 220px;
    }
  }

  @media (max-width: 768px) {
    .bg,.wrapper-head  {
      height: 800px;
    }
  }
</style>
