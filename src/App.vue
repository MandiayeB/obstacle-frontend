<template>
  <div id="container">
    <div id="app">
      <ResponsiveNavigation
        :nav-links="navLinks"
        :image-path="require('./assets/images/menuLogo.png')"
        :image-profile="require('./assets/images/exempleProfil.jpg')"
        :isAuthenticated="isAuthenticated"
        background="rgb(25, 39, 52)"
        link-color="#fff"
        hoverBackground="rgb(35, 66, 95)"
      />
    </div>

    <router-view v-slot="slot">
      <transition v-if="this.isConnected || this.getPath" name="router-anim" mode="out-in">
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
        isConnected: false,
        navLinks: [
            {
                text: "Activité",
                path: "/",
                icon: "ion-ios-home",
            },
            {
                text: "Profil",
                path: "/profile",
                icon: "ion-ios-person",
            },
            {
                text: "Objectifs",
                path: "/goal",
                icon: "ion-ios-podium",
            }
        ],
    }),
    methods: {
        connect() {
            this.isConnected = true;
        },
        isAuthenticated() {
            if (!this.isConnected) {
                this.$router.push("/login");
            }
        },
        getPath() {
            if (window.location.href.includes('login') || window.location.href.includes('signin')) {
                return true;
            } else {
                return false;
            }
        }
    }
};
</script>