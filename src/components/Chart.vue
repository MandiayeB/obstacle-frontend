<template>
    <div :key="i" v-for="(goal, i) in goals">
        <div :key="y" v-for="(acm, y) in goal">{{ acm.id }}</div>
    </div>
    {{ feeling[0] }}
</template>

<script>

export default {
    name: 'Chart',
    props: {
        goals: Array,
        feeling: Array,
        duration: Array
    },
    mounted() {
        this.$emit('mounted');
    }
}
</script>