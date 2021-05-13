<template>
    <div class="ajustement_contenent">
        <div class="cadre_login">
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
                        v-model="email"
                        class="inputCadre tailleInput"
                        name="email"
                        placeholder="Adresse mail"
                        autocomplete="off"
                        required
                    />
                </div>
                <br />
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
                <button value="" class="designButton" type="submit">
                    Créer un compte
                </button>
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
            email: "",
            password: "",
        };
    },
  methods: {
    handleSubmit() {
        const data = {
            email: this.email,
            password: this.password,
        };
        axios
            .post("http://localhost:3000/login", {
                email: this.email,
                password: this.password,
            })
            .catch((error) => {
                if (error.response.status === 308 || error.response.status === 307) {
                    this.$router.push("/");
                } else {
                    console.log(error);
                }
            });
    },
  },
};
</script>