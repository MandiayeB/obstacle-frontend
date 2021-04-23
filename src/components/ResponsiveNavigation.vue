<template>
  <nav :style="{ background: background || '#333'}">
    <ul :style="{ background: background || '#333'}" ref="nav">
      <figure class="image-logo" @click="toggleNav">
        <img :src="imagePath"/>
      </figure>
      <li 
        v-for="(link, index) in navLinks"
        :key="index"
        @mouseenter="$event.currentTarget.style.background = hoverBackground || '#fff'"
        @mouseleave="$event.currentTarget.style.background = background || '#fff'"
      >
        <router-link 
          :to="link.path"
          :style="{ color: linkColor || '#DDD' }"
        >
          {{ link.text }}
          <i :class="link.icon" />
        </router-link>
      </li>
      <!--<figure class="profile" @click="toggleProfile">
        <img src="exempleProfil.jpg" height="200px" width="400px" />
      </figure>-->
    </ul>


  </nav>
</template>

<script>
export default {
  props: ['navLinks', 'background', 'linkColor', 'hoverBackground','imagePath','imageProfile'],
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList
      nav.contains('active') ? nav.remove('active') : nav.add('active')
    }
  }
}
</script>

<style scoped lang="scss">

nav {
    height: 60px;
    width: 100%;
    box-shadow: 1px 1px 1px rgb(73, 72, 72);
    ul { // Resolve the little white bar issue with the nav
      display: flex;  
      height: 100%;
      align-items: center;
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start:0;
      box-shadow: 1px 1px 1px rgb(73, 72, 72);
      
      figure{
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 10px;
        margin-inline-end: 0;
        cursor: pointer;
        margin-right: 10px;
      }

      a {
        text-decoration: none;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
      }

      i{
         margin-right: 10px;
         font-size: 22px;
      }
      li {
        list-style-type: none;
        padding: 10px 20px;
      }
    }

    img{
      height: 40px;
      width: 40px;
    }
    nav img{
       height: 40px;
      width: 40px;
    }
}
@media screen and (max-width: 759px) {
  nav{
    ul{
      position:absolute;
      width: 300px;
      flex-direction: column;
      left: -240px;
      transition: 300ms ease all;
      top: 60px;
      box-shadow: 1px 1px 1px rgb(73, 72, 72);
      &.active{
        left: 0px;
      }

      figure {
        position: fixed;
        z-index: 1;
        top: 10px;
        left: 2px;
      }

      i{
         margin-right: 0px;
      }
      li{
        width: 100%;
        padding-left: 0;
        padding-right: 0;

      }

      a{
        flex-direction: row;
        margin-left: 20px;
        justify-content: space-between;
        margin-right: 20px;
      }
    }
  }
}
</style>
