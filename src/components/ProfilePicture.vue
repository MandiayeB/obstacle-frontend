<template>
    <img v-if="firstname" :src="profilePicture" :alt="firstname"/>
</template>

<script>
export default {
    name:'ProfilePicture',
    props:{
        profilePicture: String,
        firstname: String,
    }
}
</script>