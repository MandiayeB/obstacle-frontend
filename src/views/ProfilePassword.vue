<template>
    <div class="homepage">
        <h1 id="homepage_title">Changer votre mot de passe</h1>
        <div class="separateur"></div>
        <div class ="cadreCredentials">
            <div class="cadreInput">
                <h3 class ="ajustementCredentials">Ancien mot de passe </h3>
                <input
                    type="password"
                    class="inputCadre tailleInput adjumentmentInputPrenom"
                    name="password"
                    placeholder="Ancien mot de passe"
                    v-model="oldPassword"
                />
            </div>
            <div class="cadreInput">
                <h3 class="ajustementCredentials">Nouveau mot de passe </h3>
                <input
                    type="password"
                    class="inputCadre tailleInput adjumentmentInputNom"
                    name="newPassword"
                    placeholder="Nouveau mot de passe"
                    v-model="newPassword"
                />
            </div>
            <div class="cadreInput">
                <h3 class="ajustementCredentials">Confirmer votre nouveau mot de passe </h3>
                <input
                    type="text"
                    class="inputCadre tailleInput adjumentmentInputEmail"
                    name="newpassword"
                    placeholder="Confirmer votre nouveau mot de passe"
                    v-model="confirmPassword"
                />
            </div>
        </div>
        <div class="emplacementButton">
            <form @submit.prevent="editing" action="" method="post">
                <button class="designButton" type="submit"> 
                    Modifier
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "EditPassword",
    data() {
        return {
            oldPassword: "",
            newPassword:"",
            confirmPassword:""

        };
        
    },
    methods: {
        editing(){
            axios
                .put("http://localhost:3000/profile", {
                    emailsession: sessionStorage.getItem("email"),
                    oldPassword: this.oldPassword,
                    newPassword: this.newPassword,
                    confirmPassword: this.confirmPassword
                })
                .catch((error) => {
                    if(error.response.status === 308){
                        this.$router.push('/profile');
                    }
                    
                });
        }
    }
};
</script>