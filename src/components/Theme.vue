<template>
    <div class="themes">
        <div class="designButton">
            <h1><slot></slot></h1>
            <img 
                id="theme" 
                class="expand_icon" 
                src="../assets/images/expand_more_white_24dp.svg" 
                alt="expand"
            >
        </div>
        <div v-show="displayActivities">
            <Activity 
                v-for="(activity, index) in activities"
                :key="index"
                @toggle="() => { this.$emit('toggle', 'activity') }"
                @display="display"
                :challenges="activity.challenge"
                :displayActivities="displayActivities"
                :displayChallenges="displayChallenges"
            >
            {{ activity.name }}
            </Activity>
        </div>
    </div>
</template>

<script>
import Activity from './Activity.vue';

export default {
    name: 'Theme',
    emits: ['toggle','display'],
    components: { Activity },
    props: {
        activities: { type: Object },
        displayActivities: { type: Boolean },
        displayChallenges: { type: Boolean }
    },
    methods: {
        display(difficulty) {
            this.$emit('display', difficulty);
        }
    }
}
</script>