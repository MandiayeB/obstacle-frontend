<template>
    <div class="goal_container">
        <Theme 
            @click="toggle('theme')"
            @toggle="toggle"
            @display="display"
            :challenge="challenge"
            :displayActivities="displayActivities"
            :displayChallenges="displayChallenges"
        />
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
import Theme from '../components/Theme';
import ScreenDisplay from '../components/ScreenDisplay';

export default {
    name: 'Goal',
    components: {
        Theme,
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
                image: "https://media.giphy.com/media/xT1XGCwOkQ2Ua5Zv5C/giphy.gif",
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
                    if (!this.displayActivities) this.displayChallenges = false;
                    this.turnArrow(this.displayActivities, id);
                    this.turnArrow(this.displayChallenges, 'activity');
                    break;
                case 'activity':
                    this.displayActivities = this.displayActivities ? false : true;
                    this.displayChallenges = this.displayChallenges ? false : true;
                    this.turnArrow(this.displayChallenges, id);
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
        },
        turnArrow(bool, id) {
            if (bool) {
                document.getElementById(id).style.cssText = 'transform:initial;';
            } else {
                document.getElementById(id).style.cssText = 'transform: rotate(90deg);';
            }
        }
    }
}
</script>