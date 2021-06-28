<template>
    <div class="admin_container">
        <div class="add_challenge_header">
            <h1 id="add_challenge_title">Les Difficultés</h1>
        </div>
        <div class ="separateur"></div>
        <div class="button_admin">
            <AdminDifficultys v-if="difficultys.length > 0" :difficultys="difficultys"/>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import AdminDifficultys from '../components/AdminDifficultys.vue';

export default {
    name: 'Difficulty',
    components: {
        AdminDifficultys,
    },
    data () {
        return {
            challenge_id: Number,
            difficultys : [],
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
                                const title = [response.data[i].activity[0].challenge[u].difficulty[y].title];
                                this.difficultys.push(title);
                    
                            }
                        }
                        
                    }
                }
            })
        console.log(this.challenge_id[0]);

    }
}
</script>
