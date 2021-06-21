<template>
    <div class="page_container">
        <h1 class="title">Bienvenue sur votre tableau de bord !</h1>
        <div class="chart">
            <BarChart
                v-if="achievements.length > 0"
                :achievements="achievements" 
                :options="chartOptions"
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
            achievements: [],
            chartOptions: {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            padding: 10,
                            fontColor: "rgba(255,255,255,0.4)",
                            fontStyle: "bold",
                            callback: value => {
                                return  value + ' min';
                            }
                        },
                        gridLines: {
                            drawTicks: true,
                            drawBorder: false,
                            color: "rgba(255,255,255,0.1)",
                            zeroLineColor: "rgba(255,255,255,0.1)"
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero : true,
                            padding: 8,
                            fontColor: "rgba(255,255,255,0.4)",
                            fontStyle: "bold"
                        },
                        gridLines: {
                            color: "rgba(255,255,255,0.1)",
                            zeroLineColor: "rgba(255,255,255,0.1)"
                        }
                    }]
                },
                tooltips: {
                    backgroundColor: 'rgb(56, 68, 77)',
                    xPadding: 12,
                    yPadding: 10
                },
                legend: {
                    position: "right"
                },
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
                        const dateObj = new Date(acm.created_at);
                        const addZero = dateObj.getUTCMonth() < 9 ? '0' : '';
                        const date = dateObj.getUTCDate() + '/' + addZero + (dateObj.getUTCMonth() + 1);
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