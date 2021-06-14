<template>
    <div class="page_container">
        <h1 class="title">Bienvenue sur votre tableau de bord !</h1>
        <Chart :goals="goals"/>
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
            goals: []
        }
    },
    mounted() {
        axios
            .get('http://localhost:3000/dashboard',
                { withCredentials: true })
            .then((response) => { this.goals = response.data; console.log(response.data); })
            .catch((error) => console.log(error));
    }
}
</script>