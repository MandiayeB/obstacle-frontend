<template>

</template>

<script>
import axios from "axios";

export default {
    name: 'Difficulty',
    data () {
        return {
            challenge_id: Number,
        }

    },
    mounted() {
        this.challenge_id = this.$route.params.challenge_id
        axios.get('http://localhost:3000/addChallenge', 
            { challenge_id: this.challenge_id })
        console.log(this.challenge_id);

    }
}
</script>
