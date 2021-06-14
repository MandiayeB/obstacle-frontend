<template>
    <div class="page_container">
        <h1 class="title">Salut <span>{{ firstname }}</span> !</h1>
        <div class="homepage_content">
            <h3 v-if="goals.length > 0" class="homepage_text">Voici les objectifs que tu t'es fixés :</h3>
            <h3 v-else class="homepage_text">La première étape pour atteindre un objectif c'est de s'en fixer un</h3>
            <Goals v-if="goals.length > 0" :goals="goals"/>
            <button v-else @click="goToGoals" class="designButton">Voir les challenges disponibles</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Goals from '../components/UserGoals';

export default {
    name: 'Home',
    components: {
        Goals,
    },
    data() {
        return {
            goals: { type: Array },
            firstname: sessionStorage.getItem('firstname')
        }
    },
    mounted() {
        axios
            .get('http://localhost:3000/', { withCredentials: true })
            .then(response => {this.goals = response.data;})
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        goToGoals() {
            this.$router.push('/goal');
        }
    }
}
</script>