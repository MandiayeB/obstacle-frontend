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
    </div>
</template>

<script>
import "/public/style.scss";
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
                    icon: "ion-ios-stats",
                },
                {
                    text: "Objectifs",
                    path: "/goal",
                    icon: "ion-ios-basketball",
                },
                {
                    text: "Déconnexion",
                    path: "/login",
                    icon: "ion-ios-log-out",
                }
            ],
            connected: sessionStorage.getItem('isAuthenticated')
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
        }
    },
}
</script>