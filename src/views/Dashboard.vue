<template>
    <div class="page_container">
        <h1 class="title">Bienvenue sur votre tableau de bord !</h1>
        <div class="chart">
            <BarChart
                v-if="achievements.length > 0"
                :achievements="achievements"
            >
            </BarChart>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import BarChart from '../components/BarChart.vue';

export default {
    name: 'Dashboard',
    components: {
        BarChart
    },
    data() {
        return {
            achievements: []
        }
    },
    mounted() {
        axios
            .get(
                (process.env.VUE_APP_URL || 'https://obstacle-backend.herokuapp.com') + '/dashboard',
                { withCredentials: true })
            .then(response => {
                response.data.forEach(goal => {
                    let challenge = [];
                    goal.forEach(acm => {
                        const date = new Date(acm.created_at);
                        challenge.push({
                            title: acm.title,
                            date, 
                            feeling: acm.achievement.theme.fields.feeling, 
                            duration: acm.achievement.theme.fields.duration 
                        });
                    });
                    this.achievements.push(challenge);
                });
            })
            .catch((error) => console.log(error));
    }
}
</script>