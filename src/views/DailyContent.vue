<template>
    <div class="container_achievements">
        <div class="achievements">
            <div class="daily_content_div">
                <h1 class="daily_content_h1">Voici votre défi du jour </h1>
            </div>
            <Content
                v-if="content.content"
                :content="content"
                :image="image"
                :count="parseInt(count.count, 10)"
            />
            <Achievement
                v-if="content.content"
                :theme="theme"
                :goal_id="goal_id"
                :gdc_id="gdc_id"
            />
        </div>
        <div class="guide_achievements">
            <div class="guide_achievements_div">
                <h1 class="guide_achievements_h1">Guide</h1>
            </div>
            <Guide
                v-if="content.content"
                :theme="theme"
                :goal_id="goal_id"
                :gdc_id="gdc_id"
            />
        </div>
    </div>
</template>

<script>
import Achievement from "../components/Achievement.vue";
import Content from "../components/Content.vue";
import Guide from "../components/Guide.vue";
import axios from "axios";

export default {
    name: 'DailyContent',
    components: {
        Achievement,
        Content,
        Guide,
    },
    data(){
        return{
            goal_id: Number,
            gdc_id: Number,
            content: Object,
            image: String,
            theme: String,
            count: Number,
        };
    },
    mounted() {
        this.goal_id = parseInt(this.$route.params.goal_id, 10);
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