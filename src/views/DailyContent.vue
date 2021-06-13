<template>
    <div class="achievements">
        <h1 class="daily_content_h1">Bienvenue sur votre défi journalier !</h1>
        <Content :content="content"/>
        <Achievements :theme="theme"/>
    </div>
</template>

<script>

import Achievements from "../components/Achievements.vue";
import Content from "../components/Content.vue";
import axios from "axios";

export default {
    name: 'DailyContent',
    components: {
        Achievements,
        Content,
    },
    data(){
        return{
            goal_id: Number,
            content: String,
            theme: String,
        };
    },
    mounted(){
        this.goal_id = this.$route.params.goal_id;
        axios
        .post('http://localhost:3000/dailycontent', 
            { goal_id: this.goal_id },
            { withCredentials: true })
        .then((response) => {
            this.content = response.data.content;
            this.theme = response.data.theme;
            console.log(response);
        })
        .catch((error) => console.log(error));
    }
}
</script>