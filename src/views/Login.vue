<template>
    <div class="login_container">
        <div class="logo_form">
            <figure class="logo_form">
                <img src="../assets/images/logoObstacle.png" />
            </figure>
        </div>
        <div class="cadre">
            <div class="title_signin">
                <h5 class="h5_title_signin">
                    Connexion
                </h5>
            </div>
            <div class="separateur"></div>
                <form @submit.prevent="handleSubmit" action="" method="post">
                    <div class="cadreInput">
                        <input
                            type="text"
                            v-model="state.email"
                            class="inputCadre tailleInput"
                            id="emailId"
                            name="email"
                            placeholder="Adresse mail"
                            autocomplete="off"
                            required
                        />
                        <span v-if="v$.email.$error">
                            {{ v$.email.$errors[0].$message }}
                        </span>
                    </div> 

                    <div class="cadreInput">
                        <input
                            type="password"
                            v-model="state.password"
                            class="inputCadre tailleInput"
                            name="password"
                            id="pass"
                            placeholder="Mot de passe"
                            autocomplete="off"
                            required
                        />
                    </div>
                    <span class="error_span" v-if="state.displayError">
                        * {{ state.errorMsg.msg }}
                    </span>
                    <div class="unButton">
                        <button class="designButton" type="submit" id="button">
                            Se connecter
                        </button>
                    </div>
                </form>
            <div class="passwordForget">
                <router-link to="/login">
                    Mot de passe oublié ?
                </router-link>
            </div>
            <div class="separateur"></div>
                <router-link class="router_link_no_underline" to="/signin">
                    <button class="designButton">
                        Créer un compte
                    </button>
                </router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import useValidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { reactive, computed } from 'vue';

const mailAdressRegex = value => {
    if (typeof value === 'undefined' || value === null || value === '') {
        return true
    }
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)
}

export default {
    name: "Login",
    setup(){
        const state = reactive({
            errors: [],
            email: "",
            password: "",
            count: 0,
            displayError: false,
            errorMsg: String,
        })

        const rules = computed(() => {
            return {
                email: {
                    required: helpers.withMessage('*Champ obligatoire.',required),
                    mailAdressRegex: helpers.withMessage("*Le format de l'adresse email n'est pas valide.", mailAdressRegex)
                }
            }
        })
        const v$ = useValidate(rules, state);
        return{
            state, 
            v$,
        }
    },
    methods: {
        getEmail(value){
            this.email = value;
        },
        handleSubmit() {
            this.v$.$validate();
            if(!this.v$.$error){
                axios
                    .post("http://localhost:3000/login", 
                        {
                            email: this.state.email,
                            password: this.state.password,
                        }, 
                        { 
                            withCredentials: true 
                        }
                    )
                    .catch((error) => {
                        if (error.response.status === 308 || error.response.status === 307) {

                            sessionStorage.setItem('isAuthenticated', true);
                            sessionStorage.setItem('birthdate', error.response.data.birthdate);
                            sessionStorage.setItem('email', error.response.data.email);
                            sessionStorage.setItem('firstname', error.response.data.firstname);
                            sessionStorage.setItem('lastname', error.response.data.lastname);
                            sessionStorage.setItem('gender', error.response.data.gender);
                            sessionStorage.setItem('picture', error.response.data.picture);
                            
                            window.dispatchEvent(new CustomEvent('isAuthenticated-sessionStorage-changed', {
                                detail: {
                                    storage: sessionStorage.getItem('isAuthenticated')
                                }
                            }));
                            
                            this.$router.push("/");
                            
                        } else {
                            this.state.errorMsg = error.response.data;
                            this.state.displayError = true;
                        }
                    }); 
            } else {
                console.log(this.v$.errors);
            }
        }
    },
};
</script>
