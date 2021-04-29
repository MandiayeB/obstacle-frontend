<template>
    <div class="goals">
        <div :key="goal.id" v-for="goal in goals">
            <Goal :goal="goal"/>
        </div>
    </div>
</template>

<script>
import Goal from './Goal'

export default {
    name: 'Goals',
    props: {
        goals: Array
    },
    components: {
        Goal,
    },
}
</script>