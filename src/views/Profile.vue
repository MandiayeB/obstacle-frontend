<template>
    <div class="profile">
        <ProfileHeader :user="user"/>
        <ProfileBody :user="user" />
    </div>
</template>

<script>
import ProfileHeader from '../components/ProfileHeader';
import ProfileBody from '../components/ProfileBody';

export default {
    name: 'Profile',
    components: {
        ProfileHeader,
        ProfileBody
    },
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