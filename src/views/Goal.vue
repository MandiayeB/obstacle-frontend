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
        <Screen 
            @screen="screen"
            :challenge="challenge"
            :displayScreen="displayScreen"
            :content="content"
        />
    </div>
</template>

<script>
import Theme from '../components/Theme';
import Screen from '../components/Screen.vue';

export default {
    name: 'Goal',
    components: {
        Theme,
        Screen,
    },
    data() {
        return {
            displayActivities: false,
            displayChallenges: false,
            displayScreen: false,
            content: false,
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
            if (!this.displayScreen) this.content = false;
        },
        display() {
            this.displayActivities = this.displayActivities ? true : false;
            this.displayChallenges = this.displayChallenges ? false : true;
            this.content = true;
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