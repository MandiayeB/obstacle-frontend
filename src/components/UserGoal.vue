<template>
    <router-link to="/dailycontent">
        <div class="user_goal">
            <h4 id="goal_text">{{ goal.title }}</h4>
            <img id="goal_img" :src="goal.image" :alt="goal.title">
        </div>
    </router-link>
</template>

<script>
import axios from "axios";

export default {
    name: 'Goal',
    props: {
        goal: { type: Object }
    },
    beforeRouteLeave (to, from, next) {
        axios
        .post('http://localhost:3000/', 
            { goal_id: this.goal.id }, 
            { withCredentials: true})
        .then(() => next())
        .catch((error) => console.log(error));
    },
}
</script>