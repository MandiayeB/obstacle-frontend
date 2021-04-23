<template>
    <div class="homepage">
        <h1>Bonjour {{ name }} !</h1>
        <h3>Voici les objectifs que vous vous êtes fixés :</h3>
        <Goals :goals="goals"/>
    </div>
</template>

<script>
import Goals from '../components/Goals';

export default {
    name: 'Home',
    props: {
        name: String,
    },
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
    }
}
</script>

<style scoped>
.homepage {
    display: block;
    max-width: 900px;
    margin: 100px auto;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid rgb(56, 68, 77);
    background-color: rgb(25, 39, 52);
}
h1 {
    font-family: Segoe UI;
    text-align: center;
    font-weight: 400;
    line-height: 1.2;
    color: #B0C4DE;
}
h3 {
    font-family: Segoe UI;
    font-weight: 400;
    line-height: 1.2;
    color: #B0C4DE;
    padding-left: 30px;
    padding-top: 40px;
    padding-bottom: 30px;
}
</style>