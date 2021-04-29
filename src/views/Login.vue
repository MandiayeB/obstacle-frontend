<template>
  <div class="ajustement_contenent">
    <div class="cadre">
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
export default {
  name: "Login",
  data() {
    return {
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
        this.$router.push('/');
      }
      else{
        alert("Donnée incorrect !");
      }
    },
  },
};
</script>