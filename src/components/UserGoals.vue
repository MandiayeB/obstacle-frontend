<template>
    <div class="user_goals">
        <div :key="goal.id" v-for="goal in goals">
            <UserGoal :goal="goal"/>
        </div>
    </div>
</template>

<script>
import UserGoal from './UserGoal'

export default {
    name: 'UserGoals',
    components: {
        UserGoal,
    },
    props: {
        goals: { type: Object }
    },
}
</script>