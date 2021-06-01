<template>
    <div class="cadreInput">
        <input
            type="password"
            v-model="password"
            class="inputCadre tailleInput"
            name="password"
            id="pass"
            placeholder="Mot de passe"
            autocomplete="off"
            required
        />
    </div>
</template>

<script>
export default {
    name: 'Password',
    data(){
        return {
            password: '',
            msg: [],
        }
    },
    emits: ['sucessPassword'],
    watch: {
        password(value){
            // binding this to the data value in the email input
            this.password = value;
            this.validatePassword(value);
        }
    },
    methods:{
        validatePassword(value){
            if (/^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#])\S{6,12}$/.test(value)) { // Au moins une lettre dont une majuscule, un chiffre, un caractère parmi ($, @), et entre 6 et 12 caractères (hors espaces).
                this.msg['password'] = '';
                this.$emit('sucessPassword', value);
            } else{
                this.msg['password'] = "Le mot de passe doit contenir Au moins une lettre dont une majuscule, un chiffre, un caractère parmi ($, @), et entre 6 et 12 caractères (hors espaces).";
            } 
        },
    },
}
</script>