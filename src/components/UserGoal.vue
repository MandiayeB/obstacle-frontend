<template>
    <div class="user_goal">
        <h4 id="goal_text">{{ goal.title }}</h4>
        <img id="goal_img" :src="goal.image" :alt="goal.title">
    </div>
</template>

<script>
export default {
    name: 'Goal',
    props: {
        goal: { type: Object }
    },
}
</script>