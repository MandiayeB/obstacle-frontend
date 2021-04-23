<template>
    <div class="header">
        <img :src="user.image" :alt="user.firstname" id="profilepic"/>
        <div class="names">
            <h2>{{ user.firstname }} {{ user.lastname }}</h2>
            <h3>{{ user.role }}</h3>
         </div>
        <img src="../assets/images/settings.png" id="settings"/>
    </div>
</template>

<script>
export default {
    name: 'ProfileHeader',
    props: {
        user: Object
    }
}
</script>

<style scoped>
.header {
    display: flex;
    width: 550px;
    overflow: hidden;
    border-radius: 7px;
    border: 1px solid rgb(56, 68, 77);
}
h2 {
    font-family: Segoe UI;
    white-space: nowrap;
    margin: 20px 0 0 20px;
    font-weight: 400;
    line-height: 1.2;
    color: #B0C4DE;
}
h3 {
    margin: 15px 0 0 20px;
    font-weight: 400;
    color: #dec3b0;
}
#profilepic {
    width: 300px;
}
#settings {
    width: 25px;
    align-self: flex-end;
    margin-bottom: 10px;
    filter: invert(50%);
}
</style>
