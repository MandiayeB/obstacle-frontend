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
                <Email
                    @sucess='getEmail'
                 />
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
                    <button value="" class="designButton" type="submit">
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
import Email from "../components/Login components/Email.vue";

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    emits: ['sucess'],    
    components: {
        Email
    },
    methods: {
        getEmail(value){
            this.email = value;
        },
        handleSubmit() {
            axios
                .post("http://localhost:3000/login", {
                    email: this.email,
                    password: this.password,
                })
                .catch((error) => {
                    if (error.response.status === 308 || error.response.status === 307) {
                        this.$root.connect();
                        this.$router.push("/");
                    } else {
                        console.log(error);
                    }
                });
        },
        redirectToSignin() {
            this.$router.push("/signin");
        }
    },
};
</script>