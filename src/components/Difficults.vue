<template>
    <div :key="difficult" v-for="difficult in difficults">
        <Difficult :difficult="difficult"/>
    </div>  
</template>

<script>
import Difficult from './Difficult';

export default {

    name: 'Difficults',
    components: {
        Difficult,
    },
    props: {
        difficults: { type: Object }
    },

}

</script>
