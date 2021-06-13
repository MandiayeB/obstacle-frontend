<template>
    <router-link class="router_link_no_underline" :to="{ name: 'DailyContent', params: { goal_id: goal.id } }">
        <div class="user_goal">
            <h4 id="goal_text">{{ goal.title }}</h4>
            <img id="goal_img" :src="goal.image" :alt="goal.title">
        </div>
    </router-link>
</template>

<script>

export default {
    name: 'Goal',
    props: {
        goal: { type: Object }
    }
}
</script>