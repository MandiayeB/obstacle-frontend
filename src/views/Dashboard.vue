<template>
    <div class="page_container">
        <h1 class="title">Bienvenue sur votre tableau de bord !</h1>
        <Chart 
            v-if="goals" 
            @mounted="setDataSets" 
            :goals="goals"
            :feeling="feeling"
            :duration="duration"
        />
    </div>
</template>

<script>
import axios from "axios";
import Chart from '../components/Chart.vue';

export default {
    name: 'Dashboard',
    components: {
        Chart
    },
    data() {
        return {
            goals: [],
            feeling: [],
            duration: []
        }
    },
    mounted() {
        axios
            .get('http://localhost:3000/dashboard',
                { withCredentials: true })
            .then(response => { this.goals = response.data; })
            .catch((error) => console.log(error));
    },
    methods: {
        setDataSets() {
            console.log(this.goals);
            console.log("test");
            this.goals.forEach(goal => {
                goal.forEach(acm => {
                    this.feeling.push(acm.theme.fields.feeling);
                    this.duration.push(acm.theme.fields.duration);
                });
            });
        }
    }
}
</script>