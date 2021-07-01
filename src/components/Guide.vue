<template>
    <div class="daily_guide_center">
        <div 
            class="daily_guide_center"
            v-for="items in url"
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
    data(){
        return{
            url:[
                { url: 'https://www.youtube.com/embed/fWuUXG6ecSQ', text: 'Aide pour ce challenge :'},
                { url: 'https://www.youtube.com/embed/Fg0j2P-OL7I', text: 'Des conseils pour l\'équipement :' },
            ]
        }
    },
    props: {
        theme: String,
        goal_id: Number,
        gdc_id: Number
    },
}
</script>