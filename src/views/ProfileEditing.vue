<template>
    <div class="homepage">
        <h1 id="homepage_title">Profil</h1>
        <div class="separateur"></div>
            <div class="picture_profil">
                <img :src="user.image" :alt="user.firstname" />
            </div>
        <div class ="cadreCredentials">
            <div class="cadreInput">
                <h3 class ="ajustementCredentials">Prénom </h3>
                <input
                    type="text"
                    class="inputCadre tailleInput adjumentmentInputPrenom"
                    name="fistname"
                    :placeholder="user.firstname"
                    v-model="firstname"
                />
            </div>
            <div class="cadreInput">
                <h3 class="ajustementCredentials">Nom </h3>
                <input
                    type="text"
                    class="inputCadre tailleInput adjumentmentInputNom"
                    name="lastname"
                    :placeholder="user.lastname"
                    v-model="lastname"
                />
            </div>
            <div class="cadreInput">
                <h3 class="ajustementCredentials">Email </h3>
                <input
                    type="text"
                    class="inputCadre tailleInput adjumentmentInputEmail"
                    name="email"
                    :placeholder="user.email"
                    v-model="email"
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
        <div class="passwordForget">
            <router-link :to="'/profile/edit/password'">
                <a> Changer le mot de passe </a>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Setting",
    data() {
        return {
            user: {
                firstname: sessionStorage.getItem("firstname"),
                lastname: sessionStorage.getItem("lastname"),
                email: sessionStorage.getItem("email"),
                role: sessionStorage.getItem("role"),
                image:"https://photos.lci.fr/images/613/344/kanyewest2020afp-5b6354-0@1x.jpeg",
            },
            firstname: "",
            lastname:"",
            email:""

        };
        
    },
    beforeCreate() {
        if (!sessionStorage.getItem("isAuthenticated")) {
            this.$router.push("/login");
        }
    },
    created() {
        
    },
    methods: {
        editing(){
            axios
                .put("http://localhost:3000/profile", {
                    emailsession: sessionStorage.getItem("email"),
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    
                })
                .catch((error) => {
                    if(error.response.status === 308){
                        this.$router.push('/profile');
                        if(this.email!==""){
                            sessionStorage.setItem('email', this.email);
                        }
                        if(this.firstname!==""){
                            sessionStorage.setItem('firstname', this.firstname);
                        }
                        if(this.lastname!==""){
                            sessionStorage.setItem('lastname', this.lastname);
                        }
                    }
                    
                });
        }
    }
};
</script>
