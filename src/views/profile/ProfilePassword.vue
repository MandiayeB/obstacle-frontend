<template>
    <div class="container_profile">
        <h1 id="profile_password_title">Changer votre mot de passe</h1>
        <div class="separateur"></div>
        <div class="edit_password">
            <div class="profile_password_h3">
                <h3>Ancien mot de passe :</h3>
                <h3>Nouveau mot de passe :</h3>
                <h3>Confirmer mot de passe :</h3>
            </div>
            <div class="password_input">
                <div class="cadreInput">
                    <input
                        type="password"
                        class="size_password inputCadre"
                        name="password"
                        placeholder="Ancien mot de passe"
                        v-model="state.password.oldPassword"
                    />
                    <span class="password_span" v-if="v$.password.oldPassword.$error">
                        {{ v$.password.oldPassword.$errors[0].$message }}
                    </span>
                </div>
                <div class="cadreInput">
                    <input
                        type="password"
                        class="size_password inputCadre"
                        name="newPassword"
                        placeholder="Nouveau mot de passe"
                        v-model="state.password.newPassword"
                    />
                    <span class="password_span" v-if="v$.password.newPassword.$error">
                        {{ v$.password.newPassword.$errors[0].$message }}
                    </span>
                </div>
                <div class="cadreInput">
                    <input
                        type="password"
                        class="size_password inputCadre "
                        name="newpassword"
                        placeholder="Confirmer mot de passe"
                        v-model="state.password.confirmPassword"
                    />
                    <span class="password_span" v-if="v$.password.confirmPassword.$error">
                        {{ v$.password.confirmPassword.$errors[0].$message }}
                    </span>
                </div>
            </div>
        </div>
        <div class="profile_button">
            <form @submit.prevent="editing" action="" method="post">
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
import { required, sameAs, helpers } from '@vuelidate/validators';
import { reactive, computed } from 'vue';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

const passwordRegex = value => {
    if (typeof value === 'undefined' || value === null || value === '') {
        return true
    }
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value)
}

export default {
    name: "EditPassword",
    setup() {
        const state = reactive({
            password:{
                oldPassword: "",
                newPassword:"",
                confirmPassword:""
            },
        })
        const rules = computed(() => {
            return {
                password: {
                    oldPassword: { 
                        required: helpers.withMessage('*Champ obligatoire.',required),
                        passwordRegex: helpers.withMessage('*Le mot de passe doit faire 8 caractères au moins, au moins une lettre, un chiffre et un caractère spécial.', passwordRegex), 
                    },
                    confirmPassword: { 
                        required: helpers.withMessage('*Champ obligatoire.',required), 
                        passwordRegex: helpers.withMessage('*Le mot de passe doit faire 8 caractères au moins, au moins une lettre, un chiffre et un caractère spécial.', passwordRegex), 
                        sameAs: helpers.withMessage('*Les mots de passes doivent correspondre.',sameAs(state.password.newPassword)), 
                    },
                    newPassword: { 
                        required: helpers.withMessage('*Champ obligatoire.',required), 
                        passwordRegex: helpers.withMessage('*Le mot de passe doit faire 8 caractères au moins, au moins une lettre, un chiffre et un caractère spécial.', passwordRegex),
                    },
                },
            }
        })
        const v$ = useValidate(rules, state);   
            return{
            state, 
            v$,
        }
        
    },
    methods: {
        editing(){
            this.v$.$validate();
            if(!this.v$.$error){
                axios
                    .put(
                        (process.env.VUE_APP_URL || 'https://obstacle-backend.herokuapp.com') + '/profile/editPassword', 
                        {
                            emailsession: sessionStorage.getItem("email"),
                            oldPassword: this.state.password.oldPassword,
                            newPassword: this.state.password.newPassword,
                            confirmPassword: this.state.password.confirmPassword
                        }
                    )
                    .catch((error) => {
                        if(error.response.status === 308){
                            this.$router.push('/profile');
                            createToast(
                                { 
                                    title: 'Mot de passe mis à jour.'
                                },
                                {
                                    timeout: 3000,
                                    type: 'success',
                                    position: 'bottom-right'
                                }
                            );
                        }
                        
                    });
            } else {
                console.log(this.v$.$errors);
            }   
        }
    }
};
</script>