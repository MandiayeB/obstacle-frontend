<template>
    <router-link :to="{ name: 'MyDailyContents', params: { difficulty_id: difficulty[0].id } }">
        <button 
            class="designButton" 
            type="submit" 
            :key="difficultyid" 
            v-for="difficultyid in difficulty" 
            :value="difficultyid"> 
            {{ difficulty[0].title }}
        </button>
    </router-link>
</template>

<script>
export default {
    name: 'CoachDifficulty',
    props: {
        difficulty: { type: Object }
    },

}
</script>