<template>
    <div class="admin_container">
        <div class="add_challenge_header">
            <h1 id="add_challenge_title">Vos difficultés</h1>
        </div>
        <div class ="separateur"></div>
        <div class="button_admin">
            <CoachDifficulties v-if="difficultys.length > 0" :difficultys="difficultys"/>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import CoachDifficulties from '../components/CoachDifficulties.vue';

export default {
    name: 'MyDifficulties',
    components: {
        CoachDifficulties,
    },
    data () {
        return {
            challenge_id: Number,
            difficultys : [],
        }

    },
    mounted() {
        if(this.$route.params.challenge_id){
            this.challenge_id = this.$route.params.challenge_id;
            axios
                .post('http://localhost:3000/create/difficulty', {
                        challenge: this.challenge_id,
                    },
                    { withCredentials: true })
                .then(response => { 
                    for(let i=0; i<response.data.length; i++){
                        const title = [response.data[i]];
                        this.difficultys.push(title);   
                    }
                })
                .catch(error => {
                console.log(error);      
                });
        } else {
            this.$router.push('mychallenges');
        }

    }
}
</script>
