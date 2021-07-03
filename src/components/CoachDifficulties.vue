<template>
    <div :key="difficulty" v-for="difficulty in difficultys">
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
        difficultys: { type: Object }
    },
}

</script>
