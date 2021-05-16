<template>
    <div class="screen_display">
        <img :src="challenge.image" alt="">
        <h2>{{ challenge.name }}</h2>
        <div class="length">- Durée : {{ challenge.length }} jours</div>
        <div class="difficulty">- Difficulté : <span :class="challenge.difficulty">{{ challenge.difficulty }}</span></div>
    </div>
</template>

<script>
export default {
    name: 'ScreenDisplay',
    props: {
        challenge: Object
    }
}
</script>