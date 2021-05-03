<template>
    <div class="container">
        <h3 class="credentials">Email :</h3>
        <h3 class="credentials">{{ user.email }}</h3>
    </div>
</template>

<script>
export default {
    name: 'ProfileBody',
    props: {
        user: Object
    }
}
</script>