<template>
    <div class="user_goals">
        <div :key="goal.id" v-for="goal in goals">
            <Goal :goal="goal"/>
        </div>
    </div>
</template>

<script>
import Goal from './UserGoal'

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