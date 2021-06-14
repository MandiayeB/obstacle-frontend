<template>
    <div class="page_container">
        <h1 class="title">Bienvenue sur votre tableau de bord !</h1>
        <Chart />
    </div>
</template>

<script>
import Chart from '../components/Chart.vue';

export default {
    name: 'Dashboard',
    components: {
        Chart
    },
}
</script>