<template>
    <div class="homepage">
        <h1 id="homepage_title">Changer votre mot de passe</h1>
        <div class="separateur"></div>
        <div class ="cadreCredentials">
            <div class="cadreoldPassword cadreProdil cadreInput">
                <h3 class ="ajustementCredentials">Ancien mot de passe </h3>
                <input
                    type="password"
                    class="inputCadre tailleInput adjumentmentPassword"
                    name="password"
                    placeholder="Ancien mot de passe"
                    v-model="state.password.oldPassword"
                />
                <span v-if="v$.password.oldPassword.$error">
                    {{ v$.password.oldPassword.$errors[0].$message }}
                </span>
            </div>
            <div class="cadreProfil cadreInput">
                <h3 class="ajustementCredentials">Nouveau mot de passe </h3>
                <input
                    type="password"
                    class="inputCadre tailleInput adjumentmentPassword"
                    name="newPassword"
                    placeholder="Nouveau mot de passe"
                    v-model="state.password.newPassword"
                />
                <span v-if="v$.password.newPassword.$error">
                    {{ v$.password.newPassword.$errors[0].$message }}
                </span>
            </div>
            <div class="cadreProfil cadreInput">
                <h3 class="ajustementCredentials">Confirmer votre nouveau mot de passe </h3>
                <input
                    type="password"
                    class="inputCadre tailleInput adjumentmentPassword"
                    name="newpassword"
                    placeholder="Confirmer votre nouveau mot de passe"
                    v-model="state.password.confirmPassword"
                />
                <span v-if="v$.password.confirmPassword.$error">
                    {{ v$.password.confirmPassword.$errors[0].$message }}
                </span>
            </div>
        </div>
        <div class="emplacementButton">
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
import { required, minLength, maxLength, sameAs, helpers } from '@vuelidate/validators';
import { reactive, computed } from 'vue';

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
                console.log('Hello?');
                axios
                    .put("http://localhost:3000/profile/editPassword", {
                        emailsession: sessionStorage.getItem("email"),
                        oldPassword: this.state.password.oldPassword,
                        newPassword: this.state.password.newPassword,
                        confirmPassword: this.state.password.confirmPassword
                    })
                    .catch((error) => {
                        if(error.response.status === 308){
                            this.$router.push('/profile');
                        }
                        
                    });
            } else {
                console.log(this.v$.$errors);
            }   
        }
    }
};
</script>