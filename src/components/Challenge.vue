<template>
    <div
        v-for="(difficulty, index) in challenge"
        :key="index"
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