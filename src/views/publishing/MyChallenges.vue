<template>
    <div class="admin_container">
        <div class="add_challenge_header">
            <h1 id="add_challenge_title">Vos challenges</h1>
        </div>
        <div class="separateur"></div>
        <div class="button_admin">
            <CoachChallenges v-if="challenges.length > 0" :challenges="challenges"/>
        </div>
        <div class="button_admin_add">
            <router-link :to="'/createchallenge'">
                <button class="designButton" type="submit">
                    Créer un challenge
                </button>
            </router-link>
        </div> 
    </div>
</template>

<script>
import axios from "axios";
import CoachChallenges from '../../components/coach/CoachChallenges.vue';

export default {
    
    name: 'MyChallenges',
        components: {
        CoachChallenges,
    },
    data () {
        return {
            challenges : [],
        }
    },
    mounted() {
        axios
            .post('http://localhost:3000/create/mychallenge',
                { author: sessionStorage.getItem("id")},
                { withCredentials: true })
            .then(response => {
                for(let i=0; i<response.data.length; i++){
                    const acti = [response.data[i].name];
                    this.challenges.push(acti);
                }
            })
    },
}

</script>