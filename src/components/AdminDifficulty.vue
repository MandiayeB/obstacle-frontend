<template>
    <router-link :to="{ name: 'AdminDailyContent', params: { difficulty_id: difficulty } }">
        <button 
            class="designButton" 
            type="submit" 
            :key="difficulty" 
            v-for="difficulty in difficulty" 
            :value="difficulty"> 
            {{ difficulty }}
        </button>
    </router-link>
</template>

<script>
export default {
    name: 'AdminDifficulty',
    props: {
        difficulty: { type: Object }
    }

}
</script>