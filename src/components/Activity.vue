<template>
    <div @click="() => { this.$emit('toggle'); }" class="activities">
        <div class="designButton">
            <h1>Basketball</h1>
            <img 
                id="activity"
                class="expand_icon" 
                src="../assets/images/expand_more_white_24dp.svg" 
                alt="expand"
            >
        </div>
        <div v-show="displayChallenges" class="challenges">
            <Challenge
                :challenge="challenge"
                @display="() => { this.$emit('display'); }"
            />
        </div>
    </div>
</template>

<script>
import Challenge from './Challenge.vue'

export default {
    name: 'Activity',
    components: { Challenge },
    props: {
        challenge: { type: Object },
        displayChallenges : { type: Boolean }
    },
}
</script>