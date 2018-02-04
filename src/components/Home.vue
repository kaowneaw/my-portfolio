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
    <div class="content-timeline">
      <div class="row example-centered">
        <div class="col-md-12 example-title">
          <h1 class="text-center title-head">Experience</h1>
        </div>
        <div class="col-md-12 col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
          <ul class="timeline timeline-centered">
            <li class="timeline-item">
              <div class="timeline-info">
                <span>Work at AIS</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">2015 - PRESENT</h3>
                <p>Web & Mobile Developer</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>Work at NEXT-CORP</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">2014</h3>
                <p>Web Developer & System Analysis</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content-portfolio">
      <h1 class="text-center title-head">My Portfolio</h1>
      <div class="row">
        <div class="col-md-4">
          <div class="card form-group">
            <a href="#" target="_blank">
              <img class="card-img-top" src="../assets/nb-iot.png" alt="Card image cap">
              <div class="card-body">
                <div class="card-text">
                  <h5>Magellan NB-IOT</h5>
                  <small>IOT Platform</small>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card form-group">
            <a href="https://www.aischatapp.com" target="_blank">
              <img class="card-img-top" src="../assets/chat-platform.jpg" alt="Card image cap">
              <div class="card-body">
                <div class="card-text">
                  <h5>Chat Platform</h5>
                  <small>Chat for Organize</small>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card form-group">
            <a href="#" target="_blank">
              <img class="card-img-top" src="../assets/doctor.jpg" alt="Card image cap">
              <div class="card-body">
                <div class="card-text">
                  <h5>AIS Wellness</h5>
                  <small>Healthcare Platform</small>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card form-group">
            <a href="https://play.google.com/store/apps/details?id=th.co.mimo.aistcdc&hl=th" target="_blank">
              <img class="card-img-top" src="../assets/dc.png" alt="Card image cap">
              <div class="card-body">
                <div class="card-text">
                  <h5>AIS D.C.</h5>
                  <small>Application for AIS D.C.</small>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card form-group">
            <a href="https://play.google.com/store/apps/details?id=th.co.mimo.aistcdc&hl=th" target="_blank">
              <img class="card-img-top" src="../assets/ais-fiber.jpg" alt="Card image cap">
              <div class="card-body">
                <div class="card-text">
                  <h5>AIS FIBER ADMIN</h5>
                  <small>Application Management Fiber Internet</small>
                </div>
              </div>
            </a>
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

  .card:hover {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
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
    color: white;
  }

  .content-profile h2 {
    color: white;
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
    font-size: 16px;
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
    .bg, .wrapper-head {
      height: 800px;
    }
  }
</style>
