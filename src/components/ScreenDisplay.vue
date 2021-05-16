<template>
    <div class="screen_display">
        <img :src="actualChallenge.image" alt="">
        <h2>{{ actualChallenge.title }}</h2>
        <div class="length">- Durée : {{ actualChallenge.length }} jours</div>
        <div class="difficulty">- Difficulté : <span :class="actualChallenge.level">{{ actualChallenge.level }}</span></div>
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