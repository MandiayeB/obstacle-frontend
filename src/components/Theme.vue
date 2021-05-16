<template>
    <div class="themes">
        <div class="designButton">
            <h1>Sport</h1>
            <img 
                id="theme" 
                class="expand_icon" 
                src="../assets/images/expand_more_white_24dp.svg" 
                alt="expand"
            >
        </div>
        <div v-show="displayActivities">
            <Activity 
                @toggle="() => { this.$emit('toggle', 'activity') }"
                @display="() => { this.$emit('display') }"
                :challenge="challenge"
                :displayActivities="displayActivities"
                :displayChallenges="displayChallenges"
            />
        </div>
    </div>
</template>

<script>
import Activity from './Activity.vue';

export default {
    name: 'Theme',
    components: { Activity },
    props: {
        challenge: { type: Object },
        displayActivities: { type: Boolean },
        displayChallenges: { type: Boolean }
    },
}
</script>