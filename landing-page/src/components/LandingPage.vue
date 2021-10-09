<template>
  <section class="landing-page">
    <div class="red-block"></div>

    <transition appear appear-active-class="fade-enter-active">
      <b-jumbotron v-show="!show" fluid header-level="1" class="landing-page-jumbotron" header-html='<h1 class="landing-page-header">Explore</h1>'>
        <b-container>
          <b-row class="landing-page-jumbotron-info" align-v="center" align-h="center">
            <b-col cols="2">
              <b-button @click="show = !show"  class="plus-circle-btn btn">
                <b-icon scale="2" icon="plus-circle"></b-icon>
              </b-button>
            </b-col>
            <b-col cols="3">
              <p class="plus-circle-btn-subtitle">More Details</p>
            </b-col>
          </b-row>
        </b-container>
      </b-jumbotron>
    </transition>

    <transition
      enter-active-class="animated fadeIn zoomIn"
      leave-active-class="animated fadeOut zoomOut"
    >
      <div v-if="show" class="landing-page-info-container">
        <div class="landing-page-info">
          <b-button @click="show = !show" class="close-landing-page-info-btn btn">
            <b-icon scale="2" icon="x"></b-icon>
          </b-button>

          <h2 class="landing-page-info-header">Explore</h2>

          <p class="landing-page-info-paragraph">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <b-button class="landing-page-info-btn">Read More</b-button>
        </div>
      </div>
    </transition>

    <b-container fluid class="landing-page-social">
      <b-row>
        <b-col cols="3"></b-col>
        <b-col cols="3"></b-col>
        <b-col cols="3"></b-col>
        <b-col cols="3" align-self="end">
          <div class="social-media-btns">
            <b-button-group vertical>
              <b-button class="social-media-btn btn">
                <b-icon scale="2" icon="facebook"></b-icon>
              </b-button>
              <b-button class="social-media-btn btn">
                <b-icon scale="2" icon="instagram"></b-icon>
              </b-button>
            </b-button-group>
          </div>
        </b-col>
      </b-row>
    </b-container>

  </section>
</template>

<script>


  export default {
    name: 'LandingPage',
    data() {
      return {
        show: false
      }
    }
  }
</script>

<style>



</style>
