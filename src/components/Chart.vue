<template>
    <!-- <div :key="i" v-for="(goal, i) in goals">
        <div :key="y" v-for="(acm, y) in goal">{{ acm.id }}</div>
    </div> -->
    lol
</template>

<script>

export default {
    name: 'Chart',
    props: {
        goals: Array
    },
    data() {
        return {
            feeling: [],
            duration: Number
        }
    },
    created() {
        console.log(this.goals);
        this.goals.forEach(goal => {
            goal.forEach(acm => {
                this.feeling.push(acm.theme.fields.feeling);
                this.duration.push(acm.theme.fields.duration);
                console.log(acm);
            });
        });
    }
}
</script>