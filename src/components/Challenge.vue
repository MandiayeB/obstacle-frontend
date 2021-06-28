<template>
    <div
        v-for="difficulty in challenge"
        :key="difficulty.id"
        @click="click(difficulty)" 
        class="designButton"
        :style="clickId === difficulty.id ? clickStyle : { 'background-color': '' }"
    >
        <h1>{{ difficulty.title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Challenge',
    emits: ['display'],
    props: {
        challenge: { type: Object },
    },
    data() {
        return {
            clickId: Number,
            clickStyle: {
                'background-color': 'rgb(47, 71, 94)'
            }
        }
    },
    methods: {
        click(difficulty) {
            this.$emit('display', difficulty); 
            this.clickId = difficulty.id;
        }
    }
}
</script>