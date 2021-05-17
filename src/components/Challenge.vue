<template>
    <div
        v-for="difficulty in challenge"
        :key="difficulty.id"
        @click="() => { this.$emit('display', difficulty); }" 
        class="designButton">
            <h1>{{ difficulty.title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Challenge',
    emits: ['display'],
    props: {
        challenge: { type: Object }
    },
}
</script>