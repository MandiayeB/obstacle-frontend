<template>
    <div class="goal_container">
        <div class="goal_buttons">
            <Theme
                v-for="(theme, index) in data"
                :key="index"
                @click="select(index)"
                @display="display"
                :selected="index === selectedBtn ? true : false"
                :activities="theme.activity"
                :styleObject="styleObject"
            >
            {{ theme.name }}
            </Theme>
        </div>
        <Screen
            @create="create"
            :actualChallenge="actualChallenge"
            :displayScreen="displayScreen"
        />
    </div>
</template>

<script>
import Theme from '../components/goal/Theme';
import Screen from '../components/goal/Screen.vue';
import axios from "axios";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
    name: 'Goal',
    components: {
        Theme,
        Screen,
    },
    data() {
        return {
            displayScreen: false,
            data: { type: Object },
            actualChallenge: { type: Object },
            styleObject: {
                transform: 'initial'
            },
            selectedBtn: Number
        }
    },
    mounted() {
        axios
            .get(
                (process.env.VUE_APP_URL || 'https://obstacle-backend.herokuapp.com') + '/goal', 
                { withCredentials: true }
            )
            .then(response => {this.data = response.data;})
            .catch((error) => {
                if (error.response.status === 307) {
                    this.$router.push("/login");
                } else {
                    console.log(error);
                }
            });
    },
    methods: {
        display(actualChallenge) {
            this.actualChallenge = actualChallenge;
            this.displayScreen = true;
        },
        select(id) {
            this.selectedBtn = id;
        },
        create() {
            axios
                .post(
                    (process.env.VUE_APP_URL || 'https://obstacle-backend.herokuapp.com') + '/goal',
                    {
                        creation_date: Date.now(),
                        supposed_end_date: Date.now() + this.actualChallenge.length * 24*60*60*1000,
                        difficulty_id: this.actualChallenge.id
                    }, 
                    { 
                        withCredentials: true 
                    }
                )
                .then(() => {
                    createToast(
                        { 
                            title: 'Objectif enregistré !', 
                            description: 'On te souhaite du courage 🔥'
                        },
                        {
                            timeout: 3000,
                            showIcon: true,
                            type: 'success',
                            position: 'bottom-right'
                        }
                    );
                })
                .catch((error) => {
                    createToast(
                        { 
                            title: 'Pas plus d\'un objectif par challenge.', 
                            description: 'Tout doux cowboy...'
                        },
                        {
                            timeout: 3000,
                            showIcon: true,
                            type: 'warning',
                            position: 'bottom-right'
                        }
                    );
                    console.log(error);
                });
        }
    }
}
</script>