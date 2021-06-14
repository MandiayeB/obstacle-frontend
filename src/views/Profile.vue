<template>
    <div class="container_profile">
        <div id="profile_header">
            <h1 id="profile_title">Profil</h1>
            <router-link id="profile_setting_wheel" :to="'/profile/edit'">
                <img id="profile_setting_wheel_img" src="../assets/images/settings.png" />
            </router-link>
        </div>
        <div class="separateur"></div>
            <div class="profile_picture">
                <img id="profile_picture" :src="user.image" :alt="user.firstname" />
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

export default {
    name: 'Profile',
    data() {
        return {
            user: Object
        }
    },
    beforeCreate() {
        if (!sessionStorage.getItem('isAuthenticated')) {
            this.$router.push("/login");
        }
    },
    created() {
        this.user = {
            id: 1,
            firstname: sessionStorage.getItem('firstname'),
            lastname: sessionStorage.getItem('lastname'),
            email: sessionStorage.getItem('email'),
            role: sessionStorage.getItem('role'),
            image: 'https://photos.lci.fr/images/613/344/kanyewest2020afp-5b6354-0@1x.jpeg'
        };
    },
}
</script>

