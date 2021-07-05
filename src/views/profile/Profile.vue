<template>
    <div class="container_profile">
        <div class="profile_header">
            <h1 id="profile_title">Profil</h1>
            <router-link id="profile_setting_wheel" :to="'/profilediting'">
                <img id="profile_setting_wheel_img" src="../../assets/images/settings.png" />
            </router-link>
        </div>
        <div class="separateur"></div>
        <div class="profile_picture">
            <ProfilePicture
                v-if="user.firstname"
                :profilePicture="remoteUrl"
                :firstname="user.firstname"
            />
        </div>
        <div class ="profile_frame">
            <div class="profile_credential_frame">
                <h3 class ="profile_page_h3">Prénom :</h3>
                <h3 class="profile_page_h3">Nom :</h3>
                <h3 class="profile_page_h3">Email :</h3>
            </div>
            <div class="profile_credential_frame">
                <p class="profile_page_p">{{ user.firstname }}</p>
                <p class="profile_page_p">{{ user.lastname }}</p>
                <p class="profile_page_p">{{ user.email }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import ProfilePicture from '../../components/profile/ProfilePicture.vue';

export default {
    name: 'Profile',
    components: { ProfilePicture },
    data() {
        return {
            user: Object,
            remoteUrl: sessionStorage.getItem('picture'),
        }
    },
    created() {
        this.user = {
            id: 1,
            firstname: sessionStorage.getItem('firstname'),
            lastname: sessionStorage.getItem('lastname'),
            email: sessionStorage.getItem('email'),
            role: sessionStorage.getItem('role'),
        };
    },
    mounted(){
        window.addEventListener('profilePicture-changed', (event) => {
            if (event.detail.profilePictureChanged){
                this.remoteUrl = sessionStorage.getItem('picture');
            }
        });
    },
}
</script>

