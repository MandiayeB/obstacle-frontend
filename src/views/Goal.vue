<template>
    <div class="goal_container">
        <div>
            <Theme
                v-for="(theme, index) in data"
                :key="index"
                @click="toggle('theme')"
                @toggle="toggle"
                @display="display"
                :activities="theme.activity"
                :displayActivities="displayActivities"
                :displayChallenges="displayChallenges"
            >
            {{ theme.name }}
            </Theme>
        </div>
        <Screen 
            @screen="screen"
            :actualChallenge="actualChallenge"
            :displayScreen="displayScreen"
            :smthDisplayed="smthDisplayed"
        />
    </div>
</template>

<script>
import Theme from '../components/Theme';
import Screen from '../components/Screen.vue';
import axios from "axios";

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
            smthDisplayed: false,
            data: Object,
            actualChallenge: Object
        }
    },
    mounted() {
        axios
            .get('http://localhost:3000/goal')
            .then(response => {this.data = response.data; console.log(this.data);})
            .catch((error) => {
                if (error.response.status === 307) {
                    this.$router.push("/");
                } else {
                    console.log(error);
                }
            });
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
            if (!this.displayScreen) this.smthDisplayed = false;
        },
        display(actualChallenge) {
            this.displayActivities = this.displayActivities ? true : false;
            this.displayChallenges = this.displayChallenges ? false : true;
            this.smthDisplayed = true;
            this.actualChallenge = actualChallenge;
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