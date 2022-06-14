<template>
  <sign-in v-if="isLogIn == false" @log-in="isLogIn = $event" />
  <div class="wrapper" v-if="isLogIn">
    <NavBar @log-out="isLogIn = $event" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SignIn from "@/components/SignIn.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SignIn,
  },
  data(){
    return {
      isLogIn: false
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url('http://hb.bizmrg.com/fonts/montserrat/400.woff2') format('woff2'), url('http://hb.bizmrg.com/fonts/montserrat/400.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}  

p {
  font-size: 14pt;
}

.wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
