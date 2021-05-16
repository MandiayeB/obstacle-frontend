<template>
    <div @click="() => { this.$emit('display'); }" class="designButton">
        <h1>{{ challenge.name }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Challenge',
    props: {
        challenge: { type: Object }
    },
}
</script>