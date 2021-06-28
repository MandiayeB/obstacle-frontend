<template>
    <router-link :to="{ name: 'AdminDailyContent', params: { difficult_id: difficult } }">
        <button 
            class="designButton" 
            type="submit" 
            :key="difficult" 
            v-for="difficult in difficult" 
            :value="difficult"> 
            {{ difficult }}
        </button>
    </router-link>
</template>

<script>
export default {
    name: 'Difficult',
    props: {
        difficult: { type: Object }
    }

}
</script>