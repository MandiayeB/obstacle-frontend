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
    name : 'MyDailyContents',
    data () {
        return {
            difficulty_id: Number,
        }
    },
    mounted() {
        this.difficulty_id = this.$route.params.difficulty_id;
        axios
            .post('http://localhost:3000/create/dailycontent', 
                { difficulty_id: this.difficulty_id },
                { withCredentials: true })
            .then(response => {
                console.log(response.data)
            })

    }

}
</script>