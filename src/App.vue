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

    <router-view v-slot="slot">
      <transition name="router-anim" mode="out-in">
        <component :is="slot.Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import "/public/style.scss";
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
        text: "Profile",
        path: "/profile",
        icon: "ion-ios-person",
        },
        {
        text: "Login",
        path: "/login",
        icon: "ion-ios-log-in",
        },
        {
        text: "Sign-In",
        path: "/signin",
        icon: "ion-ios-log-in",
        },
    ],
  }),
};
</script>