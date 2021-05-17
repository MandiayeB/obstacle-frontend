<template>
  <div class="ajustement_contenent">
    <div class="cadre">
      <!-- <h1>{{ User.firstname }}</h1> -->
      <form @submit.prevent="handleSubmit">
        <div class="cadreInput">
          <input
            type="email"
            v-model="email"
            class="inputCadre tailleInput"
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
            id="pass"
            placeholder="Mot de passe"
            autocomplete="off"
            required
          />
        </div>
        <div class="unButton">
          <button value="" class="designButton stringButton" type="submit">
            Connexion
          </button>
        </div>
      </form>
      <div class="passwordForget">
        <a href=""> Mot de passe oublié&nbsp;?</a>
      </div>
      <div class="separateur"></div>
      <div class="unButton">
        <button value="" class="designButton stringButton" type="submit">
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
            alert(" Wrong credentials ");
          }
        });
    },
  },
};
</script>