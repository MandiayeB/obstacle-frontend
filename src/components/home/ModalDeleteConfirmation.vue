<template>
    <div id="delete_goal_div">
        <button id="delete_goal_button" @click="showModal = true">
            <img id="delete_goal_cross" src="../../assets/images/deleteGoal.png" alt="cross">
        </button>
        <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
        </transition>
        <transition name="slide" appear>
            <div class="modal" v-if="showModal">
                <h1>Êtes-vous sûr ?</h1>
                <div id="space_between_modal">
                    <button class="designButton" @click="showModal = false">
                        Continuer
                    </button>
                    <button class="designButton red_button" @click="deleteGoal()">
                        Supprimer
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'ModalDeleteConfirmation',
    emits: ['deleteGoalEvent'],
    data(){
        return {
            showModal: false,
        }
    },
    props:{
        goal_id: Number,
    },
    methods:{
        deleteGoal(){
            this.showModal = false;
            axios
                .post('http://localhost:3000/dailycontent/goaldeletion', 
                    { goal_id: this.goal_id }, 
                    { withCredentials: true })
                .then(() => {
                    const goal_id = this.goal_id;
                    this.$emit('deleteGoalEvent', goal_id);
                })
                .catch((error) => console.log(error));
        }
    }
}
</script>