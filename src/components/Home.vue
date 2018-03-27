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
                092-9956349
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
        <div class="col-md-4" v-for="(portfolio, index) in portfolios" :key="index">
          <div class="card form-group" @click="showModal(portfolio.gallery)">
              <img class="card-img-top" :src="portfolio.img" alt="Card image cap">
              <div class="card-body">
                <div class="card-text">
                  <h5>{{portfolio.title}}</h5>
                  <small>{{portfolio.desc}}</small>
                  <a :href="portfolio.src.link" class="float-right" target="_blank">
                    <img src="../assets/chrome_ico.png" width="25px" height="25px" v-if="portfolio.src.type === 'web'" >
                    <img src="../assets/android_ico.png" width="25px" height="25px" v-if="portfolio.src.type === 'android'">
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-portfolio">
      <h1 class="text-center title-head">My Skills</h1>
      <div class="row">
        <div class="offset-md-2 col-md-8">
          <div v-for="(skill, index) in skills" class="row mb-1" :key="index">
            <div class="col-sm-2">{{ skill.variant }}:</div>
            <div class="col-sm-10 pt-1">
              <b-progress :value="skill.value" :max="100" :variant="skill.variant" :key="skill.variant"></b-progress>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Component -->
    <b-modal ref="myModalRef" title="รูปภาพ" size="lg" centered :hide-footer="true">
      <b-carousel :interval="4000" controls indicators background="#ababab" img-height="480" v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <b-carousel-slide v-for="(imgPreview, index) in slidingImg" :img-src="imgPreview" :key="index"></b-carousel-slide>
      </b-carousel>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      slide: 0,
      sliding: null,
      slidingImg: [],
      portfolios: [
        {
          title: 'อสม. ออนไลน์',
          desc: 'Health Local Platform',
          img: 'https://www.img.in.th/images/21aa80e83843bc92d0070064ce989cdb.jpg',
          gallery: [
            'https://www.img.in.th/images/7666e6081f06341dad10284c2eefae8a.jpg',
            'https://www.img.in.th/images/f8f4831deb329c9a52a67486700a9cec.jpg',
            'https://www.img.in.th/images/21aa80e83843bc92d0070064ce989cdb.jpg'
          ],
          src: {
            type: 'web',
            link: 'https://phc.ais.co.th'
          }
        },
        {
          title: 'Magellan NB-IOT',
          desc: 'IOT Platform',
          img: 'https://www.img.in.th/images/238c514c7f58ef79d9851b127a6ea90d.jpg',
          gallery: [
            'https://www.img.in.th/images/238c514c7f58ef79d9851b127a6ea90d.jpg',
            'https://www.img.in.th/images/2ddbf13d458a7d14e65a439b7ea76feb.jpg',
            'https://www.img.in.th/images/93f5e8c8d7ac163f1eba3144e48e8854.jpg'
          ],
          src: {
            type: 'web',
            link: ''
          }
        },
        {
          title: 'Chat Platform',
          desc: 'Chat for Organize',
          img: 'https://www.picz.in.th/images/2018/03/17/Sxw4qv.jpg',
          gallery: [
            'https://www.picz.in.th/images/2018/03/17/Sxw4qv.jpg',
            'https://www.img.in.th/images/88b7b9c1b03fde95b9862b851eb8e1cc.jpg',
            'https://www.img.in.th/images/f8c8f6aed04a092530787f46bdff4694.jpg',
            'https://www.img.in.th/images/19170d5265e15cfd38a719c7d5f6c736.jpg'
          ],
          src: {
            type: 'web',
            link: 'https://www.aischatapp.com/'
          }
        },
        {
          title: 'AIS Wellness',
          desc: 'Healthcare Platform',
          img: 'https://www.picz.in.th/images/2018/03/17/SxwfSN.jpg',
          gallery: [
            'https://www.picz.in.th/images/2018/03/17/SxwfSN.jpg',
            'https://www.img.in.th/images/0b3b7d576224696b7ccac7b162e33cfb.jpg',
            'https://www.img.in.th/images/2f79add2e3c6d260e22496a3e2bcc4a2.jpg',
            'https://www.img.in.th/images/ddd1aa09cafb58e704efcdb2f14c0e49.jpg'
          ],
          src: {
            type: 'web',
            link: ''
          }
        },
        {
          title: 'AIS D.C.',
          desc: 'Application for AIS D.C.',
          img: 'https://www.img.in.th/images/ba5a416747ffa3b75e0810cd11bc2a3a.jpg',
          gallery: [
            'https://www.img.in.th/images/ba5a416747ffa3b75e0810cd11bc2a3a.jpg',
            'https://www.img.in.th/images/aec0d33defbfa8cfcda310dde470bae5.jpg',
            'https://www.img.in.th/images/c1ef3272cb19116b713fc2523ac16ce1.jpg',
            'https://www.img.in.th/images/ed78703f33cddff97467b5daa0039642.jpg'
          ],
          src: {
            type: 'android',
            link: 'https://play.google.com/store/apps/details?id=th.co.mimo.aistcdc&hl=th'
          }
        },
        {
          title: 'AIS FIBER ADMIN',
          desc: 'Application Management Fiber Internet',
          img: 'https://www.picz.in.th/images/2018/03/17/SxwSGl.jpg',
          gallery: [
            'https://www.picz.in.th/images/2018/03/17/SxwSGl.jpg',
            'https://www.img.in.th/images/a50466ae0eeb1f5d499a7412ced355b8.jpg',
            'https://www.img.in.th/images/8e41e5f5103a8794dafac9b0557f8726.jpg',
            'https://www.img.in.th/images/b2eaf52f9b2ec731b6535bb01554c258.jpg'
          ],
          src: {
            type: 'web',
            link: ''
          }
        }
      ],
      skills: [
        {variant: 'HTML5', value: 90},
        {variant: 'Css', value: 90},
        {variant: 'Bootstrap', value: 90},
        {variant: 'AngularJS', value: 80},
        {variant: 'VueJS', value: 80},
        {variant: 'Android', value: 75},
        {variant: 'NodeJS', value: 70},
        {variant: 'PHP', value: 70},
        {variant: 'JAVA', value: 50},
        {variant: 'Docker', value: 50}
      ]
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    showModal (gallery) {
      this.slidingImg = gallery
      this.$refs.myModalRef.show()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
  .card {
    cursor: pointer;
  }

  .carousel-control-next-icon, .carousel-control-prev-icon {
    background-color: black;
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

  .progress-bar {
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

  .card-img-top{
    height: 260px;
    object-fit: cover;
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
