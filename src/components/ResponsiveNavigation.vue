<template>
  <nav :style="{ background: background || '#333' }">
    <div class="header">
        <ul :style="{ background: background || '#333' }" ref="nav">
            <figure class="image-logo" @click="toggleNav">
                <img :src="imagePath" />
            </figure>
            <li
                v-for="(link, index) in navLinks"
                :key="index"
                @mouseenter="
                    $event.currentTarget.style.background = hoverBackground || '#fff'
                "
                @mouseleave="
                    $event.currentTarget.style.background = background || '#fff'
                "
            >
                <div @click="interact(link.text)">
                    <router-link :to="link.path" :style="{ color: linkColor || '#DDD' }">
                        {{ link.text }}
                        <i :class="link.icon" />
                    </router-link>
                </div>
            </li>
        </ul>
        <div class="image-obstacle">
            <figure class="image-obstacle">
                <router-link :to="'/'" >
                    <img src="../assets/images/logoObstacle.png" />
                </router-link>
            </figure>
        </div>
        <div class="profile_header_icon">
            <router-link :to="'/profile'" >
                <ProfilePicture
                    v-if="firstname"
                    :profilePicture="remoteUrl"
                    :firstname="firstname"
                />
            </router-link>
        </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import ProfilePicture from './profile/ProfilePicture.vue';

export default {
    name: 'ResponsiveNavigation',
    components: { ProfilePicture },
    data(){
        return{
            remoteUrl: sessionStorage.getItem('picture'),
            firstname: sessionStorage.getItem('firstname'),
        }
    },
    props: [
        "navLinks",
        "background",
        "linkColor",
        "hoverBackground",
        "imagePath",
        "imageProfile",
        "home",
    ],
    mounted(){
        window.addEventListener('profilePicture-changed', (event) => {
            if (event.detail.profilePictureChanged){
                this.remoteUrl = sessionStorage.getItem('picture');
            }
        });
    },
    methods: {
        toggleNav() {
            const nav = this.$refs.nav.classList;
            nav.contains("active") ? nav.remove("active") : nav.add("active");
        },
        interact(text) {
            if (text === "Déconnexion") {
                axios
                    .delete(
                        (process.env.VUE_APP_URL || 'https://obstacle-backend.herokuapp.com') + '/disconnection', 
                        { withCredentials: true }
                    )
                    .catch((error) => console.log(error));
                    
                    sessionStorage.removeItem('isAuthenticated');
                    window.dispatchEvent(new CustomEvent('authentification-changed', {
                        detail: {
                            storage: sessionStorage.getItem('isAuthenticated')
                        }
                    }));
            } else if (text === "Dashboard") {
                createToast(
                    { 
                        title: 'Constate ton avancement 🏅',
                        description: 'Bah dis-donc, t\'es fortiche toi !'
                    },
                    {
                        timeout: 3000,
                        type: 'info',
                        position: 'bottom-right'
                    }
                );
            } else if (text === "Objectifs") {
                createToast(
                    { 
                        title: 'Choisis un défi et donne toi à fond ! 🔥', 
                        description: 'C\'est la première étape pour atteindre ton objectif.'
                    },
                    {
                        timeout: 3000,
                        type: 'info',
                        position: 'bottom-right'
                    }
                );
            }
        },
    },
};
</script>