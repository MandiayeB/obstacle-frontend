<template>
    <div class="homepage">
        <h1 id="homepage_title">Profil</h1>
        <div class="separateur"></div>
            <div class="picture_profil">
                <img :src="state.user.image" :alt="state.user.firstname" />
            </div>
            <input type ="file" @change="onFileSelected">
            <img id="myImg" src="#">
        <div class ="cadreCredentials">
            <div class="cadreInput">
                <h3 class ="ajustementCredentials">Prénom </h3>
                <input
                    type="text"
                    class="inputCadre tailleInput adjumentmentInputPrenom"
                    name="fistname"
                    :placeholder="state.user.firstname"
                    v-model="state.fnQuery"
                />
                <span class="name_span" v-if="v$.fnQuery.$error">
                    {{ v$.fnQuery.$errors[0].$message }}
                </span>
            </div>
            <div class="cadreInput">
                <h3 class="ajustementCredentials">Nom </h3>
                <input
                    type="text"
                    class="inputCadre tailleInput adjumentmentInputNom"
                    name="lastname"
                    :placeholder="state.user.lastname"
                    v-model="state.lnQuery"
                />
                <span class="name_span" v-if="v$.lnQuery.$error">
                    {{ v$.lnQuery.$errors[0].$message }}
                </span>
            </div>
            <div class="cadreInput">
                <h3 class="ajustementCredentials">Email </h3>
                <input
                    type="text"
                    class="inputCadre tailleInput adjumentmentInputEmail"
                    name="email"
                    :placeholder="state.user.email"
                    v-model="state.emailQuery"
                />
                <span v-if="v$.emailQuery.$error">
                    {{ v$.emailQuery.$errors[0].$message }}
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
        <div class="passwordForget">
            <router-link :to="'/profile/edit/password'">
                <a> Changer le mot de passe </a>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import useValidate from '@vuelidate/core';
import { required, minLength, maxLength, sameAs, helpers } from '@vuelidate/validators';
import { reactive, computed } from 'vue';
 
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
    setup() {
        const state = reactive({
            user: {
                firstname: sessionStorage.getItem("firstname"),
                lastname: sessionStorage.getItem("lastname"),
                email: sessionStorage.getItem("email"),
                role: sessionStorage.getItem("role"),
                image:"https://photos.lci.fr/images/613/344/kanyewest2020afp-5b6354-0@1x.jpeg",
            },
            fnQuery: "",
            lnQuery:"",
            emailQuery:""
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
            selectedFile: null,
        }
    },
    beforeCreate() {
        if (!sessionStorage.getItem("isAuthenticated")) {
            this.$router.push("/login");
        }
    },
    created() {
        
    },
    methods: {
        onFileSelected(event) {
            console.log(event.target.files[0]);
            this.selectedFile = event.target.files[0];
        },
        changePicture() {

               if(this.files && this.files[0]) {
                   var img = document.querySelector('img');
                   img.onload=() => {
                       URL.revokeObjectURL(img.src);
                   }
                   img.src = URL.createObjectURL(this.files[0]);
                   console.log('LALSASLASLA')
               }
        },
        editing(){
           
            this.v$.$validate()
            if(!this.v$.$error){
                axios
                    .put("http://localhost:3000/profile/editCredentials", {
                        emailsession: sessionStorage.getItem("email"),
                        firstname: this.state.fnQuery,
                        lastname: this.state.lnQuery,
                        email: this.state.emailQuery,
                        
                    })
                    .catch((error) => {
                        if(error.response.status === 308){
                            this.$router.push('/profile');
                            if(this.state.emailQuery!==""){
                                sessionStorage.setItem('email', this.state.emailQuery);
                            }
                            if(this.state.fnQuery!==""){
                                sessionStorage.setItem('firstname', this.state.fnQuery);
                            }
                            if(this.state.lnQuery!==""){
                                sessionStorage.setItem('lastname', this.state.lnQuery);
                            }
                        }
                        
                    });
            } else {
                console.log(this.v$.$errors);
            }   
        }
    }
};
</script>
