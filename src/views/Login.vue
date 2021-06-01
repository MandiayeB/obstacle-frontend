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
            <form @submit.prevent="handleSubmit" action="" method="post" novalidate="true" id="login" >
                <div class="cadreInput">
                    <input
                        type="text"
                        v-model="email"
                        class="inputCadre tailleInput"
                        id="emailId"
                        name="email"
                        placeholder="Adresse mail"
                        autocomplete="off"
                        required
                    />
                </div> 
                <div class="cadreInput">
                    <input
                        type="password"
                        v-model="password"
                        class="inputCadre tailleInput"
                        name="password"
                        id="pass"
                        placeholder="Mot de passe"
                        autocomplete="off"
                        required
                    />
                </div>
                <div class="unButton">
                    <button class="designButton" type="submit" id="button">
                        Se connecter
                    </button>
                </div>
            </form>
            <div class="passwordForget">
                <a href=""> Mot de passe oublié&nbsp;?</a>
            </div>
            <div class="separateur"></div>
            <div class="unButton">
                <form @submit.prevent="redirectToSignin" action="" method="post">
                    <button value="" class="designButton" type="submit">
                        Créer un compte
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Login",
    data() {
        return {
            errors: [],
            email: "",
            password: "",
            count: 0,
        };
    },
    methods: {
        handleSubmit(e) {

            axios
                .post("http://localhost:3000/login", {
                    email: this.email,
                    password: this.password,
                })
                .catch((error) => {
                    if (error.response.status === 308 || error.response.status === 307) {
                        this.$root.connect(3);
                        this.$router.push("/");
                    } else {
                        console.log(error);
                    }
                }); 
        },
        redirectToSignin() {
            this.$router.push("/signin");
        },
        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        validPassword(password){
            var re = /^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#])\S{6,12}$/;
            return re.test(password);
        }
    },
};
</script>
