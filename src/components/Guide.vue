<template>
    <div class="daily_guide_center">
        <div 
            class="daily_guide_center"
            v-for="items in guide"
            :key="items"
        >
            <h3 class="homepage_text" >{{ items.text }}</h3>
            <iframe :src="items.url" frameborder="0" max-width="inherit" height="200" allowfullscreen>
            </iframe>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Guide',
    props: {
        guide: JSON,
    },

}
</script>