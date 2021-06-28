<template>
    <div class="admin_container">
        <div class="add_challenge_header">
            <h1 id="add_challenge_title">Les Difficultés</h1>
        </div>
        <div class ="separateur"></div>
        <div class="button_admin">
            <Difficults v-if="difficults.length > 0" :difficults="difficults"/>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Difficults from '../components/Difficults.vue';

export default {
    name: 'Difficulty',
    components: {
        Difficults,
    },
    data () {
        return {
            challenge_id: Number,
            difficults : [],
        }

    },
    mounted() {
        this.challenge_id = this.$route.params.challenge_id
        axios.get('http://localhost:3000/addChallenge', 
            { challenge_id: this.challenge_id })
            .then(response => {
                for(let i=0; i<response.data.length; i++){
                    for(let u=0; u<response.data[i].activity[0].challenge.length; u++){
                        if(response.data[i].activity[0].challenge[u].name === this.challenge_id[0]){
                            for(let y=0; y<response.data[i].activity[0].challenge[u].difficulty.length; y++){
                                console.log(response.data[i].activity[0].challenge[u].difficulty);
                                const difficult = [response.data[i].activity[0].challenge[u].difficulty[y].title];
                                this.difficults.push(difficult);
                    
                            }
                        }
                        
                    }
                }
            })
        console.log(this.challenge_id[0]);

    }
}
</script>
