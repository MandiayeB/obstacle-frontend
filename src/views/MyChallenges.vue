<template>
    <div class="admin_container">
        <div class="add_challenge_header">
            <h1 id="add_challenge_title">Les challenges</h1>
        </div>
        <div class="separateur"></div>
        <div class="button_admin">
            <CoachChallenges v-if="challenges.length > 0" :challenges="challenges"/>
        </div>
        <div class="button_admin_add">
            <router-link :to="'/createchallenge'">
                <button class="designButton" type="submit">
                    Crée un challenge
                </button>
            </router-link>
        </div> 
    </div>
</template>

<script>
import axios from "axios";
import CoachChallenges from '../components/CoachChallenges';

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
            .get('http://localhost:3000/create',
                { withCredentials: true })
            .then(response => {
                for(let i=0; i<response.data.length; i++){
                    for(let u=0; u<response.data[i].activity[0].challenge.length; u++){
                        const acti = [response.data[i].activity[0].challenge[u].name];
                        this.challenges.push(acti);
                    }
                }
            })
    },
}

</script>