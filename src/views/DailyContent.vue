<template>
    <div class="achievements">
        <h1 class="daily_content_h1">Bienvenue sur votre défi journalier !</h1>
        <Content />
        <Achievments  />
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
  
}
</script>