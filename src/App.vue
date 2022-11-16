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
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
}

p {
  font-size: 14pt;
}

.wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
