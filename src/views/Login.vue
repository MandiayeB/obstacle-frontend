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

<style scoped>
.cadreInput {
  display: inline-block;
  padding: 6px 0;
  font-size: 17px;
  width: 364px;
  margin-left:15px;
}
.passwordForget a {
  color: rgb(106, 108, 119);
  font-size: 14px;
  font-weight: 500;
  margin-left: 125px;
}
.stringButton {
  color: #fff;
}
.designButton {
  background-color: rgb(36, 54, 71);
  border: none;
  border-radius: 6px;
  font-size: 20px;
  line-height: 48px;
  padding: 0 16px;
  width: 365px;
  margin-top: 20px;
  margin-left: 15px;
}
.passwordForget {
  margin-top: 16px;
  color: rgb(106, 108, 119);
  font-size: 14px;
  font-weight: 500;
}
.ajustement_contenent {
  padding-bottom: 24px;
  padding-top: 10px;
}
.cadreInput .tailleInput {
  font-size: 17px;
  padding: 14px 16px;
  width: 330px;
  border-radius: 6px;
}
.cadre {
  align-items: center;
  background-color: rgb(25, 39, 52);
  border: 1px solid rgb(40, 47, 53);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  margin: 100px auto;
  padding: 20px 0 28px;
  width: 396px;
}
.separateur {
  align-items: center;
  border-bottom: 1px solid rgb(56, 68, 77);
  display: flex;
  margin: 20px 16px;
  margin-bottom: 5px;
  text-align: center;
}
.inputCadre {
  background: rgb(43, 48, 58) url(/rsrc.php/v3/yO/r/YQNfPR9MJfx.png) repeat-x;
  border: 1px solid #6c6f72;
  color: #c9d0dd;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  height: 22px;
  line-height: 16px;
  padding: 0 8px;
  vertical-align: middle;
}
</style>