<template>
    <div class="page_container">
        <h1 class="title">Bienvenue sur votre tableau de bord !</h1>
        <BarChart
            v-if="achievements.length > 0"
            :achievements="achievements" 
            :options="chartOptions"
            id="barchart"
        >
        </BarChart>
    </div>
</template>

<script>
import axios from "axios";
import BarChart from '../components/BarChart.vue';
import moment from 'moment';

export default {
    name: 'Dashboard',
    components: {
        BarChart
    },
    data() {
        return {
            achievements: [],
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    },
    mounted() {
        axios
            .get('http://localhost:3000/dashboard',
                { withCredentials: true })
            .then(response => { 
                response.data.forEach(goal => {
                    let challenge = [];
                    goal.forEach(acm => {
                        const date = moment(acm.created_at, "YYYYMMDD").format("DD/MM");
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