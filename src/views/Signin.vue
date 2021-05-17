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
                            v-model="firstname"
                            class="inputCadre tailleInput"
                            name="firstname"
                            placeholder="Prénom"
                            autocomplete="off"
                            required
                        />
                    </div>
                    <div class="cadreInputLastName">
                        <input
                            type="text"
                            v-model="lastname"
                            class="inputCadre tailleInput"
                            name="lastname"
                            placeholder="Nom"
                            autocomplete="off"
                            required
                        />
                    </div>
                </div>
                <div class="cadreInput">
                    <input
                        type="email"
                        v-model="email"
                        class="inputCadre tailleInput"
                        name="email"
                        placeholder="E-mail"
                        autocomplete="off"
                        required
                    />
                </div>
                <div class="cadreInput">
                    <input
                        type="password"
                        v-model="password"
                        class="inputCadre tailleInput"
                        name="pass"
                        placeholder="Mot de passe"
                        autocomplete="off"
                        required
                    />
                </div>
                <div class="cadreInput">
                    <input
                        type="password"
                        v-model="pw_confirmation"
                        class="inputCadre tailleInput"
                        name="pw_confirmation"
                        placeholder="Confirmer le mot de passe"
                        autocomplete="off"
                        required
                    />
                </div>
                <div class="birthdate_signin">
                    <div class="label_date_signin">
                        <label for="date">Date de naissance</label>
                    </div>
                    <div class="cadreInputDate">
                        <select v-model="day" class="select_day_birth" required>
                            <option disabled value>Jour</option>
                            <option  :key="day.id" v-for="day in 31" :value="day">{{ day }}</option>
                        </select>
                         <select v-model="month" class="select_month_birth" required>
                             <option disabled value>Mois</option>
                            <option :key="month.id" v-for="month in months" :value="month">{{ month }}</option>
                        </select>
                        <select v-model="year" class="select_year_birth" required>
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
                        <select v-model="gender" class="select_gender" name="gender" required>
                            <option disabled value>Genre</option>
                            <option :key="gender.id" v-for="gender in genders" :value="gender">{{ gender }}</option>
                        </select>
                    </div>
                </div>
                <div class="unButton">
                    <button value="" class="designButton" type="submit">
                        S'inscrire
                    </button>
                </div>
            </form>
            <div class="passwordForget">
                <a href="/login"> Déjà inscrit ? Se connecter </a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'Signin',
    data() {
        return{
            genders: [ 'Homme', 'Femme', 'Autre' ],
            months: [ 'jan', 'fév', 'avr', 'mai', 'juin','juil','août','sept','oct','nov','dec' ],
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            pw_confirmation: "",
            gender: "",
            day: "",
            month: "",
            year: "",
        }
    },
    computed : {
        years () {
            const year = new Date().getFullYear();
            return Array.from({length: year - 1900}, (value, index) => 1901 + index).reverse();
        }
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
            const birthdate = `${this.year}-${this.getMonth(this.month, this.months)}-${this.getDay(this.day)}`;
            axios
                .post("http://localhost:3000/signin", {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password,
                    pw_confirmation: this.pw_confirmation,
                    gender: this.gender,
                    birthdate: birthdate,
                })
                .catch((error) => {
                    if (error.response.status === 308 || error.response.status === 307) {
                        this.$router.push("/login");
                    } else {
                        console.log(error);
                    }
                });
        },
    },
}
</script>
