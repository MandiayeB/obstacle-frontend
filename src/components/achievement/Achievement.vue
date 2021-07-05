<template>
    <div class="daily_content_center">
        <Sport 
            v-if="theme === 'Sport'" 
            :goal_id="goal_id" 
            :gdc_id="gdc_id"
        />
        <Cooking 
            v-else-if="theme === 'Cuisine'" 
            :goal_id="goal_id" 
            :gdc_id="gdc_id"
        />
        <Computing 
            v-else-if="theme === 'Informatique'" 
            :goal_id="goal_id" 
            :gdc_id="gdc_id"
        />
    </div>
</template>

<script>
import Sport from './achievements/Sport.vue';
import Cooking from './achievements/Cooking.vue';
import Computing from './achievements/Computing.vue';

export default {
    name: 'Achievement',
    components: { 
        Sport,
        Cooking,
        Computing,
    },
    props: {
        theme: String,
        goal_id: Number,
        gdc_id: Number
    },
}
</script>