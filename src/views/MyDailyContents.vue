<template>
     <div class="title_daily add_challenge_container">
        <div class ="top_container">
            <button class="button_img designButton" v-on:click="avant">
                <img
                    class="transforme_prev"
                    src="../assets/images/expand_more_white_24dp.svg" 
                    alt="expand"
                >
            </button>
            <div v-if="order_id" class="add_challenge_header">
                <h1 id="add_challenge_title"> Défi journalier : {{order_id[index]}}/{{order_id.length}} </h1>
            </div>
            <div v-if="order_id===false" class="add_challenge_header">
                <h1 id="add_challenge_title"> Défi journalier : </h1>
            </div>
            <button class="button_img designButton" v-on:click="next">
                <img
                    class="transforme_next"
                    src="../assets/images/expand_more_white_24dp.svg" 
                    alt="expand"
                >
            </button>
        </div>
        <div class ="create_daily_container">
            <div class="h3_daily">
                <h3 class="create_daily_h3">{{content[index]}} </h3>
            </div>
            <div class="screen_daily">
                <img 
                    class="daily_screen"
                    :src= gif[index]
                />
            </div>
        </div>
        <div class="button_challenge">
            
            <router-link v-if="pourModifier" :to="{ name: 'UpdateDailyContent', params: { daily_content_id: index, difficulty_id: this.difficulty_id, id_daily: this.id, content: this.content[index], gif: this.gif[index]} }">
                <button class="designButton" type="submit">
                    Modifier
                </button>
            </router-link>
            <router-link :to="{ name: 'NewDailyContent', params: { difficulty_id: this.difficulty_id } }">
                <button class="designButton" type="submit">
                    Ajouter
                </button>
            </router-link>
        </div> 
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name : 'MyDailyContents',
    data () {
        return {
            difficulty_id: Number,
            order_id :[],
            content: [],
            gif: [],
            id: [],
            index: 0,
            max:"",
            pourModifier: true,
        }
    },
    mounted() {
        if(this.$route.params.difficulty_id) {
            this.difficulty_id = this.$route.params.difficulty_id;
            axios
                .post('http://localhost:3000/dailycontent/daily', 
                    { difficulty_id: this.difficulty_id },
                    { withCredentials: true })
                .then(response => {
                    for(let i=0; i<response.data.length; i++) {
                        const order = response.data[i].order_index;
                        const contents = response.data[i].content;
                        const gifs = response.data[i].image;
                        this.max = response.data[i].order_index;
                        this.order_id.push(order);
                        this.content.push(contents);
                        this.gif.push(gifs);
                        this.id.push(response.data[i].id);

                    }
                    if(this.content.length === 0) {
                        this.content.push("Il n'y a pas de défi journalier.");
                        this.gif.push("https://media.giphy.com/media/kHsUiJD0pOLItuf0Cb/giphy.gif");
                        this.pourModifier = false;
                        this.order_id = false;
                    }
                })
        } else {
            this.$router.push('mychallenges');
        }
    },
    methods: {
        next() {
            if(this.index!==this.max-1 && this.max != 0){
                this.index++;
            }
        },
        avant() {
            if(this.index!==0) {
                this.index--;
            }
        }
    }

}
</script>