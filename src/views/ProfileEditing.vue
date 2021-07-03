<template>
    <div class="container_profile">
        <h1 id="profile_editing_title">Profil</h1>
        <div class="separateur"></div>
        <UploadingFile  
            v-if="state.user.firstname"
            :firstname="state.user.firstname"
        />
        <div class ="profile_editing_frame">
            <div class="profile_editing_credentials">
                <h3 class="profile_page_h3">Prénom :</h3>
                <h3 class="profile_page_h3">Nom :</h3>
                <h3 class="profile_page_h3">Email :</h3>
            </div>
            <div class="profile_editing_credentials">
                <div class="profile_input_frame">
                    <input
                        type="text"
                        class="profile_input"
                        name="fistname"
                        :placeholder="state.user.firstname"
                        v-model="state.fnQuery"
                    />
                    <span class="name_span" v-if="v$.fnQuery.$error">
                        {{ v$.fnQuery.$errors[0].$message }}
                    </span>
                </div>
                <div class="profile_input_frame">
                    <input
                        type="text"
                        class="profile_input"
                        name="lastname"
                        :placeholder="state.user.lastname"
                        v-model="state.lnQuery"
                    />
                    <span class="name_span" v-if="v$.lnQuery.$error">
                        {{ v$.lnQuery.$errors[0].$message }}
                    </span>
                </div>
                <div class="profile_input_frame">
                    <input
                        type="text"
                        class="profile_input"
                        name="email"
                        :placeholder="state.user.email"
                        v-model="state.emailQuery"
                    />
                    <span v-if="v$.emailQuery.$error">
                        {{ v$.emailQuery.$errors[0].$message }}
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
        <div class="passwordForget">
            <router-link to="/profilepassword">
                Changer le mot de passe
            </router-link>  
        </div>
    </div>
</template>

<script>
import UploadingFile from '../components/UploadingFile.vue';
import axios from "axios";
import useValidate from '@vuelidate/core';
import { minLength, maxLength, helpers } from '@vuelidate/validators';
import { reactive, computed } from 'vue';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
 
const firstnameRegex = value => {
    if (typeof value === 'undefined' || value === null || value === '') {
        return true
    }
    return /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(value)
}
const lastnameRegex = value => {
    if (typeof value === 'undefined' || value === null || value === '') {
        return true
    }
    return /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(value)
}
const mailAdressRegex = value => {
    if (typeof value === 'undefined' || value === null || value === '') {
        return true
    }
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)
}

export default {
    name: "Setting",
    components: {
        UploadingFile,
    },
    setup() {
        const state = reactive({
            user: {
                firstname: sessionStorage.getItem("firstname"),
                lastname: sessionStorage.getItem("lastname"),
                email: sessionStorage.getItem("email"),
                role: sessionStorage.getItem("role"),
            },
            fnQuery: "",
            lnQuery:"",
            emailQuery:"",
        })     
        const rules = computed(() => {
            return {
                fnQuery: { 
                    minLength: helpers.withMessage('*Votre prénom doit être long de 2 lettres minimum.', minLength(2)),
                    firstnameRegex: helpers.withMessage('*Il manque une majuscule au début du mot.', firstnameRegex),
                },
                lnQuery: { 
                    maxLength: helpers.withMessage('*Votre nom ne doit pas dépasser 20 lettres.',maxLength(20)), 
                    lastnameRegex: helpers.withMessage('*Il manque une majuscule au début du mot.', lastnameRegex),
                },
                emailQuery: { 
                    mailAdressRegex: helpers.withMessage("*L'adresse email n'est pas valide.", mailAdressRegex),
                },
            }
        })
        const v$ = useValidate(rules, state);
        return{
            state, 
            v$,
        }
    },
    beforeCreate() {
        if (!sessionStorage.getItem("isAuthenticated")) {
            this.$router.push("/login");
        }
    },
    methods: {
        editing(){
            this.v$.$validate()
            if(!this.v$.$error){
                axios
                    .put(
                        (process.env.VUE_APP_URL || 'https://obstacle-backend.herokuapp.com') + "/profile/editCredentials", 
                        {
                            emailsession: sessionStorage.getItem("email"),
                            firstname: this.state.fnQuery,
                            lastname: this.state.lnQuery,
                            email: this.state.emailQuery,
                        }
                    )
                    .catch((error) => {
                        if (error.response.status === 308) {
                            this.$router.push('/profile');
                            if (this.state.emailQuery !== "") {
                                sessionStorage.setItem('email', this.state.emailQuery);
                            }
                            if (this.state.fnQuery !== "") {
                                sessionStorage.setItem('firstname', this.state.fnQuery);
                            }
                            if (this.state.lnQuery !== "") {
                                sessionStorage.setItem('lastname', this.state.lnQuery);
                            }
                            createToast(
                                { 
                                    title: 'Informations mises à jour.'
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
