<template>
  <div id="container">
    <div v-if="isAuthenticated" id="app">
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
    <div class="achievments">
        
    </div>
  </div>

</template>

<script>
import axios from "axios";
import ResponsiveNavigation from "./components/ResponsiveNavigation.vue";

export default {
    components: {
        ResponsiveNavigation,
    },
    data() {
        return {
            navLinks: [
                {
                    text: "Activité",
                    path: "/",
                    icon: "ion-ios-home",
                },
                {
                    text: "Dashboard",
                    path: "/dashboard",
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
                },
                {
                    text: "Déconnexion",
                    path: "/login",
                    icon: "ion-ios-podium",
                }
            ],
            connected: false
        }
    },
    mounted() {
        window.addEventListener('isAuthenticated-sessionStorage-changed', (event) => {
            this.connected = event.detail.storage;
        });
    },
    computed: {
        isAuthenticated() {
            return this.connected;
        },
        location() {
            if (this.$route.name === 'Login' || this.$route.name === 'Signin') {
                console.log('Location : ' + this.$route.name);
                return true;
            }
            return false;
        }
    },
}
</script>