<template>
    <div class="achievements">
        <h1 class="daily_content_h1">Bienvenue sur votre défi journalier !</h1>
        <Content :content="content"/>
        <Achievments :theme="theme"/>
    </div>
</template>

<script>

import Achievments from "../components/Achievements.vue";
import Content from "../components/Content.vue";
import axios from "axios";

export default {
    name: 'DailyContent',
    components: {
        Achievments,
        Content,
    },
    data(){
        return{
            content: String,
            theme: String,
        };
    },
    mounted(){
        axios
        .get('http://localhost:3000/dailycontent', { withCredentials: true })
        .then( (response) => {
            this.content = response.content;
            this.theme = response.theme;
            console.log(response);
        })
        .catch((error) => console.log(error))

    }
  
}
</script>