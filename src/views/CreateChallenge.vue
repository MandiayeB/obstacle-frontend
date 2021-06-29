<template>
    <div class="add_challenge_container">
        <div class="add_challenge_header">
            <h1 id="add_challenge_title">Crée un Challenge</h1>
        </div>
        <div class="separateur"></div>
        <form @submit.prevent="add" action="" method="post">
            <div class="challenge_container">
                <div class="h3_challenge">
                    <h3 class="challenge_h3">Theme :</h3>
                    <h3 class="challenge_h3">Activité :</h3>
                    <h3 class="challenge_h3">Challenge :</h3>
                </div>
                <div class="challenge_input">
                    <select v-model="theme" class="select_challenge" required>
                        <option disabled selected>Theme</option>
                        <option :key="challenge" v-for="challenge in challenge" :value="challenge">{{ challenge[0] }}</option>
                    </select>
                    <select v-model="activiter" class="select_challenge" required>
                        <option disabled value>Activité</option>
                        <option :key="activite" v-for="activite in activite" :value="activite">{{ activite[0] }}</option>
                        
                    </select>
                    <input
                        type="text"
                        v-model="titleChallenge"
                        class="inputCadre size_challenge"
                        name="challenge"
                        placeholder="Titre du challenge"
                        autocomplete="off"
                        required
                    />
                </div>
            </div>
            <div class="separateur"></div>
            <h3> Ajouter une difficulté : </h3>
            <div class="new_difficulty">
                <div class="h3_difficulty">
                    <h3>Titre</h3>
                    <h3>Durée</h3>
                    <h3>Gif</h3>
                    <h3>Difficulté</h3>

                </div>
                <div class ="input_difficulty">
                    <input 
                        type="text"
                        v-model="titleDifficulty"
                        class="inputCadre size_challenge"
                        name="difficulty"
                        placeholder="Titre du Difficulté"
                        autocomplete="off"
                        required
                    >
                    <input 
                        type="number"
                        v-model="duree"
                        class="inputCadre size_challenge"
                        name="duree"
                        placeholder="Durée en jour"
                        autocomplete="off"
                        required
                    >
                    <input 
                        type="text"
                        v-model="gif"
                        class="inputCadre size_challenge"
                        name="gif"
                        placeholder="URL du gif"
                        autocomplete="off"
                        required
                    >
                    <select v-model="typeDifficulty" class="select_challenge" required>
                        <option disabled value >Type de Difficulté</option>
                        <option :key="difficulter" v-for="difficulter in difficulter" :value="difficulter">{{ difficulter }}</option> 
                    </select>
                </div>
            </div>
            <div class="button_challenge">
                <button class="designButton" type="submit">
                    Confirmer
                </button>
            </div> 
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'CreateChallenge',
    data () {
        return {
            challenge: [],
            activite: [],
            difficulter: ['Facile', 'Moyen', 'intermédiaire', 'Dur', 'Expert'],
        }

    },
    mounted() {
        axios
            .get('http://localhost:3000/create',
                { withCredentials: true })
            .then(response => {
                for(let i=0; i<response.data.length; i++){
                    const theme = [response.data[i].name];
                    this.challenge.push(theme); 
                    for(let y=0; y<response.data[i].activity.length; y++){
                        console.log(response.data);
                        const acti = [response.data[i].activity[y].name];
                        this.activite.push(acti);
                    } 
                }
        })
    },
    methods: {
        add() {
            axios
                .post('http://localhost:3000/create', {
                    theme: this.theme,
                    typeDifficulty: this.typeDifficulty,
                    gif: this.gif,
                    duree: this.duree,
                    titleDifficulty: this.titleDifficulty,
                    titleChallenge: this.titleChallenge,
                    activiter: this.activiter,
                },
                { withCredentials: true });
        }
    } 
}
</script>