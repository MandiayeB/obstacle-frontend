<script>
import { Bar } from "vue3-chart-v2";

export default {
    name: 'BarChart',
    extends: Bar,
    props: {
        achievements: Array,
        options: Object
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
                if (!dates.includes(acm.date)) {
                    dates.push(acm.date);
                }
            }
            
            const durations = achievement.map(d => d.duration);

            datasets.push({
                label: achievement[0].title,
                backgroundColor: colors[index],
                data: durations,
            });
        });

        console.log(datasets);
        this.renderChart(
            {
                labels: dates,
                datasets: datasets
            },
            this.options
        );
    }
}
</script>