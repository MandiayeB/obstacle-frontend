<template>
    <div class="goal_container">
        <div>
            <Theme
                v-for="(theme, index) in data"
                :key="index"
                @display="display"
                :activities="theme.activity"
                :styleObject="styleObject"
            >
            {{ theme.name }}
            </Theme>
        </div>
        <Screen
            @screen="screen"
            @create="create"
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
            displayScreen: false,
            smthDisplayed: false,
            data: { type: Object },
            actualChallenge: { type: Object },
            styleObject: {
                transform: 'initial'
            }
        }
    },
    mounted() {
        this.$root.isAuthenticated();
        axios
            .get('http://localhost:3000/goal')
            .then(response => {this.data = response.data; console.log(this.data);})
            .catch((error) => {
                if (error.response.status === 307) {
                    this.$router.push("/login");
                } else {
                    console.log(error);
                }
            });
    },
    methods: {
        screen() {
            this.displayScreen = this.displayScreen ? false : true;
            if (!this.displayScreen) this.smthDisplayed = false;
        },
        display(actualChallenge) {
            this.smthDisplayed = true;
            this.actualChallenge = actualChallenge;
        },
        create() {
            axios
                .post(
                    'http://localhost:3000/goal',
                    {
                        creation_date: Date.now(), 
                        supposed_end_date: Date.now() + this.actualChallenge.length * 24*60*60*1000,
                        user_id: 1,
                        difficulty_id: this.actualChallenge.id
                    }
                )
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
</script>