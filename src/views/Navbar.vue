<template>
  <nav class="font">
    <v-app-bar
      :clipped-right="$vuetify.breakpoint.lgAndUp"
      app
      color="indigo"
      dark
    >
      <div class="d-flex align-center">
        <router-link :to="`/${$i18n.locale}`">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('../assets/l.png')"
            transition="scale-transition"
            width="100"
          />
        </router-link>
      </div>

      <v-toolbar-title style="width: 50%" class="ml-0 pl-2"></v-toolbar-title>
      <v-spacer />
      <v-tabs align-with-title background-color="transparent">
        <v-tab>
          <router-link :to="`/${$i18n.locale}/Register`">
            <span class="mr-2">{{ $t("Navbar.Register") }}</span></router-link
          >
        </v-tab>
        <v-tab>
          <router-link :to="`/${$i18n.locale}/Inspection`">
            <span class="mr-2">{{ $t("Navbar.Inspection") }}</span></router-link
          >
        </v-tab>
        <v-tab>
          <router-link :to="`/${$i18n.locale}/Service`">
            <span class="mr-2">{{ $t("Navbar.Service") }}</span></router-link
          >
        </v-tab>
        <v-tab>
          <router-link :to="`/${$i18n.locale}/Roport`">
            <span class="mr-2">{{ $t("Navbar.Report") }}</span></router-link
          >
        </v-tab>
        <v-tab>
          <router-link :to="`/${$i18n.locale}/User`">
            <span class="mr-2">{{ $t("Navbar.User") }}</span></router-link
          >
        </v-tab>
           <v-tab>
          <router-link :to="`/${$i18n.locale}/Login`">
            <span class="mr-2">Login</span></router-link
          >
        </v-tab>
        <v-tab>
          <router-link :to="`/${$i18n.locale}/Logout`">
            <span class="mr-2">{{ $t("Navbar.Logout") }}</span></router-link
          >
        </v-tab>
      </v-tabs>
      <Language />
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 3" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </nav>
</template>

<script>
import Language from "@/components/Language.vue";

export default {
  name: "app",
  components: {
    Language
  },
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>
