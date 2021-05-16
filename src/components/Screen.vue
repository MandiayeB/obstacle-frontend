<template>
    <div class="cadre">
        <div class="screen">
            <img 
                v-show="displayScreen && !smthDisplayed"
                src="https://media.giphy.com/media/kHsUiJD0pOLItuf0Cb/giphy.gif"
                alt="Screen" 
            />
            <ScreenDisplay v-show="displayScreen" :actualChallenge="actualChallenge"/>
        </div>
        <div class="buttons">
            <img 
                @click="() => { this.$emit('screen') }" 
                class="power" 
                src="../assets/images/power_settings_new_white_24dp.svg" 
                alt="power"
            >
            <div 
                v-show="displayScreen && smthDisplayed" 
                class="designButton">
                Démarrer
            </div>
        </div>
    </div>
</template>

<script>
import ScreenDisplay from './ScreenDisplay.vue';

export default {
    name: 'Screen',
    components: { ScreenDisplay },
    props: {
        actualChallenge: { type: Object },
        displayScreen: { type: Boolean },
        smthDisplayed: { type: Boolean }
    },
}
</script>