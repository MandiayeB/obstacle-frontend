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
import axios from "axios";

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
                },
            ],
            connected: sessionStorage.getItem('isAuthenticated'),
            isAdmin: Boolean
        }
    },
    mounted() {
        window.addEventListener('authentification-changed', (event) => {
            this.connected = event.detail.storage;
            this.isAdmin = event.detail.role;
            if (this.isAdmin) {
                if (this.navLinks.filter(nav => nav.text === "Publier du contenu").length < 1) {
                    this.navLinks.splice(3, 0, {
                        text: "Publier du contenu",
                        path: "/mychallenges",
                        icon: "ion-ios-lock",
                    });
                }
            }
        });
        axios
            .get(
                (process.env.VUE_APP_URL || 'https://obstacle-backend.herokuapp.com') + '/isAdmin',
                { withCredentials: true }
            )
            .then((response) => { 
                window.dispatchEvent(new CustomEvent('authentification-changed', {
                    detail: {
                        storage: sessionStorage.getItem('isAuthenticated'),
                        role: response.data ? true : false
                    }
                }));
            })
            .catch((error) => {
                console.log(error);
            });
    },
    computed: {
        isAuthenticated() {
            return this.connected;
        }
    }
}
</script>