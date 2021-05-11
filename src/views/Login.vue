<template>
    <div class="ajustement_contenent">
        <div class="cadre">
            <!-- <h1>{{ User.firstname }}</h1> -->
            <form @submit.prevent="handleSubmit" action="" method="post">
                <div class="cadreInput">
                    <input
                    type="text"
                    v-model="user"
                    class="inputCadre tailleInput"
                    name="user"
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
                    name="pass"
                    id="pass"
                    placeholder="Mot de passe"
                    autocomplete="off"
                    required
                    />
                </div>
                <div class="unButton">
                    <button value="" class="designButton" type="submit">
                    Connexion
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
      User: {},
      user: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        user: this.user,
        password: this.password,
      };
      console.log(data);
      if (this.user == "Allane" && this.password == "az") {
        this.$router.push("/");
      } else {
        //alert("Donnée incorrect !");
      }
    },
  },
  async mounted() {
    await axios
      .get("http://localhost:3000/profile")
      .then((response) => {
        console.log(response.data);
        this.User = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>