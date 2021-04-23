<template>
    <div class="goal">
        <h4>{{ goal.text }}</h4>
        <img :src="goal.img" :alt="goal.text">
    </div>
</template>

<script>
export default {
    name: 'Goal',
    props: {
        goal: Object
    },
}
</script>

<style scoped>
.goal {
    border: 1px solid rgb(56, 68, 77);
    width: 350px;
    height: 260px;
    overflow: hidden;
    border-radius: 7px;
    margin-bottom: 50px;
}
.goal:hover {
    background-color: rgb(36, 54, 71);
    box-shadow: rgb(136 153 166 / 5%) 0px 0px 15px,
    rgb(136 153 166 / 15%) 0px 0px 3px 1px;
    width: 390px;
    height: 300px;
    margin-right: -20px;
    margin-left: -20px;
    margin-bottom: 10px;
}
.goal:hover h4 {
    font-weight: 500;
}
.goal:hover img {
    height: 240px;
    width: 390px;
}
h4 {
    font-family: Segoe UI;
    font-weight: 350;
    color: #B0C4DE;
    padding-left: 20px;
}
img {
    height: 200px;
    width: 350px;
}
</style>
