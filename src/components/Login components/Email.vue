<template>
    <div class="cadreInput">
        <input
            type="text"
            v-model="email"
            class="inputCadre tailleInput"
            id="emailId"
            name="email"
            placeholder="Adresse mail"
            autocomplete="off"
            required
        />
    </div>
</template>

<script>
export default {
    name: 'Email',
    data(){
        return {
            email: '',
        }
    },
    emits: ['sucess'],
    watch: {
        email(value){
            // binding this to the data value in the email input
            this.email = value;
            this.validateEmail(value);
        }
    },
    methods:{
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        validateEmail(value){
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                this.$emit('sucess', value);
            } else {
                emailValue = document.getElementById("mail");
                setErrorFor(emailId, 'Wrong Email');
            }
        },
    },
}
</script>