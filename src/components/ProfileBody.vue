<template>
    <div class="body">
        <h3>Email :</h3>
        <h3>{{ user.email }}</h3>
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