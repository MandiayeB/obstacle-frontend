<template>
    <div @click="() => { this.$emit('toggle'); }" class="activities">
        <div class="designButton">
            <h1><slot></slot></h1>
            <img 
                class="expand_icon"
                :style="[displayChallenges ? this.styleObject : '']" 
                src="../assets/images/expand_more_white_24dp.svg" 
                alt="expand"
            >
        </div>
        <div 
            v-if="displayChallenges && Object.entries(challenges).length !== 0" 
            class="challenges">
            <Challenge
                v-for="(challenge, index) in challenges"
                :key="index"
                :challenge="challenge.difficulty"
                @display="display"
            />
        </div>
    </div>
</template>

<script>
import Challenge from './Challenge.vue'

export default {
    name: 'Activity',
    emits: ['toggle','display'],
    components: { Challenge },
    props: {
        challenges: { type: Object },
        displayChallenges : { type: Boolean },
        styleObject: { type: Object }
    },
    methods: {
        display(difficulty) {
            this.$emit('display', difficulty);
        }
    }
}
</script>