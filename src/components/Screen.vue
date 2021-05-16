<template>
    <div class="cadre">
        <div class="screen">
            <img 
                v-show="displayScreen && !content"
                src="https://media.giphy.com/media/kHsUiJD0pOLItuf0Cb/giphy.gif"
                alt="Screen" 
            />
            <ScreenDisplay v-show="displayScreen" :challenge="challenge"/>
        </div>
        <div class="buttons">
            <img 
                @click="() => { this.$emit('screen') }" 
                class="power" 
                src="../assets/images/power_settings_new_white_24dp.svg" 
                alt="power"
            >
            <div 
                v-show="displayScreen && content" 
                class="designButton">
                Démarrer
            </div>
        </div>
    </div>
</template>

<script>
import ScreenDisplay from '../components/ScreenDisplay';

export default {
    name: 'Screen',
    components: { ScreenDisplay },
    props: {
        challenge: { type: Object },
        displayScreen: { type: Boolean },
        content: { type: Boolean }
    },
}
</script>