<template>
    <form @submit.prevent="handleSubmit" method="post" class="achievement_container">
        <div class="duration_feeling_achievement">
            <div class="input_container">
                <div class="input_title_achievement">Combien de temps a duré ce défi ?</div>
                <input
                    type="number"
                    v-model="state.duration"
                    class="inputCadre tailleInput"
                    name="duration"
                    min="0"
                    max="90"
                    placeholder="Durée en minutes"
                    autocomplete="off"
                    required
                />
            </div>
            <div class="input_container">
                <div class="input_title_achievement">Quel est votre ressenti sur cet exercice ?</div>
                <select v-model="state.feeling" class="select_feeling" required>
                    <option disabled value>Ressenti</option>
                    <option :key="feeling.id" v-for="feeling in state.feelings" :value="feeling">{{ feeling }}</option>
                </select>
            </div>
        </div>
        <div class="observation_achievement">
            <textarea
                v-model="state.observation"
                class="inputCadre tailleInput"
                name="observation"
                maxlength="272"
                placeholder="Remarque (optionnel)"
                autocomplete="off"
            />
        </div>
        <button class="designButton" type="submit">
            Valider mon défi !
        </button>
    </form>
</template>

<script>
import useValidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { reactive, computed } from 'vue';
import axios from "axios";
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
    name: 'Computing',
    props: {
        goal_id: Number,
        gdc_id: Number
    },
    setup(){
        const state = reactive({
            feelings: [ 'Très Bon', 'Bon', 'Moyen', 'Pas top' ],
            feeling: String,
            duration: Number,
            observation: "",
            displayError: false,
            errorMsg: String,
        })

        const rules = computed(() => {
            return {
                duration: {
                    required: helpers.withMessage('*Champ obligatoire.',required),
                },
                feeling: {
                    required: helpers.withMessage('*Champ obligatoire.',required),
                },
            }
        })
        const v$ = useValidate(rules, state);
        return {
            state, 
            v$,
        }
    },
    methods: {
        handleSubmit() {
            this.v$.$validate()
            if (!this.v$.$error) {
                axios
                    .post(
                        (process.env.VUE_APP_URL || 'https://obstacle-backend.herokuapp.com') + '/dailycontent/achievement',
                        { 
                            theme: "Cooking",
                            fields: {
                                "feeling": this.state.feeling,
                                "duration": this.state.duration,
                                "observation": this.state.observation
                            },
                            goal_id: this.goal_id,
                            gdc_id: this.gdc_id
                        },
                        { withCredentials: true }
                    )
                    .then(() => {
                        this.$router.push('/');
                        createToast(
                            { 
                                title: 'Accomplissement enregistré !', 
                                description: 'Tu te débrouilles super bien !'
                            },
                            {
                                timeout: 3000,
                                showIcon: true,
                                type: 'success',
                                position: 'bottom-right'
                            }
                        );
                    })
                    .catch((error) => {
                        if (error.response.status === 308 || error.response.status === 307) {
                            this.$router.push("/login");
                        } else {
                            console.log(error);
                            this.state.errorMsg = error.response.data;
                            this.state.displayError = true;
                        }
                    });
            } else {
                console.log(this.v$.$errors);
            }

        },
    },
}
</script>