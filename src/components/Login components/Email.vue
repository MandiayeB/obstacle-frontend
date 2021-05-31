<template>
    <div class="cadreInput">
        <input
            type="text"
            v-model="email"
            class="inputCadre tailleInput"
            name="email"
            placeholder="Adresse mail"
            autocomplete="off"
            required
        />
        <span v-if="msg.email"></span>
    </div>
</template>

<script>
export default {
    name: 'Email',
    data(){
        return {
            email: '',
            msg: [],
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
        validateEmail(value){
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                this.msg['email'] = '';
                this.$emit('sucess', value);
            } else{
                this.msg['email'] = 'Invalid Email Address';
            } 
        },
    },
}
</script>