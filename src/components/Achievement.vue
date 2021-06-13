<template>
    <div class="daily_content_center">
        <Sport v-if="theme === 'Sport'" :goal_id="goal_id"/>
    </div>
</template>

<script>
import Sport from './achievements/Sport.vue';

export default {
    name: 'Achievement',
    components: { Sport },
    props: {
        theme: String,
        goal_id: Number
    },
}
</script>