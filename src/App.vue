<template>
  <div id="container">
    <div id="app">
      <ResponsiveNavigation
        :nav-links="navLinks"
        :image-path="require('./assets/images/menuLogo.png')"
        :image-profile="require('./assets/images/exempleProfil.jpg')"
        background="rgb(25, 39, 52)"
        link-color="#fff"
        hoverBackground="rgb(35, 66, 95)"
      />
    </div>

    <router-view v-slot="{ Component }">
      <transition name="router-anim">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import ResponsiveNavigation from "./components/ResponsiveNavigation.vue";

export default {
  components: {
    ResponsiveNavigation,
  },

  data: () => ({
    navLinks: [
      {
        text: "Home",
        path: "/",
        icon: "ion-ios-home",
      },
      {
        text: "Login",
        path: "/login",
        icon: "ion-ios-log-in",
      },
      {
        text: "Profile",
        path: "/profile",
        icon: "ion-ios-person",
      },
    ],
  }),
};
</script>

