<template>
         <div class="add_dailycontent_container add_challenge_container">
        <div class="add_challenge_header">
            <h1 id="add_challenge_title">Modifier le Daily Content </h1>
        </div>
        <div class ="create_updatedaily_container">
            <div class="h3_update_daily">
                <h3 class="challenge_h3">Contenu :</h3>
                <h3 class="challenge_h3">Gif :</h3>
            </div>
            <div class="input_update_daily">
                <input
                        type="text"
                        v-model="contente"
                        class="inputCadre size_daily"
                        name="content"
                        :placeholder="contents"
                        autocomplete="off"
                        required
                    />
               <input
                        type="text"
                        v-model="gifs"
                        class="inputCadre size_daily"
                        name="content"
                        :placeholder="gifs"
                        autocomplete="off"
                        required
                    />
            </div>
        </div>
        <div class="button_challenge">
            <router-link :to="{ name: 'MyDailyContents', params: { difficulty_id: this.difficulty_id } }">
                <button class="designButton" type="submit">
                    Retour
                </button>
            </router-link>
            <form @submit.prevent="update" action="" method="post">
                <button class="designButton" type="submit">
                    Modifier
                </button>
            </form>
        </div> 
    </div>
</template>

<script>
import axios from "axios";

export default {

    name: 'UpdateDailyContent',
    data() {
        return {
            difficulty_id: Number,
            daily_content_id: Number,
            max:"",
            contents: "",
            gifs: "",
        }
    },
    mounted() {
        this.difficulty_id = this.$route.params.difficulty_id;
        this.daily_content_id = this.$route.params.daily_content_id;
        axios
            .post('http://localhost:3000/create/dailycontent', 
                { difficulty_id: this.difficulty_id },
                { withCredentials: true })
            .then(response => {
                this.max = response.data[this.daily_content_id].order_index.length;
                this.contents = response.data[this.daily_content_id].content;
                this.gifs = response.data[this.daily_content_id].image;
            })
            .catch(error => {
                console.log(error);  
            })
    },
    methods: {
        update () {
            console.log('SAL');
        
        }
    }

}
</script>
