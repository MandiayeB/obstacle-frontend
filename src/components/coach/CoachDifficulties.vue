<template>
    <div :key="difficulty" v-for="difficulty in difficulties">
        <CoachDifficulty :difficulty="difficulty"/>
    </div>  
</template>

<script>
import CoachDifficulty from './CoachDifficulty';

export default {
    name: 'CoachDifficulties',
    components: {
        CoachDifficulty,
    },
    props: {
        difficulties: { type: Object }
    },
}

</script>
