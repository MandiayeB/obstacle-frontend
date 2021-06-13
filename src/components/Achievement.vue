<template>
    <div class="daily_content_center">
        <Sport 
            v-if="theme === 'Sport'" 
            :goal_id="goal_id" 
            :gdc_id="gdc_id"
        />
    </div>
</template>

<script>
import Sport from './achievements/Sport.vue';

export default {
    name: 'Achievement',
    components: { Sport },
    props: {
        theme: String,
        goal_id: Number,
        gdc_id: Number
    },
}
</script>