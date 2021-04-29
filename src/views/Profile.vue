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