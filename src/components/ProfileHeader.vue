<template>
    <div class="header">
        <img :src="user.image" :alt="user.firstname" id="profilepic"/>
        <div class="names">
            <h2 id="profile_names">{{ user.firstname }} {{ user.lastname }}</h2>
            <h3 id="role">{{ user.role }}</h3>
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