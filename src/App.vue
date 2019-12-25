<template>
  <v-app>
    <Navbar />
    <v-content />
    <router-view> </router-view>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./views/Navbar";
import Footer from "./views/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style lang="scss">
.font {
  font-family: "Noto Sans Lao UI", "Bahnschrift Light";
}

.mr-2 {
  font-size: 16px;
  color: #ffffff;
}
</style>
