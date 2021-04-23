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

<style>
.body {
    display: flex;
    width: 1000px;
    margin-top: 20px;
    border-radius: 7px;
    border: 1px solid rgb(56, 68, 77);
    padding-bottom: 5px;
}
h3 {
    margin: 15px 0 10px 20px;
    font-weight: 400;
    color: #B0C4DE;
}
</style>