<template>
    <div class="add_challenge_container">
        <div class="add_challenge_header">
            <h1 id="add_challenge_title">Les challenges</h1>
        </div>
        <div class="separateur"></div>
        <div class="button_admin">
            <Challenge v-if="challenges.length > 0" :challenges="challenges"/>
        </div>
        <div class="button_admin">
            <router-link :to="'/addChallenge'">
                <button class="designButton" type="submit">
                    Crée un challenge
                </button>
            </router-link>
        </div> 
    </div>
</template>

<script>
import axios from "axios";
import Challenge from '../components/Admins';

export default {
    name: 'Challenges',
        components: {
        Challenge,
    },
    data () {
        return {
            challenges : [],
        }
    },
    mounted() {
        axios.get('http://localhost:3000/addChallenge')
            .then(response => {
                for(let i=0; i<response.data.length; i++){
                    const acti = [response.data[i].activity[0].challenge[0].name];
                    this.challenges.push(acti);
                }
            })
    },
}

</script>