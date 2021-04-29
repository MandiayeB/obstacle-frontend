<template>
    <div class="goal">
        <h4>{{ goal.text }}</h4>
        <img :src="goal.img" :alt="goal.text">
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