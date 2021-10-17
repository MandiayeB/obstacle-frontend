<template>
    <div @click="toggle('theme')" class="themes">
        <div class="designButton">
            <h1><slot></slot></h1>
            <img
                class="expand_icon"
                :style="[displayActivities ? this.styleObject : '']" 
                src="../../assets/images/expand_more_white_24dp.svg" 
                alt="expand"
            >
        </div>
        <div v-if="watch">
            <Activity 
                v-for="(activity, index) in activities"
                :key="index"
                @toggle="toggle('activity')"
                @display="display"
                :challenges="activity.challenge"
                :displayChallenges="displayChallenges"
                :styleObject="styleObject"
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
    emits: ['display'],
    components: { Activity },
    data() {
        return {
            displayActivities: false,
            displayChallenges: false,
        }
    },
    props: {
        activities: { type: Object },
        styleObject: { type: Object },
        selected: Boolean
    },
    computed: {
        watch() {
            if (!this.selected && this.displayActivities) {
                this.displayActivities = false;
                this.displayChallenges = false;
                return false;
            } 
            return (this.selected && this.displayActivities);
        }
    },
    methods: {
        toggle(category) {
            switch (category) {
                case 'theme':
                    this.displayActivities = this.displayActivities ? false : true;
                    if (!this.displayActivities) this.displayChallenges = false;
                    break;
                case 'activity':
                    this.displayActivities = this.displayActivities ? false : true;
                    this.displayChallenges = this.displayChallenges ? false : true;
                    break;
            }
        },
        display(difficulty) {
            this.displayActivities = this.displayActivities ? true : false;
            this.displayChallenges = this.displayChallenges ? false : true;
            this.$emit('display', difficulty);
        }
    }
}
</script>