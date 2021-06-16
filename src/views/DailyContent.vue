<template>
    <div class="achievements">
        <h1 class="daily_content_h1">Voici votre défi du jour :</h1>
        <Content 
            :content="content"
            :image="image"
            :count="count.count"
        />
        <Achievement 
            :theme="theme" 
            :goal_id="goal_id" 
            :gdc_id="gdc_id"
        />
    </div>
</template>

<script>

import Achievement from "../components/Achievement.vue";
import Content from "../components/Content.vue";
import axios from "axios";

export default {
    name: 'DailyContent',
    components: {
        Achievement,
        Content,
    },
    data(){
        return{
            goal_id: Number,
            gdc_id: Number,
            content: Object,
            image: "",
            theme: "",
            count: Number,
        };
    },
    mounted() {
        this.goal_id = this.$route.params.goal_id;
        axios
            .post('http://localhost:3000/dailycontent', 
                { goal_id: this.goal_id },
                { withCredentials: true })
            .then((response) => {
                this.content = response.data.content;
                this.image = response.data.image;
                this.gdc_id = response.data.content.gdc_id;
                this.theme = response.data.theme;
                this.count = response.data.count;
            })
            .catch((error) => console.log(error));
    }
}
</script>