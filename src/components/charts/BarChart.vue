<script>
import moment from "moment";
import { Bar } from "vue3-chart-v2";

export default {
    name: 'BarChart',
    extends: Bar,
    data() {
        return {
            options: {
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
                    yPadding: 10,
                    callbacks: {
                        label: (tooltipItems) => {
                            return  " Durée du défi : " + tooltipItems.yLabel + " min";
                        }
                    }
                },
                legend: {
                    position: "right"
                },
            }
        }
    },
    props: {
        achievements: Array
    },
    mounted() {
        const datasets = [];
        const dates = [];
        const colors = [
            '#5F9EA0',
            '#8B008B',
            '#E9967A',
            '#008B8B',
            '#8FBC8F',
            '#483D8B',
            '#DAA520',
            '#F0FFFF',
            '#CD5C5C',
            '#ADD8E6'
        ]

        this.achievements.forEach((achievement, index) => {
            
            for (const acm of achievement) {
                const fmatDate = dates.map(d => d.getUTCDate() + d.getUTCMonth());
                if (!fmatDate.find(f => f === acm.date.getUTCDate() + acm.date.getUTCMonth())) {
                    dates.push(acm.date);
                }
            }
            
            const durations = achievement.map(a => (
                { x: moment(a.date, "YYYYMMDD").format("DD/MM"), y: a.duration }
            ));

            datasets.push({
                label: achievement[0].title,
                backgroundColor: colors[index],
                data: durations
            });
        });

        this.renderChart(
            {
                labels: dates.map(d => moment(d, "YYYYMMDD").format("DD/MM")).sort(),
                datasets: datasets
            },
            this.options
        );
    }
}
</script>