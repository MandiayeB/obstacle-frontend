<template>
    <form @submit.prevent="handleSubmit" action="" method="post" class="daily_content_center">
            <Sport />
            <!-- <Computing />
            <Cooking /> -->
            <button class="designButton" type="submit">
                Valider mon défi !
            </button>
    </form>
</template>

<script>
import useValidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { reactive, computed } from 'vue';
import Sport from './achievements/Sport.vue';


export default {
    name: 'Achievements',
    components: { Sport },
    setup(){
        const state = reactive({
            duree: Number,
            displayError: false,
            errorMsg: String,
        })

        const rules = computed(() => {
            return {
                duree: {
                    required: helpers.withMessage('*Champ obligatoire.',required),
                },
            }
        })
        const v$ = useValidate(rules, state);
        return{
            state, 
            v$,
        }
    },
    methods: {

        handleSubmit() {
            this.v$.$validate()
            if(!this.v$.$error){
                axios
                    .post("http://localhost:3000/signin", {

                    })
                    .catch((error) => {
                        if (error.response.status === 308 || error.response.status === 307) {
                            this.$router.push("/login");
                        } else {
                            console.log(error);
                            this.state.errorMsg = error.response.data;
                            this.state.displayError = true;
                        }
                    });
            } else {
                console.log(this.v$.$errors);
            }

        },
    },
}
</script>