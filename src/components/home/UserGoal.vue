<template>
    <div class="user_goal">
        <ModalDeleteConfirmation 
            @deleteGoalEvent="deleteGoal"
            :goal_id="goal.id"
        />
        <router-link class="router_link_no_underline" :to="{ name: 'DailyContent', params: { goal_id: goal.id } }">
            <h4 id="goal_text">{{ goal.title }}</h4>
            <img id="goal_img" :src="goal.image" :alt="goal.title">
        </router-link>
    </div>
</template>

<script>
import ModalDeleteConfirmation from './ModalDeleteConfirmation.vue';
export default {
    name: 'UserGoal',
    emits: ['deleteGoalEvent'],
    components: { ModalDeleteConfirmation },
    props: {
        goal: { type: Object }
    },
    methods: {
        deleteGoal(goal_id) {
            this.$emit('deleteGoalEvent', goal_id);
        }
    }
}
</script>