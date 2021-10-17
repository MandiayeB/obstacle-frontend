<template>
    <div class="user_goals">
        <div :key="goal.id" v-for="goal in goals">
            <UserGoal 
                @deleteGoalEvent="deleteGoal"
                :goal="goal"
            />
        </div>
    </div>
</template>

<script>
import UserGoal from './UserGoal'

export default {
    name: 'UserGoals',
    emits: ['deleteGoalEvent'],
    components: {
        UserGoal,
    },
    props: {
        goals: { type: Array }
    },
    methods: {
        deleteGoal(goal_id) {
            this.$emit('deleteGoalEvent', goal_id);
        }
    }
}
</script>