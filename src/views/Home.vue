<template>
    <div class="page_container">
        <h1 class="title">Salut <span>{{ firstname }}</span> !</h1>
        <div class="homepage_content">
            <h3 v-if="goals.length > 0" class="homepage_text">Voici les objectifs que tu t'es fixés :</h3>
            <h3 v-else class="homepage_text">La première étape pour atteindre un objectif c'est de s'en fixer un</h3>
            <UserGoals v-if="goals.length > 0" :goals="goals" @deleteGoalEvent="deleteGoal"/>
            <button v-else @click="goToGoals" class="designButton">Voir les challenges disponibles</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import UserGoals from '../components/home/UserGoals';

export default {
    name: 'Home',
    components: {
        UserGoals,
    },
    data() {
        return {
            goals: { type: Array },
            firstname: sessionStorage.getItem('firstname')
        }
    },
    mounted() {
        axios
            .get(
                (process.env.VUE_APP_URL || 'https://obstacle-backend.herokuapp.com'), 
                { withCredentials: true }
            )
            .then(response => { this.goals = response.data; })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        deleteGoal(goal_id){
            this.goals = this.goals.filter(goal => goal.id !== goal_id);
        },
        goToGoals() {
            this.$router.push('/goal');
        }
    }
}
</script>