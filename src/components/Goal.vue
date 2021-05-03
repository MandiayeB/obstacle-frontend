<template>
    <div class="goal">
        <h4 id="goal_text">{{ goal.text }}</h4>
        <img id="goal_img" :src="goal.img" :alt="goal.text">
    </div>
</template>

<script>
export default {
    name: 'Goal',
    props: {
        goal: Object
    },
}
</script>