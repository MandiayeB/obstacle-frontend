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
    created() {
        this.user = {
            id: 1,
            firstname: 'Mandiaye',
            lastname: 'Badiane',
            email: 'mandiaye@gmail.com',
            role: 'Tryharder',
            image: 'https://photos.lci.fr/images/613/344/kanyewest2020afp-5b6354-0@1x.jpeg'
        };
    }
}
</script>

<style scoped>
.profile {
    display: table;
    max-width: 1200px;
    margin: 100px auto;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid rgb(56, 68, 77);
    background-color: rgb(25, 39, 52);
}
h2 {
    font-family: Segoe UI;
    text-align: center;
    font-weight: 400;
    line-height: 1.2;
    color: #B0C4DE;
}
</style>
