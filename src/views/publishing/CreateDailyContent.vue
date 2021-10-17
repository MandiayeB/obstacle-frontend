<template>
         <div class="add_dailycontent_container add_challenge_container">
        <div class="add_challenge_header">
            <h1 id="add_challenge_title">Ajouter un défi journalier</h1>
        </div>
        <div class="separateur"></div>
        <div class ="create_updatedaily_container">
            <div class="h3_update_daily">
                <h3 class="challenge_h3">Contenu :</h3>
                <h3 class="challenge_h3">Gif :</h3>
            </div>
            <div class="input_update_daily">
                <input
                        type="text"
                        v-model="state.contentQuery"
                        class="inputCadre size_daily"
                        name="content"
                        placeholder="Contenu du défi"
                        autocomplete="off"
                        required
                    />
                    <span class="name_span" v-if="v$.contentQuery.$error">
                        {{ v$.contentQuery.$errors[0].$message }}
                    </span>
               <input
                        type="text"
                        v-model="state.gifQuery"
                        class="inputCadre size_daily"
                        name="content"
                        placeholder="URL de votre gif"
                        autocomplete="off"
                        required
                    />
                    <span class="name_span" v-if="v$.gifQuery.$error">
                        {{ v$.gifQuery.$errors[0].$message }}
                    </span>
            </div>
        </div>
        <div class="separateur"></div>
        <h3> Ajouter un guide : </h3>
        <div class="new_difficulty">
            <div class="h3_youtube">
                <h3>Descriptif</h3>
                <h3>Youtube</h3>
            </div>
            <div class ="input_difficulty">
                <div class="newdailycontent_guide">
                    <input 
                        type="text"
                        v-model="state.textQuery"
                        class="inputCadre size_challenge width_difficulty"
                        name="textyoutube"
                        placeholder="Description de la vidéo"
                        autocomplete="off"
                    >
                    <span class="name_span" v-if="v$.textQuery.$error">
                        {{ v$.textQuery.$errors[0].$message }}
                    </span>
                </div>
                <div class="newdailycontent_guide">
                    <input 
                        type="text"
                        v-model="state.youtubeQuery"
                        class="inputCadre size_challenge width_difficulty"
                        name="youtube"
                        placeholder="Lien Youtube"
                        autocomplete="off"
                    >
                    <span class="name_span" v-if="v$.youtubeQuery.$error">
                        {{ v$.youtubeQuery.$errors[0].$message }}
                    </span>
                </div>
            </div>
        </div>
        <div class="button_challenge">
            <router-link :to="{ name: 'MyDailyContents', params: { difficulty_id: this.state.user.difficulty_id } }">
                <button class="designButton" type="submit">
                    Retour
                </button>
            </router-link>
            <form @submit.prevent="add" action="" method="post">
                <button class="designButton" type="submit">
                    Ajouter
                </button>
            </form>
        </div> 
    </div>
</template>

<script>
import axios from 'axios';
import useValidate from '@vuelidate/core';
import { required, minLength, helpers } from '@vuelidate/validators';
import { reactive, computed } from 'vue';

export default {
    name: 'CreateDailyContent',
    setup() {
        const state = reactive({
            user: {
                difficulty_id: Number,
            },
            contentQuery: "",
            gifQuery:"",
            textQuery:"",
            youtubeQuery:"",
        });
        const rules = computed(() => {
            return {
                contentQuery: { 
                    required: helpers.withMessage('*Champ obligatoire', required),
                    minLength: helpers.withMessage('*Votre défi doit comporter 10 lettres au minimum.', minLength(10)),
                },
                gifQuery: {
                    required: helpers.withMessage('*Champ obligatoire', required),
                    minLength: helpers.withMessage('*Votre gif doit comporter 10 caractères au minimum.', minLength(10)),
                },
                textQuery: {
                    required: helpers.withMessage('*Champ obligatoire', required),
                    minLength: helpers.withMessage('*Votre descriptif doit comporter 5 lettres au minimum.', minLength(5)),
                },
                youtubeQuery: {
                    required: helpers.withMessage('*Champ obligatoire', required),
                    minLength: helpers.withMessage('*Votre gif doit comporter 10 caractères au minimum.', minLength(10)),
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
        } else {
            this.$router.push('/mychallenges');
        }
    },
    methods: {
        add() {
            this.v$.$validate()
            if (!this.v$.$error) {
                axios
                    .post('http://localhost:3000/create/dailycontent', 
                        {
                            content: this.state.contentQuery,
                            gif: this.state.gifQuery,
                            difficulty_id: this.state.user.difficulty_id, 
                            textyoutube: this.state.textQuery,
                            youtube: this.state.youtubeQuery,
                        },
                        { withCredentials: true }
                    )
                    this.$router.push({ name: 'MyDailyContents', params: { difficulty_id: this.state.user.difficulty_id } });
            } else {
                console.log(this.v$.$errors);
            }
        },
    }
}
</script>