<template>
    <div class="button_admin">
        <div :key="challenge" v-for="challenge in challenges">
            <CoachChallenge :challenge="challenge"/>
        </div>
    </div>
</template>

<script>
import CoachChallenge from './CoachChallenge';

export default {

    name: 'CoachChallenges',
    components: {
        CoachChallenge,
    },
    props: {
        challenges: { type: Object }
    },
}
</script>