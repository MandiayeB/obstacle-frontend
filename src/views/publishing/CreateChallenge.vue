<template>
    <div class="add_challenge_container">
        <div class="add_challenge_header">
            <h1 id="add_challenge_title">Créer un Challenge</h1>
        </div>
        <div class="separateur"></div>
        <form @submit.prevent="add" action="" method="post">
            <div class="challenge_container">
                <div class="h3_challenge">
                    <h3 class="challenge_h3">Activité :</h3>
                    <h3 class="challenge_h3">Challenge :</h3>
                </div>
                <div class="challenge_input">
                    <select v-model="activity" class="select_challenge" required>
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
                    <h3>Gif</h3>
                    <h3>Difficulté</h3>

                </div>
                <div class ="input_difficulty">
                    <input 
                        type="text"
                        v-model="titleDifficulty"
                        class="inputCadre size_challenge width_difficulty"
                        name="difficulty"
                        placeholder="Nom de la difficulté"
                        autocomplete="off"
                        required
                    >
                    <input 
                        type="text"
                        v-model="gif"
                        class="inputCadre size_challenge width_difficulty"
                        name="gif"
                        placeholder="URL du gif"
                        autocomplete="off"
                        required
                    >
                    <select v-model="typeDifficulty" class="select_challenge width_difficulty" required>
                        <option disabled value >Type de Difficulté</option>
                        <option :key="difficulty" v-for="difficulty in difficulties" :value="difficulty">{{ difficulty }}</option> 
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
            difficulties: ['facile', 'moyen', 'intermédiaire', 'difficile', 'expert'],
        }

    },
    mounted() {
        axios
            .get('http://localhost:3000/create',
                { withCredentials: true })
            .then(response => {
                for (let i = 0; i < response.data.length; i++) {
                    const theme = [response.data[i].name];
                    this.challenge.push(theme); 
                    for (let y = 0; y < response.data[i].activity.length; y++) {
                        const acti = [response.data[i].activity[y].name];
                        this.activite.push(acti);
                    }
                }
        })
    },
    methods: {
        add() {
            axios
                .post('http://localhost:3000/create/newchallenge', {
                    theme: this.theme,
                    typeDifficulty: this.typeDifficulty,
                    gif: this.gif,
                    titleDifficulty: this.titleDifficulty,
                    titleChallenge: this.titleChallenge,
                    activity: this.activity,
                    author_id: sessionStorage.getItem("id"),
                },
                { withCredentials: true })
                .catch(error => {
                    console.log(error);
                })
                this.$router.push("/mychallenges");
        }
    } 
}
</script>