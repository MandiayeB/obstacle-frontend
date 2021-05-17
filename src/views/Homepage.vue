<template>
    <div class="homepage">
        <h1 id="homepage_title">Bonjour {{ name }} !</h1>
        <h3 id="show_obj">Voici les objectifs que vous vous êtes fixés :</h3>
        <Goals :goals="goals"/>
    </div>
</template>

<script>
import Goals from '../components/UserGoals';

export default {
    name: 'Home',
    components: {
        Goals,
    },
    data() {
        return {
            goals: [],
        }
    },
    created() {
        this.goals = [
            {
                id: 1,
                text: "Courir 10km",
                img: "https://stadion-actu.fr/wp-content/uploads/2021/01/Tadesse-Abraham-On-Running-scaled.jpg"
            },
            {
                id: 2,
                text: "Apprendre le PHP",
                img: "https://miro.medium.com/max/12000/1*pUi3vkj06Vqp_sXeiI-UbQ.jpeg"
            },
            {
                id: 3,
                text: "Découvrir la cuisine française",
                img: "https://www.youschool.fr/wp-content/uploads/2019/08/comment-travaille-cuisinier-2.jpg"
            },
        ];
    },
    mounted() {
        this.$root.isAuthenticated();
    },
}
</script>