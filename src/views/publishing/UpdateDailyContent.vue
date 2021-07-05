<template>
         <div class="add_dailycontent_container add_challenge_container">
        <div class="add_challenge_header">
            <h1 id="add_challenge_title">Modifier le défi du jour </h1>
        </div>
        <div class ="create_updatedaily_container">
            <div class="h3_update_daily">
                <h3 class="h3_update challenge_h3">Contenu :</h3>
                <h3 class="h3_update challenge_h3">Gif :</h3>
            </div>
            <div class="input_update_daily">
                <input
                        type="text"
                        v-model="state.contentQuery"
                        class="inputCadre size_daily"
                        name="content"
                        autocomplete="off"
                        :placeholder="state.user.contents"
                    />
                    <span class="name_span" v-if="v$.contentQuery.$error">
                        {{ v$.contentQuery.$errors[0].$message }}
                    </span>
               <input
                        type="text"
                        class="inputCadre size_daily"
                        name="gif"
                        :placeholder="state.user.gifs"
                        v-model="state.gifQuery"
                    />
                     <span class="name_span" v-if="v$.gifQuery.$error">
                        {{ v$.gifQuery.$errors[0].$message }}
                    </span>
            </div>
        </div>
        <div class="button_challenge">
            <router-link :to="{ name: 'MyDailyContents', params: { difficulty_id: this.state.user.difficulty_id } }">
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
import useValidate from '@vuelidate/core';
import { required, minLength, helpers } from '@vuelidate/validators';
import { reactive, computed } from 'vue';

const content = value => {
    if (typeof value === 'undefined' || value === null || value === '' ) {
        return true
    }
    return /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(value)
}

export default {
    name: 'UpdateDailyContent',
    setup() {
        const state = reactive({
            user: {
                difficulty_id: Number,
                daily_content_id: Number,
                id_daily: Number,
                max:"",
                contents: "",
                gifs: "",
            },
            contentQuery: "",
            gifQuery:"",
        });
        const rules = computed(() => {
            return {
                contentQuery: { 
                    required: helpers.withMessage('*Champ obligatoire', required),
                    minLength: helpers.withMessage('*Votre défis dois faire 10 lettres au minimum.', minLength(10)),
                    content: helpers.withMessage('*Il manque une majuscule au début du mot.', content),
                   
                },
                gifQuery: {
                    required: helpers.withMessage('*Champ obligatoire', required),
                    minLength: helpers.withMessage('*Votre gif dois faire 10 lettres au minimum.', minLength(10)),
                   
                },
            }
        });
        const v$ = useValidate(rules, state);
        return{
            state, 
            v$,
        }
    },
    mounted() {
        if (this.$route.params.difficulty_id) {
            this.state.user.difficulty_id = this.$route.params.difficulty_id;
            this.state.user.daily_content_id = this.$route.params.daily_content_id;
            this.state.user.contents = this.$route.params.content;
            this.state.user.gifs = this.$route.params.gif;
        } else {
            this.$router.push('/mychallenges');
        }
    },
    methods: {
        update () {
            this.v$.$validate()
            if (!this.v$.$error) {
                axios
                    .post('http://localhost:3000/create/update', 
                        { 
                            id: this.$route.params.id_daily[this.state.user.daily_content_id],
                            content: this.state.contentQuery,
                            gif: this.state.gifQuery,
                        },
                        { withCredentials: true })
                this.$router.push({ name: 'MyDailyContents', params: { difficulty_id: this.state.user.difficulty_id } });   
            } else {
                console.log(this.v$.$errors);
            }
        }
    }

}
</script>
