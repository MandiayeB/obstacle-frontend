<template>
    <div class="screen_display">
        <img :src="actualChallenge.image" alt="">
        <div class="challenge-infos">
            <h2>{{ actualChallenge.title }}</h2>
            <div class="length">- Durée : {{ actualChallenge.length }} jours</div>
            <div class="difficulty">- Difficulté : <span :class="actualChallenge.difficulty">{{ actualChallenge.difficulty }}</span></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScreenDisplay',
    props: {
        actualChallenge: { type: Object }
    }
}
</script>