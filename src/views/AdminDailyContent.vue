<template>
     <div class="admin_container">
        <div class="add_challenge_header">
            <h1 id="add_challenge_title">Daily Content</h1>
        </div>
        <div class ="separateur"></div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name : 'AdminDailyContent',
    data () {
        return {
            difficulty_id: Number,
        }
    },
    mounted() {
        this.difficulty_id = this.$route.params.difficulty_id;
        axios.get('http://localhost:3000/addChallenge', 
            { difficulty_id: this.difficulty_id })
        console.log(this.difficulty_id[0]);
    }

}
</script>