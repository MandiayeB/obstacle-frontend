<template>
    <div class="goal_container">
        <div @click="toggle('theme')" class="themes">
            <div class="designButton">
                <h1>Sport</h1>
                <img 
                    id="theme" 
                    class="expand_icon" 
                    src="../assets/images/expand_more_white_24dp.svg" 
                    alt="expand"
                >
            </div>
            <div v-show="displayActivities">
                <div @click="toggle('activity')" class="activities">
                    <div class="designButton">
                        <h1>Basketball</h1>
                        <img 
                            id="activity"
                            class="expand_icon" 
                            src="../assets/images/expand_more_white_24dp.svg" 
                            alt="expand"
                        >
                    </div>
                    <div v-show="displayChallenges" class="challenges">
                        <div @click="display" class="designButton">
                            <h1>Shooter à 3 points</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cadre">
            <div class="screen">
                <img 
                    v-show="displayScreen && content == null"
                    src="https://media.giphy.com/media/kHsUiJD0pOLItuf0Cb/giphy.gif" 
                    alt="Screen" 
                />
                <ScreenDisplay v-show="displayScreen" :challenge="challenge"/>
            </div>
            <div class="buttons">
                <img 
                    @click="screen" 
                    class="power" 
                    src="../assets/images/power_settings_new_white_24dp.svg" 
                    alt="power"
                >
                <div 
                    v-show="displayScreen && content != null" 
                    class="designButton">
                    Démarrer
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ScreenDisplay from '../components/ScreenDisplay';

export default {
    name: 'Goal',
    components: {
        ScreenDisplay,
    },
    data() {
        return {
            displayActivities: false,
            displayChallenges: false,
            displayScreen: false,
            content: null,
            challenge: {
                name: 'Shooter à 3 points',
                length: 30,
                difficulty: 'difficile'
            }
        }
    },
    methods: {
        toggle(id) {
            switch (id) {
                case 'theme':
                    this.displayActivities = this.displayActivities ? false : true;
                    if (this.displayActivities) {
                        document.getElementById(id).style.cssText = 'transform:initial;';
                    } else {
                        document.getElementById(id).style.cssText = 'transform: rotate(90deg);';
                    }
                    break;
                case 'activity':
                    this.displayActivities = this.displayActivities ? false : true;
                    this.displayChallenges = this.displayChallenges ? false : true;
                    if (this.displayChallenges) {
                        document.getElementById(id).style.cssText = 'transform:initial;';
                    } else {
                        document.getElementById(id).style.cssText = 'transform: rotate(90deg);';
                    }
                    break;
            }
        },
        screen() {
            this.displayScreen = this.displayScreen ? false : true;
            if (!this.displayScreen) this.content = null;
        },
        display() {
            this.displayActivities = this.displayActivities ? true : false;
            this.displayChallenges = this.displayChallenges ? false : true;
            this.content = this.challenge.name;
        }
    }
}
</script>