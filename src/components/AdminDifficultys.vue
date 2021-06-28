<template>
    <div :key="difficulty" v-for="difficulty in difficultys">
        <AdminDifficulty :difficulty="difficulty"/>
    </div>  
</template>

<script>
import AdminDifficulty from './AdminDifficulty';

export default {

    name: 'Difficultys',
    components: {
        AdminDifficulty,
    },
    props: {
        difficultys: { type: Object }
    },

}

</script>
