<template>
    <div class="admin_container">
        <div class="add_challenge_header">
            <h1 id="add_challenge_title">Les Difficultés</h1>
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
        this.challenge_id = this.$route.params.challenge_id;
        axios
            .get('http://localhost:3000/create', 
                { withCredentials: true })
            .then(response => { 
                for(let i=0; i<response.data.length; i++){
                    for(let u=0; u<response.data[i].activity[0].challenge.length; u++){
                        if(response.data[i].activity[0].challenge[u].name === this.challenge_id[0]){
                            for(let y=0; y<response.data[i].activity[0].challenge[u].difficulty.length; y++){
                                const title = [response.data[i].activity[0].challenge[u].difficulty[y]];
                                this.difficultys.push(title);
                            }
                        }
                        
                    }
                }
            })
            .catch(error => {
              console.log(error);      
            });

    }
}
</script>
