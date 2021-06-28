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
            difficult_id: Number,
        }
    },
    mounted() {
        this.difficult_id = this.$route.params.difficult_id;
        axios.get('http://localhost:3000/addChallenge', 
            { difficult_id: this.difficult_id })
        console.log(this.difficult_id[0]);
    }

}
</script>