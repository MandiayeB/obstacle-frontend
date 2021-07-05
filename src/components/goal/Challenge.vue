<template>
    <div
        v-for="difficulty in difficulties"
        :key="difficulty.id"
        @click="click(difficulty)" 
        class="designButton"
        :style="difficulty.selected ? clickStyle : { 'background-color': '' }"
    >
        <h1>{{ difficulty.title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Challenge',
    emits: ['display'],
    props: {
        difficulties: { type: Object },
    },
    data() {
        return {
            clickStyle: {
                'background-color': 'rgb(51, 100, 92)'
            }
        }
    },
    methods: {
        click(difficulty) {
            this.$emit('display', difficulty);
            for (const diff in this.difficulties) {
                if (this.difficulties[diff].id === difficulty.id)
                    this.difficulties[diff].selected = true;
                else
                    this.difficulties[diff].selected = false;
            }
        }
    }
}
</script>