<template>
    <router-link :to="{ name: 'MyDifficulties', params: { challenge_id: challenge } }">
        <button 
            class="designButton" 
            type="submit" 
            :key="challenge" 
            v-for="challenge in challenge" 
            :value="challenge"> 
            {{ challenge }}
        </button>
    </router-link>
</template>

<script>

export default {
    name: 'CoachChallenge',
    props: {
        challenge: { type: Object }
    }
}
</script>