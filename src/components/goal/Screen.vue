<template>
    <div class="cadre">
        <div class="screen">
            <img 
                v-show="!displayScreen"
                src="https://media.giphy.com/media/kHsUiJD0pOLItuf0Cb/giphy.gif"
                alt="Screen" 
            />
            <ScreenDisplay 
                v-show="displayScreen" 
                :actualChallenge="this.actualChallenge"
            />
        </div>
        <div class="buttons">
            <div
                :style="
                    displayScreen ? ledStyle : { 'background-color' : '' }
                " 
                class="led"
            >
            </div>
            <div
                @click="() => { this.$emit('create') }" 
                v-show="displayScreen" 
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
        displayScreen: { type: Boolean }
    },
    data() {
        return {
            ledStyle: {
                'background-color': 'green',
                'filter': 'drop-shadow(0px 0px 10px rgb(99, 241, 63))'
            }
        }
    }
}
</script>