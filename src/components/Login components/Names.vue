<template>
    <div class="cadreInputName">
        <div class="cadreInputFirstName">
            <input
                type="text"
                v-model="firstname"
                class="inputCadre tailleInput"
                name="firstname"
                placeholder="Prénom"
                autocomplete="off"
                required
            />
        </div>
        <div class="cadreInputLastName">
            <input
                type="text"
                v-model="lastname"
                class="inputCadre tailleInput"
                name="lastname"
                placeholder="Nom"
                autocomplete="off"
                required
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Names',
    data(){
        return {
            firstname: '',
            lastname: '',
            validate: [false, false],
        }
    },
    emits: ['sucessNames'],
    watch: {
        firstname(value){
            // binding this to the data value in the email input
            this.firstname = value;
            this.validateNames(value, 0);
        },
        lastname(value){
            // binding this to the data value in the email input
            this.lastname = value;
            this.validateNames(value, 1);
        }
    },
    methods:{
        validateNames(value, id){
            if ( value.length >= 2 && value.length < 16 ) {
                if(id === 0){
                    this.validate[0] = true;
                } else {
                    this.validate[1] = true;
                }
                this.sendNames();
            }
        },
        sendNames(){
            if (this.validate[0] == true && this.validate[1] == true){
                this.$emit('sucessNames', this.firstname, this.lastname);
            }
        }
    },
}
</script>