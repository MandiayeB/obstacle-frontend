<template>
    <div class="signin_container">
        <div class="logo_form">
            <figure class="logo_form">
                <img src="../assets/images/logoObstacle.png" />
            </figure>
        </div>
        <div class="cadre">
            <div class="title_signin">
                <h5 class="h5_title_signin">
                    Inscription
                </h5>
            </div>
            <div class="separateur"></div>
                <form @submit.prevent="handleSubmit" action="" method="post">
                    <div class="cadreInputName">
                        <div class="cadreInputFirstName">
                            <input
                                type="text"
                                v-model="state.firstname"
                                class="inputCadre tailleInput"
                                name="firstname"
                                placeholder="Prénom"
                                autocomplete="off"
                                required
                            />
                            <span class="name_span" v-if="v$.firstname.$error">
                                {{ v$.firstname.$errors[0].$message }}
                            </span>
                        </div>
                        <div class="cadreInputLastName">
                            <input
                                type="text"
                                v-model="state.lastname"
                                class="inputCadre tailleInput"
                                name="lastname"
                                placeholder="Nom"
                                autocomplete="off"
                                required
                            />
                            <span class="name_span" v-if="v$.lastname.$error">
                                {{ v$.lastname.$errors[0].$message }}
                            </span>
                        </div>
                        
                    </div>
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
                            v-model="state.password.password"
                            class="inputCadre tailleInput"
                            name="pass"
                            placeholder="Mot de passe"
                            autocomplete="off"
                            required
                        />
                        <span v-if="v$.password.password.$error">
                            {{ v$.password.password.$errors[0].$message }}
                        </span>
                    </div>
                    <div class="cadreInput">
                        <input
                            type="password"
                            v-model="state.password.confirm"
                            class="inputCadre tailleInput"
                            name="confirm"
                            placeholder="Confirmer le mot de passe"
                            autocomplete="off"
                            required
                        />
                        <span v-if="v$.password.confirm.$error">
                            {{ v$.password.confirm.$errors[0].$message }}
                        </span>
                    </div>
                    <div class="birthdate_signin">
                        <div class="label_date_signin">
                            <label for="date">Date de naissance</label>
                        </div>
                        <div class="cadreInputDate">
                            <select v-model="state.day" class="select_day_birth" required>
                                <option disabled value>Jour</option>
                                <option  :key="day.id" v-for="day in 31" :value="day">{{ day }}</option>
                            </select>
                            <select v-model="state.month" class="select_month_birth" required>
                                <option disabled value>Mois</option>
                                <option :key="month.id" v-for="month in state.months" :value="month">{{ month }}</option>
                            </select>
                            <select v-model="state.year" class="select_year_birth" required>
                                <option disabled value>Année</option>
                                <option :key="year.id" v-for="year in years" :value="year">{{ year }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="gender_signin">
                        <div class="label_gender_signin">
                            <label for="gender">Genre</label>
                        </div>
                        <div class="div_select_gender">
                            <select v-model="state.gender" class="select_gender" required>
                                <option disabled value>Genre</option>
                                <option :key="gender.id" v-for="gender in state.genders" :value="gender">{{ gender }}</option>
                            </select>
                        </div>
                    </div>
                    <span class="error_span" v-if="state.displayError">
                        * {{ state.errorMsg.msg }}
                    </span>
                    <div class="unButton">
                        <button class="designButton" type="submit">
                            S'inscrire
                        </button>
                    </div>
                </form>
            <div class="passwordForget">
                <router-link to="/login">
                    Déjà inscrit ? Se connecter
                </router-link>
            </div>
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
const passwordRegex = value => {
    if (typeof value === 'undefined' || value === null || value === '') {
        return true
    }
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^¨£§µ¤])[A-Za-z\d@$!%*#?&^¨£§µ¤]{8,}$/.test(value)
}
const mailAdressRegex = value => {
    if (typeof value === 'undefined' || value === null || value === '') {
        return true
    }
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)
}

export default {
    name: 'Signin',
    setup(){
        const state = reactive({
            genders: [ 'Homme', 'Femme', 'Autre' ],
            months: [ 'jan', 'fév', 'avr', 'mai', 'juin','juil','août','sept','oct','nov','dec' ],
            firstname: "",
            lastname: "",
            email: "",
            password:{
                password: "",
                confirm: "",
            },
            gender: "",
            day: "",
            month: "",
            year: "",
            age:"",
            displayError: false,
            errorMsg: String,
        })

        const rules = computed(() => {
            return {
                firstname: { 
                    required: helpers.withMessage('*Champ obligatoire.',required), 
                    minLength: helpers.withMessage('*Votre prénom doit être long de 2 lettres minimum.', minLength(2)),
                    firstnameRegex: helpers.withMessage('*Il manque une majuscule au début du mot.', firstnameRegex),
                },
                lastname: { 
                    required: helpers.withMessage('*Champ obligatoire.',required), 
                    maxLength: helpers.withMessage('*Votre nom ne doit pas dépasser 20 lettres.',maxLength(20)), 
                    lastnameRegex: helpers.withMessage('*Il manque une majuscule au début du mot.', lastnameRegex),
                },
                email: { 
                    required: helpers.withMessage('*Champ obligatoire.',required), 
                    mailAdressRegex: helpers.withMessage("*L'adresse email n'est pas valide.", mailAdressRegex),
                },
                password: {
                    password: { 
                        required: helpers.withMessage('*Champ obligatoire.',required),
                        passwordRegex: helpers.withMessage('*Le mot de passe doit faire 8 caractères au moins, au moins une lettre, un chiffre et un caractère spécial.', passwordRegex), 
                    },
                    confirm: { 
                        required: helpers.withMessage('*Champ obligatoire.',required), 
                        sameAs: helpers.withMessage('*Les mots de passes doivent correspondre.',sameAs(state.password.password)), 
                    },
                },
                genders: { required },
                day: { required },
                month: { required },
                year: { required },

            }
        })
        const v$ = useValidate(rules, state);
        return{
            state, 
            v$,
        }
    },
    computed : {
        years () {
            const year = new Date().getFullYear();
            return Array.from({length: year - 1900}, (value, index) => 1901 + index).reverse();
        },
    },
    methods: {

        getMonth(month, months) {
            let index = months.indexOf(month) + 1;
            let m = index < 10 ? '0' + index.toString() : index;
            return m;
        },
        getDay(day){
            let d = day < 10 ? '0' + day.toString() : day;
            return d;
        },
        handleSubmit() {
            this.v$.$validate()
            if(!this.v$.$error){
                const birthdate = `${this.state.year}-${this.getMonth(this.state.month, this.state.months)}-${this.getDay(this.state.day)}`;
                axios
                    .post(
                        (process.env.VUE_APP_URL || 'https://obstacle-backend.herokuapp.com') + '/signin', 
                        {
                            firstname: this.state.firstname,
                            lastname: this.state.lastname,
                            email: this.state.email,
                            password: this.state.password.password,
                            confirm: this.state.password.confirm,
                            gender: this.state.gender,
                            birthdate: birthdate,
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
