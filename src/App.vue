<template>
  <div id="container">
    <div id="app">
      <ResponsiveNavigation
      :nav-links="navLinks"
      :image-path="require('./assets/images/menuLogo.png')"
      :image-profile="require('./assets/images/exempleProfil.jpg')"
      background="rgb(25, 39, 52)" 
      link-color="#fff"
      hoverBackground="rgb(35, 66, 95)"
      />  <!--background l6 = nav background / link-color = li color -->
    </div>
    <router-view />
  </div>
</template>

<script>
import ResponsiveNavigation from './components/ResponsiveNavigation.vue';

export default {
  components: {
    ResponsiveNavigation,
  },
  data: () => ({
    navLinks: [
      {
        text: 'Home',
        path: '/',
        icon: 'ion-ios-home'
      },
      {
        text: 'Login',
        path: '/login',
        icon: 'ion-ios-log-in'
      },
      {
        text: 'Profile',
        path: '/profile',
        icon: 'ion-ios-person'
      },
    ]
  })
}
</script>

<style lang="scss" scoped>
@import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>